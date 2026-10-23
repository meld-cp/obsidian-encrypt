import type { ICryptoHelper } from './ICryptoHelper.ts';

export interface CryptoEnvelopeV3 {
	version: '3.0';
	kdf: { name: 'PBKDF2'; hash: 'SHA-512'; iterations: number; salt: string };
	cipher: { name: 'AES-GCM'; keyLength: 256; iv: string; tagLength: 128 };
	encodedData: string;
}

export const V3_DEFAULT_ITERATIONS = 220000;
// Reader bounds are format policy, independent of future writer defaults.
export const V3_MIN_ITERATIONS = 220000;
export const V3_MAX_ITERATIONS = 2000000;

export function encodeBase64(bytes: Uint8Array): string {
	let binary = '';
	for (let offset = 0; offset < bytes.length; offset += 8192) {
		binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
	}
	return btoa(binary);
}

export function decodeBase64(value: unknown): Uint8Array {
	if (typeof value !== 'string' || value.length % 4 !== 0 || /[^A-Za-z0-9+/=]/.test(value)) {
		throw new Error('Invalid v3 Base64');
	}
	const bytes = Uint8Array.from(atob(value), character => character.charCodeAt(0));
	if (encodeBase64(bytes) !== value) throw new Error('Noncanonical v3 Base64');
	return bytes;
}

function record(value: unknown, keys: string[]): Record<string, unknown> {
	if (value === null || typeof value !== 'object' || Array.isArray(value)
		|| Object.keys(value).some(key => !keys.includes(key))) {
		throw new Error('Invalid v3 metadata');
	}
	return value as Record<string, unknown>;
}

function validateIterations(iterations: unknown): asserts iterations is number {
	if (typeof iterations !== 'number' || !Number.isInteger(iterations)
		|| iterations < V3_MIN_ITERATIONS || iterations > V3_MAX_ITERATIONS) {
		throw new Error('Unsupported v3 iteration count');
	}
}

function header(iterations: number, salt: Uint8Array, iv: Uint8Array): Omit<CryptoEnvelopeV3, 'encodedData'> {
	return {
		version: '3.0',
		kdf: { name: 'PBKDF2', hash: 'SHA-512', iterations, salt: encodeBase64(salt) },
		cipher: { name: 'AES-GCM', keyLength: 256, iv: encodeBase64(iv), tagLength: 128 },
	};
}

// Reconstruct a canonical header so input JSON property order cannot change AAD.
export function validateEnvelopeV3(value: unknown): CryptoEnvelopeV3 {
	const data = record(value, ['version', 'hint', 'kdf', 'cipher', 'encodedData']);
	const kdf = record(data.kdf, ['name', 'hash', 'iterations', 'salt']);
	const cipher = record(data.cipher, ['name', 'keyLength', 'iv', 'tagLength']);
	if (data.version !== '3.0' || kdf.name !== 'PBKDF2' || kdf.hash !== 'SHA-512'
		|| cipher.name !== 'AES-GCM' || cipher.keyLength !== 256 || cipher.tagLength !== 128
		|| ('hint' in data && typeof data.hint !== 'string')) {
		throw new Error('Unsupported v3 crypto suite');
	}
	validateIterations(kdf.iterations);
	const salt = decodeBase64(kdf.salt);
	const iv = decodeBase64(cipher.iv);
	const ciphertext = decodeBase64(data.encodedData);
	if (salt.length !== 16 || iv.length !== 12 || ciphertext.length < 16) {
		throw new Error('Invalid v3 payload lengths');
	}
	return { ...header(kdf.iterations, salt, iv), encodedData: encodeBase64(ciphertext) };
}

export function encodeInlineV3(value: CryptoEnvelopeV3): string {
	const envelope = validateEnvelopeV3(value);
	const ciphertext = decodeBase64(envelope.encodedData);
	const bytes = new Uint8Array(32 + ciphertext.length);
	// Suite 1 is permanently PBKDF2-SHA512 / AES-256-GCM, salt16 / IV12 / tag16.
	bytes[0] = 1;
	const iterations = envelope.kdf.iterations;
	bytes[1] = iterations >>> 16;
	bytes[2] = iterations >>> 8;
	bytes[3] = iterations;
	bytes.set(decodeBase64(envelope.kdf.salt), 4);
	bytes.set(decodeBase64(envelope.cipher.iv), 20);
	bytes.set(ciphertext, 32);
	return encodeBase64(bytes);
}

export function decodeInlineV3(encoded: string): CryptoEnvelopeV3 {
	const bytes = decodeBase64(encoded);
	if (bytes.length < 48 || bytes[0] !== 1) throw new Error('Invalid v3 inline header');
	const iterations = bytes[1] * 65536 + bytes[2] * 256 + bytes[3];
	validateIterations(iterations);
	return {
		...header(iterations, bytes.slice(4, 20), bytes.slice(20, 32)),
		encodedData: encodeBase64(bytes.slice(32)),
	};
}

function additionalData(envelope: CryptoEnvelopeV3): Uint8Array {
	const { version, kdf, cipher } = envelope;
	return new TextEncoder().encode(JSON.stringify({ version, kdf, cipher }));
}

async function deriveKey(password: string, envelope: CryptoEnvelopeV3): Promise<CryptoKey> {
	const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
	return crypto.subtle.deriveKey({
		name: 'PBKDF2', hash: envelope.kdf.hash,
		salt: decodeBase64(envelope.kdf.salt).buffer as ArrayBuffer,
		iterations: envelope.kdf.iterations,
	}, material, { name: 'AES-GCM', length: envelope.cipher.keyLength }, false, ['encrypt', 'decrypt']);
}

export class CryptoHelperV3 implements ICryptoHelper {
	public async encryptEnvelope(text: string, password: string): Promise<CryptoEnvelopeV3> {
		const metadata = header(V3_DEFAULT_ITERATIONS, crypto.getRandomValues(new Uint8Array(16)), crypto.getRandomValues(new Uint8Array(12)));
		const envelope = { ...metadata, encodedData: '' };
		const key = await deriveKey(password, envelope);
		const ciphertext = await crypto.subtle.encrypt({
			name: 'AES-GCM', iv: decodeBase64(metadata.cipher.iv).buffer as ArrayBuffer,
			tagLength: 128, additionalData: additionalData(envelope).buffer as ArrayBuffer,
		}, key, new TextEncoder().encode(text));
		return { ...metadata, encodedData: encodeBase64(new Uint8Array(ciphertext)) };
	}

	public async decryptEnvelope(value: unknown, password: string): Promise<string | null> {
		try {
			const envelope = validateEnvelopeV3(value);
			const key = await deriveKey(password, envelope);
			const plaintext = await crypto.subtle.decrypt({
				name: 'AES-GCM', iv: decodeBase64(envelope.cipher.iv).buffer as ArrayBuffer,
				tagLength: 128, additionalData: additionalData(envelope).buffer as ArrayBuffer,
			}, key, decodeBase64(envelope.encodedData).buffer as ArrayBuffer);
			return new TextDecoder().decode(plaintext);
		} catch {
			return null;
		}
	}

	public async encryptToBase64(text: string, password: string): Promise<string> {
		return encodeInlineV3(await this.encryptEnvelope(text, password));
	}

	public async decryptFromBase64(encoded: string, password: string): Promise<string | null> {
		try {
			return await this.decryptEnvelope(decodeInlineV3(encoded), password);
		} catch {
			return null;
		}
	}
}
