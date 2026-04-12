import { describe, it, expect } from 'vitest';
import { CryptoHelperFactory } from '../../src/services/CryptoHelperFactory.ts';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';
import { CryptoHelperObsolete } from '../../src/services/CryptoHelperObsolete.ts';
import { FileData } from '../../src/services/FileDataHelper.ts';
import { Decryptable } from '../../src/features/feature-inplace-encrypt/Decryptable.ts';

describe('CryptoHelperFactory', () => {
	describe('BuildDefault', () => {
		it('should return a CryptoHelper2304 instance', () => {
			const helper = CryptoHelperFactory.BuildDefault();
			expect(helper).toBeInstanceOf(CryptoHelper2304);
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

		it('should return null for unknown version', () => {
			const data = new FileData('3.0', '', '');
			const helper = CryptoHelperFactory.BuildFromFileDataOrNull(data);
			expect(helper).toBeNull();
		});
	});

	describe('BuildFromFileDataOrThrow', () => {
		it('should return helper for valid versions', () => {
			const data1 = new FileData('1.0', '', '');
			const data2 = new FileData('2.0', '', '');
			expect(CryptoHelperFactory.BuildFromFileDataOrThrow(data1)).toBeInstanceOf(CryptoHelper);
			expect(CryptoHelperFactory.BuildFromFileDataOrThrow(data2)).toBeInstanceOf(CryptoHelper2304);
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
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d0)).toBeInstanceOf(CryptoHelperObsolete);
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d1)).toBeInstanceOf(CryptoHelper);
			expect(CryptoHelperFactory.BuildFromDecryptableOrThrow(d2)).toBeInstanceOf(CryptoHelper2304);
		});

		it('should throw for unknown version', () => {
			const decryptable: Decryptable = { version: 99, base64CipherText: '', hint: '', showInReadingView: false };
			expect(() => CryptoHelperFactory.BuildFromDecryptableOrThrow(decryptable)).toThrow();
		});
	});
});
