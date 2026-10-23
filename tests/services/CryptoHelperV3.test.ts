import { describe, it, expect, vi } from 'vitest';
import { CryptoHelperV3, encodeInlineV3, decodeInlineV3, validateEnvelopeV3 } from '../../src/services/CryptoHelperV3.ts';
import { FileDataHelper, JsonFileEncoding } from '../../src/services/FileDataHelper.ts';
import { CryptoHelperFactory } from '../../src/services/CryptoHelperFactory.ts';
import { FeatureInplaceTextAnalysis } from '../../src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';

const password = 'independent-v3-password';
const helper = new CryptoHelperV3();
const base64 = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes));

// Independent Web Crypto writer: no production envelope/inline codec or crypto helper.
async function fixture(text: string, iterations = 220000) {
	const salt = Uint8Array.from({ length: 16 }, (_, i) => i);
	const iv = Uint8Array.from({ length: 12 }, (_, i) => i + 20);
	const metadata = {
		version: '3.0' as const,
		kdf: { name: 'PBKDF2' as const, hash: 'SHA-512' as const, iterations, salt: base64(salt) },
		cipher: { name: 'AES-GCM' as const, keyLength: 256 as const, iv: base64(iv), tagLength: 128 as const },
	};
	const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
	const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-512', salt, iterations }, material, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
	const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, tagLength: 128, additionalData: new TextEncoder().encode(JSON.stringify(metadata)) }, key, new TextEncoder().encode(text)));
	const prefix = Uint8Array.of(1, (iterations >>> 16) & 255, (iterations >>> 8) & 255, iterations & 255);
	return {
		envelope: { ...metadata, encodedData: base64(ciphertext) },
		inline: base64(Uint8Array.from([...prefix, ...salt, ...iv, ...ciphertext])),
	};
}

