import { describe, it, expect } from 'vitest';
import { CryptoHelperFactory } from '../../src/services/CryptoHelperFactory.ts';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';
import { CryptoHelperObsolete } from '../../src/services/CryptoHelperObsolete.ts';
import { FileData } from '../../src/services/FileDataHelper.ts';
import { Decryptable } from '../../src/features/feature-inplace-encrypt/Decryptable.ts';
import { FileDataHelper } from '../../src/services/FileDataHelper.ts';
import { FeatureInplaceTextAnalysis } from '../../src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';
import { _PREFIX_C, _PREFIX_C_VISIBLE, _SUFFIX_WITH_COMMENT, _SUFFIX_NO_COMMENT } from '../../src/features/feature-inplace-encrypt/FeatureInplaceConstants.ts';

describe('CryptoHelperFactory', () => {
	describe('v3 format interoperability', () => {
		// Construct ciphertext independently of the factory to pin the wire parameters.
		const writer = new CryptoHelper2304(12, 16, 220000);
		const password = 'v3-format-password';

		it('should decrypt independently encrypted v3 whole notes', async () => {
			const encoded = await writer.encryptToBase64('whole note', password);
			expect(await FileDataHelper.decrypt(new FileData('3.0', '', encoded), password)).toBe('whole note');
		});

		it.each([
			[_PREFIX_C, _SUFFIX_WITH_COMMENT],
			[_PREFIX_C_VISIBLE, _SUFFIX_NO_COMMENT],
		])('should decrypt independently encrypted inline content with prefix %s', async (prefix, suffix) => {
			const encoded = await writer.encryptToBase64('inline secret', password);
			const analysis = new FeatureInplaceTextAnalysis(`${prefix}${encoded}${suffix}`);
			expect(analysis.decryptable?.version).toBe(3);
			const helper = CryptoHelperFactory.BuildFromDecryptableOrThrow(analysis.decryptable!);
			expect(await helper.decryptFromBase64(analysis.decryptable!.base64CipherText, password)).toBe('inline secret');
		});

		it('should reject wrong passwords and modified ciphertext for v3', async () => {
			const encoded = await writer.encryptToBase64('authenticated secret', password);
			const helper = CryptoHelperFactory.BuildDefault();
			expect(await helper.decryptFromBase64(encoded, 'wrong password')).toBeNull();
			const bytes = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
			bytes[bytes.length - 1] ^= 1;
			const modified = btoa(String.fromCharCode(...bytes));
			expect(await helper.decryptFromBase64(modified, password)).toBeNull();
		});
	});
	describe('BuildDefault', () => {
		it('should return a CryptoHelper2304 instance', () => {
			const helper = CryptoHelperFactory.BuildDefault();
			expect(helper).toBeInstanceOf(CryptoHelper2304);
		});

		it('should use expected constructor parameters', () => {
			const helper = CryptoHelperFactory.BuildDefault() as CryptoHelper2304;
			expect(helper.vectorSize).toBe(12);
			expect(helper.saltSize).toBe(16);
			expect(helper.iterations).toBe(220000);
		});
	});

	describe('BuildFromFileDataOrNull', () => {
		it('should return CryptoHelper for version 1.0', () => {
			const data = new FileData('1.0', '', '');
			const helper = CryptoHelperFactory.BuildFromFileDataOrNull(data);
			expect(helper).toBeInstanceOf(CryptoHelper);
		});

		it('should return CryptoHelper2304 for version 2.0', () => {
			const data = new FileData('2.0', '', '');
			const helper = CryptoHelperFactory.BuildFromFileDataOrNull(data);
			expect(helper).toBeInstanceOf(CryptoHelper2304);
		});

		it('should return CryptoHelper2304 for version 3.0', () => {
			const data = new FileData('3.0', '', '');
			const helper = CryptoHelperFactory.BuildFromFileDataOrNull(data);
			expect(helper).toBeInstanceOf(CryptoHelper2304);
		});

		it('should return null for unknown version', () => {
			const data = new FileData('99.0', '', '');
			const helper = CryptoHelperFactory.BuildFromFileDataOrNull(data);
			expect(helper).toBeNull();
		});
	});

	describe('BuildFromFileDataOrThrow', () => {
		it('should return helper for valid versions', () => {
			const data1 = new FileData('1.0', '', '');
			const data2 = new FileData('2.0', '', '');
			const data3 = new FileData('3.0', '', '');
			expect(CryptoHelperFactory.BuildFromFileDataOrThrow(data1)).toBeInstanceOf(CryptoHelper);
			expect(CryptoHelperFactory.BuildFromFileDataOrThrow(data2)).toBeInstanceOf(CryptoHelper2304);
			expect(CryptoHelperFactory.BuildFromFileDataOrThrow(data3)).toBeInstanceOf(CryptoHelper2304);
		});

		it('should throw for unknown version', () => {
			const data = new FileData('99.0', '', '');
			expect(() => CryptoHelperFactory.BuildFromFileDataOrThrow(data)).toThrow();
		});
	});

	describe('BuildFromDecryptableOrNull', () => {
		it('should return CryptoHelperObsolete for version 0', () => {
			const decryptable: Decryptable = { version: 0, base64CipherText: '', hint: '', showInReadingView: false };
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
			expect(helper).toBeInstanceOf(CryptoHelperObsolete);
		});

		it('should return CryptoHelper for version 1', () => {
			const decryptable: Decryptable = { version: 1, base64CipherText: '', hint: '', showInReadingView: false };
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
			expect(helper).toBeInstanceOf(CryptoHelper);
		});

		it('should return CryptoHelper2304 for version 2', () => {
			const decryptable: Decryptable = { version: 2, base64CipherText: '', hint: '', showInReadingView: false };
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
			expect(helper).toBeInstanceOf(CryptoHelper2304);
		});

		it('should return CryptoHelper2304 for version 3', () => {
			const decryptable: Decryptable = { version: 3, base64CipherText: '', hint: '', showInReadingView: false };
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
			expect(helper).toBeInstanceOf(CryptoHelper2304);
		});

		it('should return null for unknown version', () => {
			const decryptable: Decryptable = { version: 99, base64CipherText: '', hint: '', showInReadingView: false };
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
			expect(helper).toBeNull();
		});
	});

	describe('BuildFromDecryptableOrThrow', () => {
		it('should return helper for valid versions', () => {
			const d0: Decryptable = { version: 0, base64CipherText: '', hint: '', showInReadingView: false };
			const d1: Decryptable = { version: 1, base64CipherText: '', hint: '', showInReadingView: false };
			const d2: Decryptable = { version: 2, base64CipherText: '', hint: '', showInReadingView: false };
			const d3: Decryptable = { version: 3, base64CipherText: '', hint: '', showInReadingView: false };
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d0)).toBeInstanceOf(CryptoHelperObsolete);
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d1)).toBeInstanceOf(CryptoHelper);
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d2)).toBeInstanceOf(CryptoHelper2304);
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d3)).toBeInstanceOf(CryptoHelper2304);
		});

		it('should throw for unknown version', () => {
			const decryptable: Decryptable = { version: 99, base64CipherText: '', hint: '', showInReadingView: false };
			expect(() => CryptoHelperFactory.BuildFromDecryptableOrThrow(decryptable)).toThrow();
		});
	});
});
