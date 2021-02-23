# Decrypting without Obsidian

Here are further details in case you ever need to decrypt snippets without Obsidian and this plugin.

The plugin uses the SubtleCrypto interface of the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto).

The result of the AES-GCM encryption is Base64 encoded and surrounded by markers so it can be shown in notes, for example:

```
%%🔐 iWPmKEJm7dzCJze3p6TAzVv+F2kYh29kd3FXyOEmHiU= 🔐%%
```

After stripping the prefix (%%🔐 ) and suffix ( 🔐%%) from the text, you'll need to convert the base64 encoding back to an array of bytes.  From here, you can decrypt using:
```js
const decryptedBytes = crypto.subtle.decrypt(algorithm, key, bytesToDecrypt)
```
where:
```js
const algorithm = {
	name: 'AES-GCM',
	iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
	tagLength: 128
}
//See: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt

const key = await crypto.subtle.importKey(
	'raw',
	await crypto.subtle.digest({ name: 'SHA-256' }, new TextEncoder().encode(password)),
	algorithm,
	false,
	['encrypt', 'decrypt']
);
```
