const vectorSize	= 16;
const utf8Encoder	= new TextEncoder();
const utf8Decoder	= new TextDecoder();
const iterations	= 1000;
const salt			= utf8Encoder.encode('XHWnDAT6ehMVY2zD');

export class CryptoHelperV2 {

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

	public async encryptToBase64(text: string, password: string): Promise<string> {

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

		//convert array to base64
		const base64Text = btoa( String.fromCharCode(...finalBytes) );

		return base64Text;
	}

	private stringToArray(str: string): Uint8Array {
		var result = [];
		for (var i = 0; i < str.length; i++) {
			result.push(str.charCodeAt(i));
		}
		return new Uint8Array(result);
	}

	public async decryptFromBase64(base64Encoded: string, password: string): Promise<string> {
		try {

			let bytesToDecode = this.stringToArray(atob(base64Encoded));
			
			// extract iv
			const vector = bytesToDecode.slice(0,vectorSize);

			// extract encrypted text
			const encryptedTextBytes = bytesToDecode.slice(vectorSize);

			const key = await this.deriveKey(password);

			// decrypt into bytes
			let decryptedBytes = await crypto.subtle.decrypt(
				{name: 'AES-GCM', iv: vector},
				key,
				encryptedTextBytes
			);

			// convert bytes to text
			let decryptedText = utf8Decoder.decode(decryptedBytes);
			return decryptedText;
		} catch (e) {
			//console.error(e);
			return null;
		}
	}

}

const algorithmObsolete = {
	name: 'AES-GCM',
	iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
	tagLength: 128
}

export class CryptoHelperObsolete {

	private async buildKey(password: string) {
		let utf8Encode = new TextEncoder();
		let passwordBytes = utf8Encode.encode(password);

		let passwordDigest = await crypto.subtle.digest({ name: 'SHA-256' }, passwordBytes);

		let key = await crypto.subtle.importKey(
			'raw',
			passwordDigest,
			algorithmObsolete,
			false,
			['encrypt', 'decrypt']
		);

		return key;
	}

	public async encryptToBase64(text: string, password: string): Promise<string> {
		let key = await this.buildKey(password);

		let utf8Encode = new TextEncoder();
		let bytesToEncrypt = utf8Encode.encode(text);

		// encrypt into bytes
		let encryptedBytes = new Uint8Array(await crypto.subtle.encrypt(
			algorithmObsolete, key, bytesToEncrypt
		));

		//convert array to base64
		let base64Text = btoa(String.fromCharCode(...encryptedBytes));

		return base64Text;
	}

	private stringToArray(str: string): Uint8Array {
		var result = [];
		for (var i = 0; i < str.length; i++) {
			result.push(str.charCodeAt(i));
		}
		return new Uint8Array(result);
	}

	public async decryptFromBase64(base64Encoded: string, password: string): Promise<string> {
		try {
			// convert base 64 to array
			let bytesToDecrypt = this.stringToArray(atob(base64Encoded));

			let key = await this.buildKey(password);

			// decrypt into bytes
			let decryptedBytes = await crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt);

			// convert bytes to text
			let utf8Decode = new TextDecoder();
			let decryptedText = utf8Decode.decode(decryptedBytes);
			return decryptedText;
		} catch (e) {
			return null;
		}
	}

}
