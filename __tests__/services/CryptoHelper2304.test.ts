import { describe, it, expect } from 'vitest';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';

describe('CryptoHelper2304', () => {
	const helper = new CryptoHelper2304(16, 16, 210000);
	const password = 'test-password-456';

	describe('encryptToBase64 / decryptFromBase64 round-trip', () => {
		it('should encrypt and decrypt plain text', async () => {
			const plaintext = 'Hello, World!';
			const encrypted = await helper.encryptToBase64(plaintext, password);
			const decrypted = await helper.decryptFromBase64(encrypted, password);
			expect(decrypted).toBe(plaintext);
		});

		it('should encrypt and decrypt empty string', async () => {
			const encrypted = await helper.encryptToBase64('', password);
			const decrypted = await helper.decryptFromBase64(encrypted, password);
			expect(decrypted).toBe('');
		});

		it('should encrypt and decrypt unicode text', async () => {
			const plaintext = '🔐 Secret: café résumé naïve';
			const encrypted = await helper.encryptToBase64(plaintext, password);
			const decrypted = await helper.decryptFromBase64(encrypted, password);
			expect(decrypted).toBe(plaintext);
		});

		it('should encrypt and decrypt multiline text', async () => {
			const plaintext = 'Line 1\nLine 2\nLine 3';
			const encrypted = await helper.encryptToBase64(plaintext, password);
			const decrypted = await helper.decryptFromBase64(encrypted, password);
			expect(decrypted).toBe(plaintext);
		});

		it('should encrypt and decrypt long text', async () => {
			const plaintext = 'B'.repeat(10000);
			const encrypted = await helper.encryptToBase64(plaintext, password);
			const decrypted = await helper.decryptFromBase64(encrypted, password);
			expect(decrypted).toBe(plaintext);
		});
	});

	describe('wrong password', () => {
		it('should return null when decrypting with wrong password', async () => {
			const plaintext = 'secret message';
			const encrypted = await helper.encryptToBase64(plaintext, 'correct-password');
			const decrypted = await helper.decryptFromBase64(encrypted, 'wrong-password');
			expect(decrypted).toBeNull();
		});
	});

	describe('invalid input', () => {
		it('should return null for malformed base64', async () => {
			const decrypted = await helper.decryptFromBase64('!!!not-valid-base64!!!', password);
			expect(decrypted).toBeNull();
		});

		it('should return null for empty string', async () => {
			const decrypted = await helper.decryptFromBase64('', password);
			expect(decrypted).toBeNull();
		});
	});

	describe('random salt and IV', () => {
		it('should produce different ciphertexts for same plaintext and password', async () => {
			const plaintext = 'same text';
			const enc1 = await helper.encryptToBase64(plaintext, password);
			const enc2 = await helper.encryptToBase64(plaintext, password);
			expect(enc1).not.toBe(enc2);
		});
	});

	describe('different passwords produce different keys', () => {
		it('should not decrypt with a different password', async () => {
			const encrypted = await helper.encryptToBase64('secret', 'passwordA');
			const result = await helper.decryptFromBase64(encrypted, 'passwordB');
			expect(result).toBeNull();
		});
	});

	describe('constructor parameters', () => {
		it('should use configured vectorSize, saltSize, and iterations', () => {
			const customHelper = new CryptoHelper2304(12, 8, 1000);
			expect(customHelper.vectorSize).toBe(12);
			expect(customHelper.saltSize).toBe(8);
			expect(customHelper.iterations).toBe(1000);
		});

		it('should work with custom parameters', async () => {
			const customHelper = new CryptoHelper2304(12, 8, 1000);
			const encrypted = await customHelper.encryptToBase64('test', 'pw');
			const decrypted = await customHelper.decryptFromBase64(encrypted, 'pw');
			expect(decrypted).toBe('test');
		});
	});
});
