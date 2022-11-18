export const algorithmObsolete = {
	name: 'AES-GCM',
	iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
	tagLength: 128
}

export class CryptoHelperObsolete {

	private async buildKey(password: string) {
		const utf8Encode = new TextEncoder();
		const passwordBytes = utf8Encode.encode(password);

		const passwordDigest = await crypto.subtle.digest({ name: 'SHA-256' }, passwordBytes);

		const key = await crypto.subtle.importKey(
			'raw',
			passwordDigest,
			algorithmObsolete,
			false,
			['encrypt', 'decrypt']
		);

		return key;
	}
	
	/**
  	* @deprecated
 	*/
	public async encryptToBase64(text: string, password: string): Promise<string> {
		const key = await this.buildKey(password);

		const utf8Encode = new TextEncoder();
		const bytesToEncrypt = utf8Encode.encode(text);

		// encrypt into bytes
		const encryptedBytes = new Uint8Array(await crypto.subtle.encrypt(
			algorithmObsolete, key, bytesToEncrypt
		));

		//convert array to base64
		const base64Text = btoa(String.fromCharCode(...encryptedBytes));

		return base64Text;
	}

	private stringToArray(str: string): Uint8Array {
		const result = [];
		for (let i = 0; i < str.length; i++) {
			result.push(str.charCodeAt(i));
		}
		return new Uint8Array(result);
	}

	public async decryptFromBase64(base64Encoded: string, password: string): Promise<string|null> {
		try {
			// convert base 64 to array
			const bytesToDecrypt = this.stringToArray(atob(base64Encoded));

			const key = await this.buildKey(password);

			// decrypt into bytes
			const decryptedBytes = await crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt);

			// convert bytes to text
			const utf8Decode = new TextDecoder();
			const decryptedText = utf8Decode.decode(decryptedBytes);
			return decryptedText;
		} catch (e) {
			return null;
		}
	}

}
