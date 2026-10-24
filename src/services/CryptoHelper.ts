import { base64ToBytes, bytesToBase64 } from './Base64.ts';

const vectorSize	= 16;
const utf8Encoder	= new TextEncoder();
const utf8Decoder	= new TextDecoder();
const iterations	= 1000;
const salt			= utf8Encoder.encode('XHWnDAT6ehMVY2zD');

export class CryptoHelper {

	// constructor(){
	// 	console.debug('new CryptoHelper');
	// }

	private async deriveKey(password:string) :Promise<CryptoKey> {
		const buffer     = utf8Encoder.encode(password);
		const key        = await crypto.subtle.importKey('raw', buffer, {name: 'PBKDF2'}, false, ['deriveKey']);
		const privateKey = crypto.subtle.deriveKey(
			{
				name: 'PBKDF2',
				hash: {name: 'SHA-256'},
				iterations,
				salt
			},
			key,
			{
				name: 'AES-GCM',
				length: 256
			},
			false,
			['encrypt', 'decrypt']
		);
		
		return privateKey;
	}

	public async encryptToBytes(text: string, password: string): Promise<Uint8Array> {

		const key = await this.deriveKey(password);
		
		const textBytesToEncrypt = utf8Encoder.encode(text);
		const vector = crypto.getRandomValues(new Uint8Array(vectorSize));
		
		// encrypt into bytes
		const encryptedBytes = new Uint8Array(
			await crypto.subtle.encrypt(
				{name: 'AES-GCM', iv: vector},
				key,
				textBytesToEncrypt
			)
		);
		
		const finalBytes = new Uint8Array( vector.byteLength + encryptedBytes.byteLength );
		finalBytes.set( vector, 0 );
		finalBytes.set( encryptedBytes, vector.byteLength );

		return finalBytes;
	}

	public async encryptToBase64(text: string, password: string): Promise<string> {

		const finalBytes = await this.encryptToBytes(text, password);
		return bytesToBase64(finalBytes);
	}

	public async decryptFromBytes(encryptedBytes: Uint8Array, password: string): Promise<string|null> {
		try {

			// extract iv
			const vector = encryptedBytes.slice(0,vectorSize);

			// extract encrypted text
			const encryptedTextBytes = encryptedBytes.slice(vectorSize);

			const key = await this.deriveKey(password);

			// decrypt into bytes
			const decryptedBytes = await crypto.subtle.decrypt(
				{name: 'AES-GCM', iv: vector},
				key,
				encryptedTextBytes
			);

			// convert bytes to text
			const decryptedText = utf8Decoder.decode(decryptedBytes);
			return decryptedText;
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	public async decryptFromBase64(base64Encoded: string, password: string): Promise<string|null> {
		try {

			const bytesToDecode = base64ToBytes(base64Encoded);
			
			return await this.decryptFromBytes(bytesToDecode, password);
		} catch (e) {
			console.error(e);
			return null;
		}
	}

}



