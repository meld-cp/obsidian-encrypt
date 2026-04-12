import { describe, it, expect } from 'vitest';
import { CryptoHelperObsolete } from './CryptoHelperObsolete.ts';

describe('CryptoHelperObsolete', () => {
	const helper = new CryptoHelperObsolete();
	const password = 'test-password-789';

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
			const plaintext = 'café résumé';
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

	describe('deterministic IV', () => {
		it('should produce identical ciphertexts for same plaintext and password (static IV)', async () => {
			const plaintext = 'same text';
			const enc1 = await helper.encryptToBase64(plaintext, password);
			const enc2 = await helper.encryptToBase64(plaintext, password);
			expect(enc1).toBe(enc2);
		});
	});
});
