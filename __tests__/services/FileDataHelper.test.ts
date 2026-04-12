import { describe, it, expect } from 'vitest';
import { FileData, FileDataHelper, JsonFileEncoding } from '../../src/services/FileDataHelper.ts';

describe('FileData', () => {
	it('should construct with given values', () => {
		const data = new FileData('2.0', 'my hint', 'encrypted-data');
		expect(data.version).toBe('2.0');
		expect(data.hint).toBe('my hint');
		expect(data.encodedData).toBe('encrypted-data');
	});

	it('should default version to 1.0', () => {
		const data = new FileData('1.0', '', '');
		expect(data.version).toBe('1.0');
	});
});

describe('FileDataHelper', () => {
	const password = 'file-test-password';

	describe('encrypt', () => {
		it('should return FileData with version 2.0', async () => {
			const data = await FileDataHelper.encrypt(password, 'hint', 'plaintext');
			expect(data.version).toBe(FileDataHelper.DEFAULT_VERSION);
			expect(data.hint).toBe('hint');
			expect(data.encodedData.length).toBeGreaterThan(0);
		});

		it('should encrypt empty content', async () => {
			const data = await FileDataHelper.encrypt(password, '', '');
			expect(data.encodedData.length).toBeGreaterThan(0);
		});
	});

	describe('decrypt', () => {
		it('should decrypt content encrypted with same password', async () => {
			const plaintext = 'secret content';
			const encrypted = await FileDataHelper.encrypt(password, '', plaintext);
			const decrypted = await FileDataHelper.decrypt(encrypted, password);
			expect(decrypted).toBe(plaintext);
		});

		it('should return null for wrong password', async () => {
			const encrypted = await FileDataHelper.encrypt(password, '', 'secret');
			const decrypted = await FileDataHelper.decrypt(encrypted, 'wrong-password');
			expect(decrypted).toBeNull();
		});

		it('should return empty string for empty encodedData', async () => {
			const data = new FileData('2.0', '', '');
			const decrypted = await FileDataHelper.decrypt(data, password);
			expect(decrypted).toBe('');
		});
	});

	describe('round-trip with hint', () => {
		it('should preserve hint through encrypt/decrypt', async () => {
			const hint = 'favorite color';
			const data = await FileDataHelper.encrypt(password, hint, 'content');
			expect(data.hint).toBe(hint);
			const decrypted = await FileDataHelper.decrypt(data, password);
			expect(decrypted).toBe('content');
		});
	});
});

describe('JsonFileEncoding', () => {
	describe('encode', () => {
		it('should produce valid JSON', () => {
			const data = new FileData('2.0', 'hint', 'data');
			const encoded = JsonFileEncoding.encode(data);
			const parsed = JSON.parse(encoded);
			expect(parsed.version).toBe('2.0');
			expect(parsed.hint).toBe('hint');
			expect(parsed.encodedData).toBe('data');
		});

		it('should produce pretty-printed JSON', () => {
			const data = new FileData('2.0', 'hint', 'data');
			const encoded = JsonFileEncoding.encode(data);
			expect(encoded.includes('\n')).toBe(true);
		});
	});

	describe('decode', () => {
		it('should decode valid JSON into FileData', () => {
			const json = JSON.stringify({ version: '2.0', hint: 'hint', encodedData: 'data' });
			const data = JsonFileEncoding.decode(json);
			expect(data.version).toBe('2.0');
			expect(data.hint).toBe('hint');
			expect(data.encodedData).toBe('data');
		});

		it('should return default FileData for empty string', () => {
			const data = JsonFileEncoding.decode('');
			expect(data.version).toBe(FileDataHelper.DEFAULT_VERSION);
			expect(data.hint).toBe('');
			expect(data.encodedData).toBe('');
		});
	});

	describe('isEncoded', () => {
		it('should return true for valid JSON', () => {
			expect(JsonFileEncoding.isEncoded('{}')).toBe(true);
			expect(JsonFileEncoding.isEncoded('{"key":"value"}')).toBe(true);
		});

		it('should return false for non-JSON text', () => {
			expect(JsonFileEncoding.isEncoded('plain text')).toBe(false);
			expect(JsonFileEncoding.isEncoded('')).toBe(false);
		});

		it('should return true for encoded FileData JSON', () => {
			const data = new FileData('2.0', 'hint', 'data');
			const encoded = JsonFileEncoding.encode(data);
			expect(JsonFileEncoding.isEncoded(encoded)).toBe(true);
		});
	});

	describe('encode/decode round-trip', () => {
		it('should round-trip FileData through JSON', () => {
			const original = new FileData('2.0', 'my hint', 'encrypted-content');
			const encoded = JsonFileEncoding.encode(original);
			const decoded = JsonFileEncoding.decode(encoded);
			expect(decoded.version).toBe(original.version);
			expect(decoded.hint).toBe(original.hint);
			expect(decoded.encodedData).toBe(original.encodedData);
		});
	});
});
