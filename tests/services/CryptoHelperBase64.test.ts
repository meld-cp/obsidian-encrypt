import { Buffer } from 'node:buffer';
import { describe, expect, it } from 'vitest';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';
import { CryptoHelperObsolete } from '../../src/services/CryptoHelperObsolete.ts';
import { decodeBase64, encodeBase64 } from '../../src/services/CryptoHelperV3.ts';

const password = 'base64-compat-password';
const plaintext = 'fixture café 🔐\nsecond line';
// Captured from the released-format helpers before consolidating their codecs.
const fixtures = [
	{
		name: 'obsolete', helper: new CryptoHelperObsolete(),
		ciphertext: '22XrA/Aoyrzv5IuUyNCRVd4WMHSX3R/Ngy3es2gD/CJyfwEW6fftOVNkxiaqRA==',
	},
	{
		name: 'v1', helper: new CryptoHelper(),
		ciphertext: '36kq1U99vPjB3jbpQFNSI7Sg7z+moH2KsmfFHgeWnUqiFEXh030Sfr/0xoiVFD9J6Q2hNZ7xyvCupFaghys=',
	},
	{
		name: 'v2', helper: new CryptoHelper2304(16, 16, 210000),
		ciphertext: 'dbjSBLAWuxximMmiYQCibpxcWnWlw+urBNXtiRLZAMUieih6iQMgg9dzBmq9C32sPYTJQrHG9AHj9NxW5MLmlsYAG8dxS6Ot3hXbFmjF',
	},
];

describe.each(fixtures)('$name Base64 compatibility', ({ helper, ciphertext }) => {
	it('reads a fixed ciphertext from before the codec refactor', async () => {
		expect(await helper.decryptFromBase64(ciphertext, password)).toBe(plaintext);
	});

	it('retains permissive legacy decoding', async () => {
		const variants = [
			` \t${ciphertext.slice(0, 12)}\r\n${ciphertext.slice(12)}\f`,
			ciphertext.replace(/=+$/, ''),
		];
		if (ciphertext.endsWith('=')) {
			// Nonzero unused pad bits decode to the same bytes in legacy formats.
			const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
			const unpadded = ciphertext.replace(/=+$/, '');
			const last = unpadded.length - 1;
			variants.push(unpadded.slice(0, last) + alphabet[alphabet.indexOf(unpadded[last]) + 1] + ciphertext.slice(unpadded.length));
		}
		for (const value of variants) {
			expect(await helper.decryptFromBase64(value, password)).toBe(plaintext);
		}
	});

	it('round-trips a large Unicode payload without exceeding the argument limit', async () => {
		const text = 'large café 🔐\n'.repeat(20000);
		const encoded = await helper.encryptToBase64(text, password);
		expect(await helper.decryptFromBase64(encoded, password)).toBe(text);
	});
});

describe('Base64 encoding and v3 validation', () => {
	it.each([0, 1, 2, 3, 8191, 8192, 8193, 262145])('encodes %i bytes identically to an independent codec', length => {
		const bytes = Uint8Array.from({ length: length + 2 }, (_, index) => index % 256).subarray(1, length + 1);
		const expected = Buffer.from(bytes).toString('base64');
		expect(encodeBase64(bytes)).toBe(expected);
		expect(decodeBase64(expected)).toEqual(bytes);
	});

	it.each([' Zg==', 'Zg==\n', 'Zg', 'Zh==', 'Zg==!'])('keeps v3 strict about noncanonical input %j', value => {
		expect(() => decodeBase64(value)).toThrow();
	});
});