describe('self-describing v3 encryption', () => {
	it.each(['', 'Unicode 🔐 café\nsecond line'])('should read independent fixtures for %j', async text => {
		const { envelope, inline } = await fixture(text);
		const wholeNote = JsonFileEncoding.decode(JSON.stringify({ ...envelope, hint: 'public hint' }));
		expect(await FileDataHelper.decrypt(wholeNote, password)).toBe(text);
		for (const marked of [`%%🔐γ 💡hint💡${inline} 🔐%%`, `🔐γ ${inline} 🔐`]) {
			const parsed = new FeatureInplaceTextAnalysis(marked).decryptable!;
			expect(parsed.version).toBe(3);
			expect(await CryptoHelperFactory.BuildFromDecryptableOrThrow(parsed).decryptFromBase64(parsed.base64CipherText, password)).toBe(text);
		}
		expect(encodeInlineV3(envelope)).toBe(inline);
		expect(decodeInlineV3(inline)).toEqual(envelope);
	});

	it('should honor stored iterations rather than current defaults', async () => {
		const { envelope, inline } = await fixture('alternate work factor', 230000);
		expect(await helper.decryptEnvelope(envelope, password)).toBe('alternate work factor');
		expect(await helper.decryptFromBase64(inline, password)).toBe('alternate work factor');
	});

	it('should write only four header bytes and interoperate between representations', async () => {
		const text = 'compact 🔐';
		const inline = await helper.encryptToBase64(text, password);
		const bytes = Uint8Array.from(atob(inline), c => c.charCodeAt(0));
		expect(bytes.length).toBe(4 + 16 + 12 + new TextEncoder().encode(text).length + 16);
		expect([...bytes.slice(0, 4)]).toEqual([1, 3, 91, 96]);
		const envelope = decodeInlineV3(inline);
		expect(await helper.decryptEnvelope(envelope, password)).toBe(text);
		const whole = await FileDataHelper.encrypt(password, 'hint', text);
		expect(whole.kdf?.iterations).toBe(220000);
		expect(await helper.decryptFromBase64(encodeInlineV3(validateEnvelopeV3(whole)), password)).toBe(text);
		expect(await FileDataHelper.decrypt(JsonFileEncoding.decode(JsonFileEncoding.encode(whole)), password)).toBe(text);
	});

	it('should accept reordered JSON properties without changing authenticated metadata', async () => {
		const { envelope } = await fixture('order');
		const reordered = { encodedData: envelope.encodedData, cipher: { tagLength: 128, iv: envelope.cipher.iv, keyLength: 256, name: 'AES-GCM' }, kdf: { salt: envelope.kdf.salt, iterations: 220000, hash: 'SHA-512', name: 'PBKDF2' }, version: '3.0', hint: 'editable hint' };
		expect(await helper.decryptEnvelope(reordered, password)).toBe('order');
	});

	it('should reject wrong passwords and authenticated metadata/ciphertext modifications', async () => {
		const { envelope, inline } = await fixture('authenticated');
		expect(await helper.decryptEnvelope(envelope, 'wrong password')).toBeNull();
		const modifiedIterations = structuredClone(envelope);
		modifiedIterations.kdf.iterations = 230000;
		expect(await helper.decryptEnvelope(modifiedIterations, password)).toBeNull();
		// Alter one byte in each of the iteration, salt, IV, and ciphertext/tag regions.
		for (const offset of [3, 4, 20, 32, atob(inline).length - 1]) {
			const bytes = Uint8Array.from(atob(inline), c => c.charCodeAt(0));
			bytes[offset] ^= 1;
			expect(await helper.decryptFromBase64(base64(bytes), password)).toBeNull();
		}
	});

	it('should reject malformed metadata before deriving any key', async () => {
		const { envelope, inline } = await fixture('validation');
		const invalid: unknown[] = [
			{ ...envelope, version: '4.0' },
			{ ...envelope, extra: true },
			{ ...envelope, encodedData: '' },
			{ ...envelope, encodedData: '!!!!' },
			{ ...envelope, encodedData: 'AB==' },
			{ ...envelope, cipher: { ...envelope.cipher, name: 'AES-CBC' } },
			{ ...envelope, cipher: { ...envelope.cipher, keyLength: 128 } },
			{ ...envelope, cipher: { ...envelope.cipher, tagLength: 96 } },
			{ ...envelope, cipher: { ...envelope.cipher, iv: base64(new Uint8Array(16)) } },
			{ ...envelope, kdf: { ...envelope.kdf, salt: base64(new Uint8Array(8)) } },
			{ ...envelope, kdf: { ...envelope.kdf, name: 'unknown' } },
			{ ...envelope, kdf: { ...envelope.kdf, hash: 'SHA-256' } },
			{ ...envelope, kdf: { ...envelope.kdf, extra: true } },
			{ ...envelope, kdf: undefined },
			...[219999, 2000001, 220000.5, '220000', NaN].map(iterations => ({ ...envelope, kdf: { ...envelope.kdf, iterations } })),
		];
		const derive = vi.spyOn(crypto.subtle, 'deriveKey');
		try {
			for (const value of invalid) expect(await helper.decryptEnvelope(value, password)).toBeNull();
			for (const value of ['', '!!!!', base64(new Uint8Array(47)), base64(Uint8Array.from([2, ...new Uint8Array(47)])), base64(Uint8Array.from([1, 255, 255, 255, ...new Uint8Array(44)]))]) {
				expect(await helper.decryptFromBase64(value, password)).toBeNull();
			}
			expect(derive).not.toHaveBeenCalled();
		} finally { derive.mockRestore(); }
		expect(decodeInlineV3(inline).kdf.iterations).toBe(220000);
	});

	it('should encrypt empty plaintext with a tag and distinguish it from a blank file', async () => {
		const empty = await FileDataHelper.encrypt(password, '', '');
		expect(atob(empty.encodedData).length).toBe(16);
		expect(await FileDataHelper.decrypt(empty, password)).toBe('');
		expect(await FileDataHelper.decrypt(empty, 'wrong')).toBeNull();
		expect(await FileDataHelper.decrypt(JsonFileEncoding.decode(''), password)).toBe('');
		expect(await helper.decryptEnvelope({ ...empty, encodedData: '' }, password)).toBeNull();
		expect(() => JsonFileEncoding.decode(JSON.stringify({ version: '3.0', hint: '', encodedData: '' }))).toThrow();
	});

	it('should generate fresh salt and IV on each encryption', async () => {
		const first = await helper.encryptEnvelope('same text', password);
		const second = await helper.encryptEnvelope('same text', password);
		expect(first.kdf.salt).not.toBe(second.kdf.salt);
		expect(first.cipher.iv).not.toBe(second.cipher.iv);
		expect(first.encodedData).not.toBe(second.encodedData);
	});
});
