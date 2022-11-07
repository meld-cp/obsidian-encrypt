var modules = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    const vectorSize = 16;
    const utf8Encoder = new TextEncoder();
    const utf8Decoder = new TextDecoder();
    const iterations = 1000;
    const salt = utf8Encoder.encode('XHWnDAT6ehMVY2zD');
    class CryptoHelperV2 {
        deriveKey(password) {
            return __awaiter(this, void 0, void 0, function* () {
                const buffer = utf8Encoder.encode(password);
                const key = yield crypto.subtle.importKey('raw', buffer, { name: 'PBKDF2' }, false, ['deriveKey']);
                const privateKey = crypto.subtle.deriveKey({
                    name: 'PBKDF2',
                    hash: { name: 'SHA-256' },
                    iterations,
                    salt
                }, key, {
                    name: 'AES-GCM',
                    length: 256
                }, false, ['encrypt', 'decrypt']);
                return privateKey;
            });
        }
        encryptToBytes(text, password) {
            return __awaiter(this, void 0, void 0, function* () {
                const key = yield this.deriveKey(password);
                const textBytesToEncrypt = utf8Encoder.encode(text);
                const vector = crypto.getRandomValues(new Uint8Array(vectorSize));
                // encrypt into bytes
                const encryptedBytes = new Uint8Array(yield crypto.subtle.encrypt({ name: 'AES-GCM', iv: vector }, key, textBytesToEncrypt));
                const finalBytes = new Uint8Array(vector.byteLength + encryptedBytes.byteLength);
                finalBytes.set(vector, 0);
                finalBytes.set(encryptedBytes, vector.byteLength);
                return finalBytes;
            });
        }
        encryptToBase64(text, password) {
            return __awaiter(this, void 0, void 0, function* () {
                // const key = await this.deriveKey(password);
                // const textBytesToEncrypt = utf8Encoder.encode(text);
                // const vector = crypto.getRandomValues(new Uint8Array(vectorSize));
                // // encrypt into bytes
                // const encryptedBytes = new Uint8Array(
                // 	await crypto.subtle.encrypt(
                // 		{name: 'AES-GCM', iv: vector},
                // 		key,
                // 		textBytesToEncrypt
                // 	)
                // );
                // const finalBytes = new Uint8Array( vector.byteLength + encryptedBytes.byteLength );
                // finalBytes.set( vector, 0 );
                // finalBytes.set( encryptedBytes, vector.byteLength );
                const finalBytes = yield this.encryptToBytes(text, password);
                //convert array to base64
                const base64Text = btoa(String.fromCharCode(...finalBytes));
                return base64Text;
            });
        }
        stringToArray(str) {
            var result = [];
            for (var i = 0; i < str.length; i++) {
                result.push(str.charCodeAt(i));
            }
            return new Uint8Array(result);
        }
        decryptFromBytes(encryptedBytes, password) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // extract iv
                    const vector = encryptedBytes.slice(0, vectorSize);
                    // extract encrypted text
                    const encryptedTextBytes = encryptedBytes.slice(vectorSize);
                    const key = yield this.deriveKey(password);
                    // decrypt into bytes
                    let decryptedBytes = yield crypto.subtle.decrypt({ name: 'AES-GCM', iv: vector }, key, encryptedTextBytes);
                    // convert bytes to text
                    let decryptedText = utf8Decoder.decode(decryptedBytes);
                    return decryptedText;
                }
                catch (e) {
                    //console.error(e);
                    return null;
                }
            });
        }
        decryptFromBase64(base64Encoded, password) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let bytesToDecode = this.stringToArray(atob(base64Encoded));
                    return yield this.decryptFromBytes(bytesToDecode, password);
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
                }
                catch (e) {
                    //console.error(e);
                    return null;
                }
            });
        }
    }
    const algorithmObsolete = {
        name: 'AES-GCM',
        iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
        tagLength: 128
    };
    class CryptoHelperObsolete {
        buildKey(password) {
            return __awaiter(this, void 0, void 0, function* () {
                let utf8Encode = new TextEncoder();
                let passwordBytes = utf8Encode.encode(password);
                let passwordDigest = yield crypto.subtle.digest({ name: 'SHA-256' }, passwordBytes);
                let key = yield crypto.subtle.importKey('raw', passwordDigest, algorithmObsolete, false, ['encrypt', 'decrypt']);
                return key;
            });
        }
        encryptToBase64(text, password) {
            return __awaiter(this, void 0, void 0, function* () {
                let key = yield this.buildKey(password);
                let utf8Encode = new TextEncoder();
                let bytesToEncrypt = utf8Encode.encode(text);
                // encrypt into bytes
                let encryptedBytes = new Uint8Array(yield crypto.subtle.encrypt(algorithmObsolete, key, bytesToEncrypt));
                //convert array to base64
                let base64Text = btoa(String.fromCharCode(...encryptedBytes));
                return base64Text;
            });
        }
        stringToArray(str) {
            var result = [];
            for (var i = 0; i < str.length; i++) {
                result.push(str.charCodeAt(i));
            }
            return new Uint8Array(result);
        }
        decryptFromBase64(base64Encoded, password) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // convert base 64 to array
                    let bytesToDecrypt = this.stringToArray(atob(base64Encoded));
                    let key = yield this.buildKey(password);
                    // decrypt into bytes
                    let decryptedBytes = yield crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt);
                    // convert bytes to text
                    let utf8Decode = new TextDecoder();
                    let decryptedText = utf8Decode.decode(decryptedBytes);
                    return decryptedText;
                }
                catch (e) {
                    return null;
                }
            });
        }
    }

    exports.CryptoHelperObsolete = CryptoHelperObsolete;
    exports.CryptoHelperV2 = CryptoHelperV2;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
