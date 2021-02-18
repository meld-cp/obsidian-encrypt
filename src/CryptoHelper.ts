
const algorithm = {
	name: 'AES-GCM',
	iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
	tagLength: 128
}

export default class CryptoHelper {

	private async buildKey(password: string) {
		let utf8Encode = new TextEncoder();
		let passwordBytes = utf8Encode.encode(password);

		let passwordDigest = await crypto.subtle.digest({ name: 'SHA-256' }, passwordBytes);

		let key = await crypto.subtle.importKey(
			'raw',
			passwordDigest,
			algorithm,
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
			algorithm, key, bytesToEncrypt
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
			let decryptedBytes = await crypto.subtle.decrypt(algorithm, key, bytesToDecrypt);

			// convert bytes to text
			let utf8Decode = new TextDecoder();
			let decryptedText = utf8Decode.decode(decryptedBytes);
			return decryptedText;
		} catch (e) {
			return null;
		}
	}

}
