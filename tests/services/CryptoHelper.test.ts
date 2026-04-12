import { describe, it, expect } from 'vitest';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';

describe('CryptoHelper', () => {
	const helper = new CryptoHelper();
	const password = 'test-password-123';

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
			const plaintext = 'A'.repeat(10000);
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

	describe('determinism', () => {
		it('should produce different ciphertexts for same plaintext (random IV)', async () => {
			const plaintext = 'same text';
			const enc1 = await helper.encryptToBase64(plaintext, password);
			const enc2 = await helper.encryptToBase64(plaintext, password);
			expect(enc1).not.toBe(enc2);
		});
	});

	describe('encryptToBytes / decryptFromBytes round-trip', () => {
		it('should encrypt and decrypt via bytes', async () => {
			const plaintext = 'byte test data';
			const encryptedBytes = await helper.encryptToBytes(plaintext, password);
			const decrypted = await helper.decryptFromBytes(encryptedBytes, password);
			expect(decrypted).toBe(plaintext);
		});

		it('should return null for wrong password on bytes', async () => {
			const encryptedBytes = await helper.encryptToBytes('secret', 'pw1');
			const decrypted = await helper.decryptFromBytes(encryptedBytes, 'pw2');
			expect(decrypted).toBeNull();
		});
	});
});
