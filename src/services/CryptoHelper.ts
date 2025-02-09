const vectorSize	= 16;
const utf8Encoder	= new TextEncoder();
const utf8Decoder	= new TextDecoder();
const iterations	= 600000;
const salt			= utf8Encoder.encode(navigator.userAgent);

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
			//console.error(e);
			return null;
		}
	}

	public async decryptFromBase64(base64Encoded: string, password: string): Promise<string|null> {
		try {

			const bytesToDecode = this.stringToArray(atob(base64Encoded));
			
			return await this.decryptFromBytes(bytesToDecode, password);

			// // extract iv
			// const vector = bytesToDecode.slice(0,vectorSize);

			// // extract encrypted text
			// const encryptedTextBytes = bytesToDecode.slice(vectorSize);

			// const key = await this.deriveKey(password);

			// // decrypt into bytes
			// let decryptedBytes = await crypto.subtle.decrypt(
			// 	{name: 'AES-GCM', iv: vector},
			// 	key,
			// 	encryptedTextBytes
			// );

			// // convert bytes to text
			// let decryptedText = utf8Decoder.decode(decryptedBytes);
			// return decryptedText;
		} catch (e) {
			//console.error(e);
			return null;
		}
	}

}



