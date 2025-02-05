import { ICryptoHelper } from "./ICryptoHelper";

export class CryptoHelper2304 implements ICryptoHelper {
	public vectorSize: number;
	public saltSize: number;
	public iterations: number;

	constructor( vectorSize: number, saltSize: number, iterations: number ){
		//console.debug('new CryptoHelper2304', {vectorSize, saltSize, iterations});
		this.vectorSize = vectorSize;
		this.saltSize = saltSize;
		this.iterations = iterations;
	}

	private async deriveKey( password:string, salt:Uint8Array ) :Promise<CryptoKey> {
		// console.trace('CryptoHelper2304.deriveKey');
		//See: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
		const utf8Encoder	= new TextEncoder();
		const buffer     = utf8Encoder.encode(password);
		const key        = await crypto.subtle.importKey(
			/*format*/ 'raw',
			/*keyData*/ buffer,
			/*algorithm*/ 'PBKDF2',
			/*extractable*/ false,
			/*keyUsages*/ ['deriveKey']
		);
		
		//console.time('CryptoHelper2304.deriveKey');
		try{
			const privateKey = await crypto.subtle.deriveKey(
				/*algorithm*/ {
					name: 'PBKDF2',
					hash: 'SHA-512',
					salt,
					iterations: this.iterations,
				},
				/*baseKey*/ key,
				/*derivedKeyAlgorithm*/ {
					name: 'AES-GCM',
					length: 256
				},
				/*extractable*/ false,
				/*keyUsages*/ ['encrypt', 'decrypt']
			);
			
			return privateKey;
		}finally{
			//console.timeEnd('CryptoHelper2304.deriveKey');
		}
	}

	private async encryptToBytes( text: string, password: string ): Promise<Uint8Array> {

		const salt = crypto.getRandomValues( new Uint8Array(this.saltSize) );

		const key = await this.deriveKey( password, salt );
		
		const utf8Encoder	= new TextEncoder();
		const textBytesToEncrypt = utf8Encoder.encode(text);
		const vector = crypto.getRandomValues(new Uint8Array(this.vectorSize));
		
		// encrypt into bytes
		const encryptedBytes = new Uint8Array(
			await crypto.subtle.encrypt(
				/*algorithm*/ {
					name: 'AES-GCM',
					iv: vector
				},
				/*key*/ key,
				/*data*/ textBytesToEncrypt
			)
		);
		
		const finalBytes = new Uint8Array( vector.byteLength + salt.byteLength + encryptedBytes.byteLength );
		finalBytes.set( vector, 0 );
		finalBytes.set( salt, vector.byteLength );
		finalBytes.set( encryptedBytes, vector.byteLength + salt.byteLength );

		return finalBytes;
	}

	private convertToString( bytes : Uint8Array ): string {
		let result = '';
		for (let idx = 0; idx < bytes.length; idx++) {
			// append to result
			result += String.fromCharCode(bytes[idx]);
		}
		return result;
	}

	public async encryptToBase64(text: string, password: string): Promise<string> {

		const finalBytes = await this.encryptToBytes(text, password);

		//convert array to base64
		const base64Text = btoa( this.convertToString(finalBytes) );

		return base64Text;
	}

	private stringToArray(str: string): Uint8Array {
		const result = [];
		for (let i = 0; i < str.length; i++) {
			result.push(str.charCodeAt(i));
		}
		return new Uint8Array(result);
	}

	private async decryptFromBytes(
		encryptedBytes: Uint8Array,
		password: string
	): Promise<string|null> {
		try {
			
			let offset: number;
			let nextOffset : number|undefined;
			
			// extract iv
			offset = 0;
			nextOffset = offset + this.vectorSize;
			const vector = encryptedBytes.slice(offset, nextOffset);
			
			// extract salt
			offset = nextOffset;
			nextOffset = offset + this.saltSize;
			const salt = encryptedBytes.slice(offset, nextOffset);
			
			// extract encrypted text
			offset = nextOffset;
			nextOffset = undefined;
			const encryptedTextBytes = encryptedBytes.slice(offset);
			
			const key = await this.deriveKey(password, salt);
			
			// decrypt into bytes
			const decryptedBytes = await crypto.subtle.decrypt(
				/*algorithm*/ {
					name: 'AES-GCM',
					iv: vector
				},
				/*key*/ key,
				/*data*/ encryptedTextBytes
			);
			
			// convert bytes to text
			const utf8Decoder	= new TextDecoder();
			const decryptedText = utf8Decoder.decode(decryptedBytes);
			return decryptedText;
			
		} catch (e) {
			//console.error(e);
			return null;
		}
	}

	public async decryptFromBase64( base64Encoded: string, password: string ): Promise<string|null> {
		try {
			const bytesToDecode = this.stringToArray(atob(base64Encoded));
			return await this.decryptFromBytes( bytesToDecode, password );
		} catch (e) {
			return null;
		}
	}

}