(() => {
  // src/features/feature-inplace-encrypt/Decryptable.ts
  var Decryptable = class {
  };

  // src/features/feature-inplace-encrypt/FeatureInplaceConstants.ts
  var _PREFIX_B = "%%\u{1F510}\u03B2 ";
  var _PREFIX_B_VISIBLE = "\u{1F510}\u03B2 ";
  var _PREFIX_A = "%%\u{1F510}\u03B1 ";
  var _PREFIX_A_VISIBLE = "\u{1F510}\u03B1 ";
  var _PREFIX_OBSOLETE = "%%\u{1F510} ";
  var _PREFIX_OBSOLETE_VISIBLE = "\u{1F510} ";
  var _PREFIX_ENCODE_DEFAULT = _PREFIX_B;
  var _PREFIX_ENCODE_DEFAULT_VISIBLE = _PREFIX_B_VISIBLE;
  var _PREFIXES = [
    _PREFIX_B,
    _PREFIX_B_VISIBLE,
    _PREFIX_A,
    _PREFIX_A_VISIBLE,
    _PREFIX_OBSOLETE,
    _PREFIX_OBSOLETE_VISIBLE
  ];
  var _SUFFIX_WITH_COMMENT = " \u{1F510}%%";
  var _SUFFIX_NO_COMMENT = " \u{1F510}";
  var _SUFFIXES = [
    _SUFFIX_WITH_COMMENT,
    _SUFFIX_NO_COMMENT
  ];
  var _HINT = "\u{1F4A1}";

  // src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts
  var FeatureInplaceTextAnalysis = class {
    constructor(text) {
      this.process(text);
    }
    process(text) {
      var _a, _b;
      this.processedText = text;
      this.isEmpty = text.length === 0;
      this.prefix = (_a = _PREFIXES.find((prefix) => text.startsWith(prefix))) != null ? _a : "";
      this.suffix = (_b = _SUFFIXES.find((suffix) => text.endsWith(suffix))) != null ? _b : "";
      this.hasEncryptedPrefix = this.prefix.length > 0;
      this.hasEncryptedSuffix = this.suffix.length > 0;
      this.hasObsoleteEncryptedPrefix = this.prefix === _PREFIX_OBSOLETE || this.prefix === _PREFIX_OBSOLETE_VISIBLE;
      this.containsEncryptedMarkers = [..._PREFIXES, ..._SUFFIXES].some((marker) => text.includes(marker));
      this.canDecrypt = this.hasEncryptedPrefix && this.hasEncryptedSuffix;
      this.canEncrypt = !this.hasEncryptedPrefix && !this.containsEncryptedMarkers;
      if (this.canDecrypt) {
        const decryptable = this.parseDecryptableContent(text);
        if (decryptable != null) {
          this.decryptable = decryptable;
        } else {
          this.canDecrypt = false;
        }
      }
    }
    parseDecryptableContent(text) {
      const result = new Decryptable();
      if (!this.hasEncryptedPrefix || !this.hasEncryptedSuffix) {
        return null;
      }
      if (this.hasObsoleteEncryptedPrefix) {
        result.version = 0;
      } else if (this.prefix == _PREFIX_B || this.prefix == _PREFIX_B_VISIBLE) {
        result.version = 2;
      } else if (this.prefix == _PREFIX_A || this.prefix == _PREFIX_A_VISIBLE) {
        result.version = 1;
      }
      const content = text.substring(this.prefix.length, text.length - this.suffix.length);
      if ([..._PREFIXES, ..._SUFFIXES].some((marker) => content.includes(marker))) {
        return null;
      }
      if (content.substring(0, _HINT.length) == _HINT) {
        const endHintMarker = content.indexOf(_HINT, _HINT.length);
        if (endHintMarker < 0) {
          return null;
        }
        result.hint = content.substring(_HINT.length, endHintMarker);
        result.base64CipherText = content.substring(endHintMarker + _HINT.length);
      } else {
        result.base64CipherText = content;
      }
      result.showInReadingView = !this.prefix.includes("%%");
      return result;
    }
  };

  // src/services/CryptoHelper.ts
  var vectorSize = 16;
  var utf8Encoder = new TextEncoder();
  var utf8Decoder = new TextDecoder();
  var iterations = 1e3;
  var salt = utf8Encoder.encode("XHWnDAT6ehMVY2zD");
  var CryptoHelper = class {
    // constructor(){
    // 	console.debug('new CryptoHelper');
    // }
    async deriveKey(password) {
      const buffer = utf8Encoder.encode(password);
      const key = await crypto.subtle.importKey("raw", buffer, { name: "PBKDF2" }, false, ["deriveKey"]);
      const privateKey = crypto.subtle.deriveKey(
        {
          name: "PBKDF2",
          hash: { name: "SHA-256" },
          iterations,
          salt
        },
        key,
        {
          name: "AES-GCM",
          length: 256
        },
        false,
        ["encrypt", "decrypt"]
      );
      return privateKey;
    }
    async encryptToBytes(text, password) {
      const key = await this.deriveKey(password);
      const textBytesToEncrypt = utf8Encoder.encode(text);
      const vector = crypto.getRandomValues(new Uint8Array(vectorSize));
      const encryptedBytes = new Uint8Array(
        await crypto.subtle.encrypt(
          { name: "AES-GCM", iv: vector },
          key,
          textBytesToEncrypt
        )
      );
      const finalBytes = new Uint8Array(vector.byteLength + encryptedBytes.byteLength);
      finalBytes.set(vector, 0);
      finalBytes.set(encryptedBytes, vector.byteLength);
      return finalBytes;
    }
    convertToString(bytes) {
      let result = "";
      for (let idx = 0; idx < bytes.length; idx++) {
        result += String.fromCharCode(bytes[idx]);
      }
      return result;
    }
    async encryptToBase64(text, password) {
      const finalBytes = await this.encryptToBytes(text, password);
      const base64Text = btoa(this.convertToString(finalBytes));
      return base64Text;
    }
    stringToArray(str) {
      const result = [];
      for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
      }
      return new Uint8Array(result);
    }
    async decryptFromBytes(encryptedBytes, password) {
      try {
        const vector = encryptedBytes.slice(0, vectorSize);
        const encryptedTextBytes = encryptedBytes.slice(vectorSize);
        const key = await this.deriveKey(password);
        const decryptedBytes = await crypto.subtle.decrypt(
          { name: "AES-GCM", iv: vector },
          key,
          encryptedTextBytes
        );
        const decryptedText = utf8Decoder.decode(decryptedBytes);
        return decryptedText;
      } catch (e) {
        return null;
      }
    }
    async decryptFromBase64(base64Encoded, password) {
      try {
        const bytesToDecode = this.stringToArray(atob(base64Encoded));
        return await this.decryptFromBytes(bytesToDecode, password);
      } catch (e) {
        return null;
      }
    }
  };

  // src/services/CryptoHelper2304.ts
  var CryptoHelper2304 = class {
    constructor(vectorSize2, saltSize, iterations2) {
      this.vectorSize = vectorSize2;
      this.saltSize = saltSize;
      this.iterations = iterations2;
    }
    async deriveKey(password, salt2) {
      const utf8Encoder2 = new TextEncoder();
      const buffer = utf8Encoder2.encode(password);
      const key = await crypto.subtle.importKey(
        /*format*/
        "raw",
        /*keyData*/
        buffer,
        /*algorithm*/
        "PBKDF2",
        /*extractable*/
        false,
        /*keyUsages*/
        ["deriveKey"]
      );
      try {
        const privateKey = await crypto.subtle.deriveKey(
          /*algorithm*/
          {
            name: "PBKDF2",
            hash: "SHA-512",
            salt: salt2,
            iterations: this.iterations
          },
          /*baseKey*/
          key,
          /*derivedKeyAlgorithm*/
          {
            name: "AES-GCM",
            length: 256
          },
          /*extractable*/
          false,
          /*keyUsages*/
          ["encrypt", "decrypt"]
        );
        return privateKey;
      } finally {
      }
    }
    async encryptToBytes(text, password) {
      const salt2 = crypto.getRandomValues(new Uint8Array(this.saltSize));
      const key = await this.deriveKey(password, salt2);
      const utf8Encoder2 = new TextEncoder();
      const textBytesToEncrypt = utf8Encoder2.encode(text);
      const vector = crypto.getRandomValues(new Uint8Array(this.vectorSize));
      const encryptedBytes = new Uint8Array(
        await crypto.subtle.encrypt(
          /*algorithm*/
          {
            name: "AES-GCM",
            iv: vector
          },
          /*key*/
          key,
          /*data*/
          textBytesToEncrypt
        )
      );
      const finalBytes = new Uint8Array(vector.byteLength + salt2.byteLength + encryptedBytes.byteLength);
      finalBytes.set(vector, 0);
      finalBytes.set(salt2, vector.byteLength);
      finalBytes.set(encryptedBytes, vector.byteLength + salt2.byteLength);
      return finalBytes;
    }
    convertToString(bytes) {
      let result = "";
      for (let idx = 0; idx < bytes.length; idx++) {
        result += String.fromCharCode(bytes[idx]);
      }
      return result;
    }
    async encryptToBase64(text, password) {
      const finalBytes = await this.encryptToBytes(text, password);
      const base64Text = btoa(this.convertToString(finalBytes));
      return base64Text;
    }
    stringToArray(str) {
      const result = [];
      for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
      }
      return new Uint8Array(result);
    }
    async decryptFromBytes(encryptedBytes, password) {
      try {
        let offset;
        let nextOffset;
        offset = 0;
        nextOffset = offset + this.vectorSize;
        const vector = encryptedBytes.slice(offset, nextOffset);
        offset = nextOffset;
        nextOffset = offset + this.saltSize;
        const salt2 = encryptedBytes.slice(offset, nextOffset);
        offset = nextOffset;
        nextOffset = void 0;
        const encryptedTextBytes = encryptedBytes.slice(offset);
        const key = await this.deriveKey(password, salt2);
        const decryptedBytes = await crypto.subtle.decrypt(
          /*algorithm*/
          {
            name: "AES-GCM",
            iv: vector
          },
          /*key*/
          key,
          /*data*/
          encryptedTextBytes
        );
        const utf8Decoder2 = new TextDecoder();
        const decryptedText = utf8Decoder2.decode(decryptedBytes);
        return decryptedText;
      } catch (e) {
        return null;
      }
    }
    async decryptFromBase64(base64Encoded, password) {
      try {
        const bytesToDecode = this.stringToArray(atob(base64Encoded));
        return await this.decryptFromBytes(bytesToDecode, password);
      } catch (e) {
        return null;
      }
    }
  };

  // src/services/CryptoHelperObsolete.ts
  var algorithmObsolete = {
    name: "AES-GCM",
    iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
    tagLength: 128
  };
  var CryptoHelperObsolete = class {
    async buildKey(password) {
      const utf8Encode = new TextEncoder();
      const passwordBytes = utf8Encode.encode(password);
      const passwordDigest = await crypto.subtle.digest({ name: "SHA-256" }, passwordBytes);
      const key = await crypto.subtle.importKey(
        "raw",
        passwordDigest,
        algorithmObsolete,
        false,
        ["encrypt", "decrypt"]
      );
      return key;
    }
    /**
     	* @deprecated
    	*/
    async encryptToBase64(text, password) {
      const key = await this.buildKey(password);
      const utf8Encode = new TextEncoder();
      const bytesToEncrypt = utf8Encode.encode(text);
      const encryptedBytes = new Uint8Array(await crypto.subtle.encrypt(
        algorithmObsolete,
        key,
        bytesToEncrypt
      ));
      const base64Text = btoa(String.fromCharCode(...encryptedBytes));
      return base64Text;
    }
    stringToArray(str) {
      const result = [];
      for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
      }
      return new Uint8Array(result);
    }
    async decryptFromBase64(base64Encoded, password) {
      try {
        const bytesToDecrypt = this.stringToArray(atob(base64Encoded));
        const key = await this.buildKey(password);
        const decryptedBytes = await crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt);
        const utf8Decode = new TextDecoder();
        const decryptedText = utf8Decode.decode(decryptedBytes);
        return decryptedText;
      } catch (e) {
        return null;
      }
    }
  };

  // src/services/CryptoHelperFactory.ts
  var _CryptoHelperFactory = class _CryptoHelperFactory {
    static BuildDefault() {
      return this.cryptoHelper2304_v2;
    }
    static BuildFromFileDataOrThrow(data) {
      const result = _CryptoHelperFactory.BuildFromFileDataOrNull(data);
      if (result != null) {
        return result;
      }
      throw new Error(`Unable to determine ICryptoHelper for File ver ${data.version}`);
    }
    static BuildFromFileDataOrNull(data) {
      if (data.version == "1.0") {
        return new CryptoHelper();
      }
      if (data.version == "2.0") {
        return this.cryptoHelper2304_v2;
      }
      return null;
    }
    static BuildFromDecryptableOrThrow(decryptable) {
      const result = _CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
      if (result != null) {
        return result;
      }
      throw new Error(`Unable to determine ICryptoHelper for Decryptable ver ${decryptable.version}`);
    }
    static BuildFromDecryptableOrNull(decryptable) {
      if (decryptable.version == 0) {
        return new CryptoHelperObsolete();
      }
      if (decryptable.version == 1) {
        return new CryptoHelper();
      }
      if (decryptable.version == 2) {
        return this.cryptoHelper2304_v2;
      }
      return null;
    }
  };
  _CryptoHelperFactory.cryptoHelper2304_v2 = new CryptoHelper2304(16, 16, 21e4);
  var CryptoHelperFactory = _CryptoHelperFactory;

  // src/services/FileDataHelper.ts
  var FileData2 = class {
    constructor(version, hint, encodedData) {
      this.version = "1.0";
      this.version = version;
      this.hint = hint;
      this.encodedData = encodedData;
    }
  };
  var _FileDataHelper = class _FileDataHelper {
    static async encrypt(pass, hint, text) {
      const crypto2 = CryptoHelperFactory.BuildDefault();
      const encryptedData = await crypto2.encryptToBase64(text, pass);
      return new FileData2(_FileDataHelper.DEFAULT_VERSION, hint, encryptedData);
    }
    static async decrypt(data, pass) {
      if (data.encodedData == "") {
        return "";
      }
      const crypto2 = CryptoHelperFactory.BuildFromFileDataOrThrow(data);
      return await crypto2.decryptFromBase64(data.encodedData, pass);
    }
  };
  _FileDataHelper.DEFAULT_VERSION = "2.0";
  var FileDataHelper = _FileDataHelper;
  var JsonFileEncoding = class {
    static encode(data) {
      return JSON.stringify(data, null, 2);
    }
    static isEncoded(text) {
      try {
        JSON.parse(text);
        return true;
      } catch (error) {
        return false;
      }
    }
    static decode(encodedText) {
      if (encodedText === "") {
        return new FileData2(FileDataHelper.DEFAULT_VERSION, "", "");
      }
      return JSON.parse(encodedText);
    }
  };

  // src/tools/offline-decrypt.ts
  var OfflineDecrypt = class {
    async decrypt(content, password) {
      console.info("Trying the default decryption");
      const chDef = CryptoHelperFactory.BuildDefault();
      const result = await chDef.decryptFromBase64(content, password);
      if (result != null) {
        return result;
      }
      console.info("Trying marked inplace feature decryption");
      const ta = new FeatureInplaceTextAnalysis(content);
      if (ta.decryptable != null) {
        const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(ta.decryptable);
        if (ch != null) {
          const result2 = await ch.decryptFromBase64(ta.decryptable.base64CipherText, password);
          if (result2 != null) {
            return result2;
          }
        }
      }
      for (let ver = 10; ver >= 0; ver--) {
        console.info("Trying non-marked inplace feature decryption", "ver", ver);
        const decryptable = { version: ver, base64CipherText: content, hint: "", showInReadingView: false };
        const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
        const result2 = await (ch == null ? void 0 : ch.decryptFromBase64(decryptable.base64CipherText, password));
        if (result2 != null) {
          return result2;
        }
      }
      console.info("Trying whole note feature decryption");
      try {
        const fileData = JsonFileEncoding.decode(content);
        console.debug(fileData);
        const chFd = CryptoHelperFactory.BuildFromFileDataOrNull(fileData);
        const resultFd = await (chFd == null ? void 0 : chFd.decryptFromBase64(fileData.encodedData, password));
        if (resultFd != null) {
          return resultFd;
        }
      } catch (e) {
        console.info(e);
      }
      return null;
    }
  };
  window.$ = new OfflineDecrypt();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0RlY3J5cHRhYmxlLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9GZWF0dXJlSW5wbGFjZUNvbnN0YW50cy50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvZmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlci50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyMjMwNC50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyT2Jzb2xldGUudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlckZhY3RvcnkudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0ZpbGVEYXRhSGVscGVyLnRzIiwgIi4uL3NyYy90b29scy9vZmZsaW5lLWRlY3J5cHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjbGFzcyBEZWNyeXB0YWJsZXtcclxuXHR2ZXJzaW9uOiBudW1iZXI7XHJcblx0YmFzZTY0Q2lwaGVyVGV4dDpzdHJpbmc7XHJcblx0aGludDpzdHJpbmc7XHJcblx0c2hvd0luUmVhZGluZ1ZpZXc6IGJvb2xlYW47XHJcbn0iLCAiXHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJztcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQl9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMiAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnO1xyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9BX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IxICc7XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICc7XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwICc7XHJcblxyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9FTkNPREVfREVGQVVMVCA9IF9QUkVGSVhfQjtcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfRU5DT0RFX0RFRkFVTFRfVklTSUJMRSA9IF9QUkVGSVhfQl9WSVNJQkxFO1xyXG5cclxuLy8gU2hvdWxkIGJlIGxpc3RlZCBieSBldmFsdWF0aW9uIHByaW9yaXR5XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYRVMgPSBbXHJcblx0X1BSRUZJWF9CLFxyXG5cdF9QUkVGSVhfQl9WSVNJQkxFLFxyXG5cdF9QUkVGSVhfQSxcclxuXHRfUFJFRklYX0FfVklTSUJMRSxcclxuXHRfUFJFRklYX09CU09MRVRFLFxyXG5cdF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IF9TVUZGSVhfV0lUSF9DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAlJSc7XHJcbmV4cG9ydCBjb25zdCBfU1VGRklYX05PX0NPTU1FTlQgPSAnIFx1RDgzRFx1REQxMCc7XHJcblxyXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcclxuZXhwb3J0IGNvbnN0IF9TVUZGSVhFUyA9IFtcclxuXHRfU1VGRklYX1dJVEhfQ09NTUVOVCxcclxuXHRfU1VGRklYX05PX0NPTU1FTlRcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IF9ISU5UID0gJ1x1RDgzRFx1RENBMSc7IiwgImltcG9ydCB7IERlY3J5cHRhYmxlIH0gZnJvbSBcIi4vRGVjcnlwdGFibGUudHNcIjtcclxuaW1wb3J0IHsgX0hJTlQsIF9QUkVGSVhFUywgX1BSRUZJWF9BLCBfUFJFRklYX0FfVklTSUJMRSwgX1BSRUZJWF9CLCBfUFJFRklYX0JfVklTSUJMRSwgX1BSRUZJWF9PQlNPTEVURSwgX1BSRUZJWF9PQlNPTEVURV9WSVNJQkxFLCBfU1VGRklYRVMgfSBmcm9tIFwiLi9GZWF0dXJlSW5wbGFjZUNvbnN0YW50cy50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lze1xyXG5cdHByb2Nlc3NlZFRleHQ6c3RyaW5nO1xyXG5cdGlzRW1wdHk6IGJvb2xlYW47XHJcblx0XHJcblx0cHJlZml4OiBzdHJpbmc7XHJcblx0c3VmZml4OiBzdHJpbmc7XHJcblxyXG5cdGhhc09ic29sZXRlRW5jcnlwdGVkUHJlZml4OiBib29sZWFuO1xyXG5cdGhhc0VuY3J5cHRlZFByZWZpeDogYm9vbGVhbjtcclxuXHRoYXNFbmNyeXB0ZWRTdWZmaXg6IGJvb2xlYW47XHJcblx0Y2FuRGVjcnlwdDogYm9vbGVhbjtcclxuXHRjYW5FbmNyeXB0OiBib29sZWFuO1xyXG5cdGNvbnRhaW5zRW5jcnlwdGVkTWFya2VyczogYm9vbGVhbjtcclxuXHRkZWNyeXB0YWJsZT8gOiBEZWNyeXB0YWJsZTtcclxuXHJcblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nKXtcclxuXHRcdHRoaXMucHJvY2Vzcyh0ZXh0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJvY2VzcyggdGV4dDogc3RyaW5nICkgOiB2b2lke1xyXG5cdFx0XHJcblx0XHR0aGlzLnByb2Nlc3NlZFRleHQgPSB0ZXh0O1xyXG5cclxuXHRcdHRoaXMuaXNFbXB0eSA9IHRleHQubGVuZ3RoID09PSAwO1xyXG5cclxuXHRcdHRoaXMucHJlZml4ID0gX1BSRUZJWEVTLmZpbmQoIChwcmVmaXgpID0+IHRleHQuc3RhcnRzV2l0aChwcmVmaXgpICkgPz8gJyc7XHJcblx0XHR0aGlzLnN1ZmZpeCA9IF9TVUZGSVhFUy5maW5kKCAoc3VmZml4KSA9PiB0ZXh0LmVuZHNXaXRoKHN1ZmZpeCkgKSA/PyAnJztcclxuXHRcdFxyXG5cdFx0dGhpcy5oYXNFbmNyeXB0ZWRQcmVmaXggPSB0aGlzLnByZWZpeC5sZW5ndGggPiAwO1xyXG5cdFx0dGhpcy5oYXNFbmNyeXB0ZWRTdWZmaXggPSB0aGlzLnN1ZmZpeC5sZW5ndGggPiAwO1xyXG5cclxuXHRcdHRoaXMuaGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXggPSB0aGlzLnByZWZpeCA9PT0gX1BSRUZJWF9PQlNPTEVURSB8fCB0aGlzLnByZWZpeCA9PT0gX1BSRUZJWF9PQlNPTEVURV9WSVNJQkxFO1xyXG5cclxuXHRcdHRoaXMuY29udGFpbnNFbmNyeXB0ZWRNYXJrZXJzID0gWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiB0ZXh0LmluY2x1ZGVzKG1hcmtlciApKTtcclxuXHJcblx0XHR0aGlzLmNhbkRlY3J5cHQgPSB0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCAmJiB0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeDtcclxuXHRcdHRoaXMuY2FuRW5jcnlwdCA9ICF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCAmJiAhdGhpcy5jb250YWluc0VuY3J5cHRlZE1hcmtlcnM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmNhbkRlY3J5cHQpe1xyXG5cdFx0XHRjb25zdCBkZWNyeXB0YWJsZSA9IHRoaXMucGFyc2VEZWNyeXB0YWJsZUNvbnRlbnQodGV4dCk7XHJcblxyXG5cdFx0XHRpZiAoIGRlY3J5cHRhYmxlICE9IG51bGwgKXtcclxuXHRcdFx0XHR0aGlzLmRlY3J5cHRhYmxlID0gZGVjcnlwdGFibGU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuY2FuRGVjcnlwdCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRGVjcnlwdGFibGVDb250ZW50KHRleHQ6IHN0cmluZykgOiBEZWNyeXB0YWJsZSB8IG51bGwge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IERlY3J5cHRhYmxlKCk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhdGhpcy5oYXNFbmNyeXB0ZWRQcmVmaXhcclxuXHRcdFx0fHwgIXRoaXMuaGFzRW5jcnlwdGVkU3VmZml4XHJcblx0XHQpe1xyXG5cdFx0XHRyZXR1cm4gbnVsbDsgLy8gaW52YWxpZCBmb3JtYXRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCB0aGlzLmhhc09ic29sZXRlRW5jcnlwdGVkUHJlZml4ICl7XHJcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMDtcclxuXHRcdH1lbHNlIGlmICggdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9CIHx8IHRoaXMucHJlZml4ID09IF9QUkVGSVhfQl9WSVNJQkxFICl7XHJcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMjtcclxuXHRcdH1lbHNlIGlmICggdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9BIHx8IHRoaXMucHJlZml4ID09IF9QUkVGSVhfQV9WSVNJQkxFICl7XHJcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1vdmUgbWFya2VycyBmcm9tIHN0YXJ0IGFuZCBlbmRcdFxyXG5cdFx0Y29uc3QgY29udGVudCA9IHRleHQuc3Vic3RyaW5nKHRoaXMucHJlZml4Lmxlbmd0aCwgdGV4dC5sZW5ndGggLSB0aGlzLnN1ZmZpeC5sZW5ndGgpO1xyXG5cclxuXHRcdGlmICggWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiBjb250ZW50LmluY2x1ZGVzKCBtYXJrZXIgKSkgKXtcclxuXHRcdFx0Ly8gY29udGVudCwgaXRzZWxmIGhhcyBtYXJrZXJzXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgaGludFxyXG5cdFx0aWYgKGNvbnRlbnQuc3Vic3RyaW5nKDAsX0hJTlQubGVuZ3RoKSA9PSBfSElOVCl7XHJcblx0XHRcdGNvbnN0IGVuZEhpbnRNYXJrZXIgPSBjb250ZW50LmluZGV4T2YoX0hJTlQsX0hJTlQubGVuZ3RoKTtcclxuXHRcdFx0aWYgKGVuZEhpbnRNYXJrZXI8MCl7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7IC8vIGludmFsaWQgZm9ybWF0XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0LmhpbnQgPSBjb250ZW50LnN1YnN0cmluZyhfSElOVC5sZW5ndGgsZW5kSGludE1hcmtlcilcclxuXHRcdFx0cmVzdWx0LmJhc2U2NENpcGhlclRleHQgPSBjb250ZW50LnN1YnN0cmluZyhlbmRIaW50TWFya2VyK19ISU5ULmxlbmd0aCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmVzdWx0LmJhc2U2NENpcGhlclRleHQgPSBjb250ZW50O1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LnNob3dJblJlYWRpbmdWaWV3ID0gIXRoaXMucHJlZml4LmluY2x1ZGVzKFwiJSVcIik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHR9XHJcbn0iLCAiY29uc3QgdmVjdG9yU2l6ZVx0PSAxNjtcclxuY29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XHJcbmNvbnN0IHV0ZjhEZWNvZGVyXHQ9IG5ldyBUZXh0RGVjb2RlcigpO1xyXG5jb25zdCBpdGVyYXRpb25zXHQ9IDEwMDA7XHJcbmNvbnN0IHNhbHRcdFx0XHQ9IHV0ZjhFbmNvZGVyLmVuY29kZSgnWEhXbkRBVDZlaE1WWTJ6RCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlciB7XHJcblxyXG5cdC8vIGNvbnN0cnVjdG9yKCl7XHJcblx0Ly8gXHRjb25zb2xlLmRlYnVnKCduZXcgQ3J5cHRvSGVscGVyJyk7XHJcblx0Ly8gfVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGRlcml2ZUtleShwYXNzd29yZDpzdHJpbmcpIDpQcm9taXNlPENyeXB0b0tleT4ge1xyXG5cdFx0Y29uc3QgYnVmZmVyICAgICA9IHV0ZjhFbmNvZGVyLmVuY29kZShwYXNzd29yZCk7XHJcblx0XHRjb25zdCBrZXkgICAgICAgID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIGJ1ZmZlciwge25hbWU6ICdQQktERjInfSwgZmFsc2UsIFsnZGVyaXZlS2V5J10pO1xyXG5cdFx0Y29uc3QgcHJpdmF0ZUtleSA9IGNyeXB0by5zdWJ0bGUuZGVyaXZlS2V5KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1BCS0RGMicsXHJcblx0XHRcdFx0aGFzaDoge25hbWU6ICdTSEEtMjU2J30sXHJcblx0XHRcdFx0aXRlcmF0aW9ucyxcclxuXHRcdFx0XHRzYWx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGtleSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdBRVMtR0NNJyxcclxuXHRcdFx0XHRsZW5ndGg6IDI1NlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWxzZSxcclxuXHRcdFx0WydlbmNyeXB0JywgJ2RlY3J5cHQnXVxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHByaXZhdGVLZXk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQnl0ZXModGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcblxyXG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQpO1xyXG5cdFx0XHJcblx0XHRjb25zdCB0ZXh0Qnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2Rlci5lbmNvZGUodGV4dCk7XHJcblx0XHRjb25zdCB2ZWN0b3IgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHZlY3RvclNpemUpKTtcclxuXHRcdFxyXG5cdFx0Ly8gZW5jcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRjb25zdCBlbmNyeXB0ZWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KFxyXG5cdFx0XHRhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXHJcblx0XHRcdFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXHJcblx0XHRcdFx0a2V5LFxyXG5cdFx0XHRcdHRleHRCeXRlc1RvRW5jcnlwdFxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoIHZlY3Rvci5ieXRlTGVuZ3RoICsgZW5jcnlwdGVkQnl0ZXMuYnl0ZUxlbmd0aCApO1xyXG5cdFx0ZmluYWxCeXRlcy5zZXQoIHZlY3RvciwgMCApO1xyXG5cdFx0ZmluYWxCeXRlcy5zZXQoIGVuY3J5cHRlZEJ5dGVzLCB2ZWN0b3IuYnl0ZUxlbmd0aCApO1xyXG5cclxuXHRcdHJldHVybiBmaW5hbEJ5dGVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb252ZXJ0VG9TdHJpbmcoIGJ5dGVzIDogVWludDhBcnJheSApOiBzdHJpbmcge1xyXG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xyXG5cdFx0Zm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYnl0ZXMubGVuZ3RoOyBpZHgrKykge1xyXG5cdFx0XHQvLyBhcHBlbmQgdG8gcmVzdWx0XHJcblx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2lkeF0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gYXdhaXQgdGhpcy5lbmNyeXB0VG9CeXRlcyh0ZXh0LCBwYXNzd29yZCk7XHJcblxyXG5cdFx0Ly9jb252ZXJ0IGFycmF5IHRvIGJhc2U2NFxyXG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoIHRoaXMuY29udmVydFRvU3RyaW5nKGZpbmFsQnl0ZXMpICk7XHJcblxyXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CeXRlcyhlbmNyeXB0ZWRCeXRlczogVWludDhBcnJheSwgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuXHRcdHRyeSB7XHJcblxyXG5cdFx0XHQvLyBleHRyYWN0IGl2XHJcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKDAsdmVjdG9yU2l6ZSk7XHJcblxyXG5cdFx0XHQvLyBleHRyYWN0IGVuY3J5cHRlZCB0ZXh0XHJcblx0XHRcdGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKHZlY3RvclNpemUpO1xyXG5cclxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQpO1xyXG5cclxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KFxyXG5cdFx0XHRcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxyXG5cdFx0XHRcdGtleSxcclxuXHRcdFx0XHRlbmNyeXB0ZWRUZXh0Qnl0ZXNcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxyXG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZXIuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcclxuXHRcdFx0cmV0dXJuIGRlY3J5cHRlZFRleHQ7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdC8vY29uc29sZS5lcnJvcihlKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoYmFzZTY0RW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xyXG5cdFx0dHJ5IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSB0aGlzLnN0cmluZ1RvQXJyYXkoYXRvYihiYXNlNjRFbmNvZGVkKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZWNyeXB0RnJvbUJ5dGVzKGJ5dGVzVG9EZWNvZGUsIHBhc3N3b3JkKTtcclxuXHJcblx0XHRcdC8vIC8vIGV4dHJhY3QgaXZcclxuXHRcdFx0Ly8gY29uc3QgdmVjdG9yID0gYnl0ZXNUb0RlY29kZS5zbGljZSgwLHZlY3RvclNpemUpO1xyXG5cclxuXHRcdFx0Ly8gLy8gZXh0cmFjdCBlbmNyeXB0ZWQgdGV4dFxyXG5cdFx0XHQvLyBjb25zdCBlbmNyeXB0ZWRUZXh0Qnl0ZXMgPSBieXRlc1RvRGVjb2RlLnNsaWNlKHZlY3RvclNpemUpO1xyXG5cclxuXHRcdFx0Ly8gY29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQpO1xyXG5cclxuXHRcdFx0Ly8gLy8gZGVjcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRcdC8vIGxldCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcclxuXHRcdFx0Ly8gXHR7bmFtZTogJ0FFUy1HQ00nLCBpdjogdmVjdG9yfSxcclxuXHRcdFx0Ly8gXHRrZXksXHJcblx0XHRcdC8vIFx0ZW5jcnlwdGVkVGV4dEJ5dGVzXHJcblx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHQvLyAvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcclxuXHRcdFx0Ly8gbGV0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2Rlci5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gZGVjcnlwdGVkVGV4dDtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsICJpbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlcjIzMDQgaW1wbGVtZW50cyBJQ3J5cHRvSGVscGVyIHtcclxuXHRwdWJsaWMgdmVjdG9yU2l6ZTogbnVtYmVyO1xyXG5cdHB1YmxpYyBzYWx0U2l6ZTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpdGVyYXRpb25zOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB2ZWN0b3JTaXplOiBudW1iZXIsIHNhbHRTaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlciApe1xyXG5cdFx0Ly9jb25zb2xlLmRlYnVnKCduZXcgQ3J5cHRvSGVscGVyMjMwNCcsIHt2ZWN0b3JTaXplLCBzYWx0U2l6ZSwgaXRlcmF0aW9uc30pO1xyXG5cdFx0dGhpcy52ZWN0b3JTaXplID0gdmVjdG9yU2l6ZTtcclxuXHRcdHRoaXMuc2FsdFNpemUgPSBzYWx0U2l6ZTtcclxuXHRcdHRoaXMuaXRlcmF0aW9ucyA9IGl0ZXJhdGlvbnM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGRlcml2ZUtleSggcGFzc3dvcmQ6c3RyaW5nLCBzYWx0OlVpbnQ4QXJyYXkgKSA6UHJvbWlzZTxDcnlwdG9LZXk+IHtcclxuXHRcdC8vIGNvbnNvbGUudHJhY2UoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XHJcblx0XHQvL1NlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1N1YnRsZUNyeXB0b1xyXG5cdFx0Y29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XHJcblx0XHRjb25zdCBidWZmZXIgICAgID0gdXRmOEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcclxuXHRcdGNvbnN0IGtleSAgICAgICAgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcclxuXHRcdFx0Lypmb3JtYXQqLyAncmF3JyxcclxuXHRcdFx0LyprZXlEYXRhKi8gYnVmZmVyLFxyXG5cdFx0XHQvKmFsZ29yaXRobSovICdQQktERjInLFxyXG5cdFx0XHQvKmV4dHJhY3RhYmxlKi8gZmFsc2UsXHJcblx0XHRcdC8qa2V5VXNhZ2VzKi8gWydkZXJpdmVLZXknXVxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0Ly9jb25zb2xlLnRpbWUoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XHJcblx0XHR0cnl7XHJcblx0XHRcdGNvbnN0IHByaXZhdGVLZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlcml2ZUtleShcclxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdQQktERjInLFxyXG5cdFx0XHRcdFx0aGFzaDogJ1NIQS01MTInLFxyXG5cdFx0XHRcdFx0c2FsdCxcclxuXHRcdFx0XHRcdGl0ZXJhdGlvbnM6IHRoaXMuaXRlcmF0aW9ucyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qYmFzZUtleSovIGtleSxcclxuXHRcdFx0XHQvKmRlcml2ZWRLZXlBbGdvcml0aG0qLyB7XHJcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXHJcblx0XHRcdFx0XHRsZW5ndGg6IDI1NlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LypleHRyYWN0YWJsZSovIGZhbHNlLFxyXG5cdFx0XHRcdC8qa2V5VXNhZ2VzKi8gWydlbmNyeXB0JywgJ2RlY3J5cHQnXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHByaXZhdGVLZXk7XHJcblx0XHR9ZmluYWxseXtcclxuXHRcdFx0Ly9jb25zb2xlLnRpbWVFbmQoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGVuY3J5cHRUb0J5dGVzKCB0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcblxyXG5cdFx0Y29uc3Qgc2FsdCA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoIG5ldyBVaW50OEFycmF5KHRoaXMuc2FsdFNpemUpICk7XHJcblxyXG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkoIHBhc3N3b3JkLCBzYWx0ICk7XHJcblx0XHRcclxuXHRcdGNvbnN0IHV0ZjhFbmNvZGVyXHQ9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG5cdFx0Y29uc3QgdGV4dEJ5dGVzVG9FbmNyeXB0ID0gdXRmOEVuY29kZXIuZW5jb2RlKHRleHQpO1xyXG5cdFx0Y29uc3QgdmVjdG9yID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSh0aGlzLnZlY3RvclNpemUpKTtcclxuXHRcdFxyXG5cdFx0Ly8gZW5jcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRjb25zdCBlbmNyeXB0ZWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KFxyXG5cdFx0XHRhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXHJcblx0XHRcdFx0LyphbGdvcml0aG0qLyB7XHJcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXHJcblx0XHRcdFx0XHRpdjogdmVjdG9yXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKmtleSovIGtleSxcclxuXHRcdFx0XHQvKmRhdGEqLyB0ZXh0Qnl0ZXNUb0VuY3J5cHRcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgZmluYWxCeXRlcyA9IG5ldyBVaW50OEFycmF5KCB2ZWN0b3IuYnl0ZUxlbmd0aCArIHNhbHQuYnl0ZUxlbmd0aCArIGVuY3J5cHRlZEJ5dGVzLmJ5dGVMZW5ndGggKTtcclxuXHRcdGZpbmFsQnl0ZXMuc2V0KCB2ZWN0b3IsIDAgKTtcclxuXHRcdGZpbmFsQnl0ZXMuc2V0KCBzYWx0LCB2ZWN0b3IuYnl0ZUxlbmd0aCApO1xyXG5cdFx0ZmluYWxCeXRlcy5zZXQoIGVuY3J5cHRlZEJ5dGVzLCB2ZWN0b3IuYnl0ZUxlbmd0aCArIHNhbHQuYnl0ZUxlbmd0aCApO1xyXG5cclxuXHRcdHJldHVybiBmaW5hbEJ5dGVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb252ZXJ0VG9TdHJpbmcoIGJ5dGVzIDogVWludDhBcnJheSApOiBzdHJpbmcge1xyXG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xyXG5cdFx0Zm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYnl0ZXMubGVuZ3RoOyBpZHgrKykge1xyXG5cdFx0XHQvLyBhcHBlbmQgdG8gcmVzdWx0XHJcblx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2lkeF0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gYXdhaXQgdGhpcy5lbmNyeXB0VG9CeXRlcyh0ZXh0LCBwYXNzd29yZCk7XHJcblxyXG5cdFx0Ly9jb252ZXJ0IGFycmF5IHRvIGJhc2U2NFxyXG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoIHRoaXMuY29udmVydFRvU3RyaW5nKGZpbmFsQnl0ZXMpICk7XHJcblxyXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGRlY3J5cHRGcm9tQnl0ZXMoXHJcblx0XHRlbmNyeXB0ZWRCeXRlczogVWludDhBcnJheSxcclxuXHRcdHBhc3N3b3JkOiBzdHJpbmdcclxuXHQpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9mZnNldDogbnVtYmVyO1xyXG5cdFx0XHRsZXQgbmV4dE9mZnNldCA6IG51bWJlcnx1bmRlZmluZWQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBleHRyYWN0IGl2XHJcblx0XHRcdG9mZnNldCA9IDA7XHJcblx0XHRcdG5leHRPZmZzZXQgPSBvZmZzZXQgKyB0aGlzLnZlY3RvclNpemU7XHJcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBleHRyYWN0IHNhbHRcclxuXHRcdFx0b2Zmc2V0ID0gbmV4dE9mZnNldDtcclxuXHRcdFx0bmV4dE9mZnNldCA9IG9mZnNldCArIHRoaXMuc2FsdFNpemU7XHJcblx0XHRcdGNvbnN0IHNhbHQgPSBlbmNyeXB0ZWRCeXRlcy5zbGljZShvZmZzZXQsIG5leHRPZmZzZXQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZXh0cmFjdCBlbmNyeXB0ZWQgdGV4dFxyXG5cdFx0XHRvZmZzZXQgPSBuZXh0T2Zmc2V0O1xyXG5cdFx0XHRuZXh0T2Zmc2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBlbmNyeXB0ZWRUZXh0Qnl0ZXMgPSBlbmNyeXB0ZWRCeXRlcy5zbGljZShvZmZzZXQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQsIHNhbHQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KFxyXG5cdFx0XHRcdC8qYWxnb3JpdGhtKi8ge1xyXG5cdFx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxyXG5cdFx0XHRcdFx0aXY6IHZlY3RvclxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyprZXkqLyBrZXksXHJcblx0XHRcdFx0LypkYXRhKi8gZW5jcnlwdGVkVGV4dEJ5dGVzXHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcclxuXHRcdFx0Y29uc3QgdXRmOERlY29kZXJcdD0gbmV3IFRleHREZWNvZGVyKCk7XHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2Rlci5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xyXG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdC8vY29uc29sZS5lcnJvcihlKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoIGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBieXRlc1RvRGVjb2RlID0gdGhpcy5zdHJpbmdUb0FycmF5KGF0b2IoYmFzZTY0RW5jb2RlZCkpO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZWNyeXB0RnJvbUJ5dGVzKCBieXRlc1RvRGVjb2RlLCBwYXNzd29yZCApO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59IiwgImV4cG9ydCBjb25zdCBhbGdvcml0aG1PYnNvbGV0ZSA9IHtcclxuXHRuYW1lOiAnQUVTLUdDTScsXHJcblx0aXY6IG5ldyBVaW50OEFycmF5KFsxOTYsIDE5MCwgMjQwLCAxOTAsIDE4OCwgNzgsIDQxLCAxMzIsIDE1LCAyMjAsIDg0LCAyMTFdKSxcclxuXHR0YWdMZW5ndGg6IDEyOFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyT2Jzb2xldGUge1xyXG5cclxuXHRwcml2YXRlIGFzeW5jIGJ1aWxkS2V5KHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IHV0ZjhFbmNvZGUgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuXHRcdGNvbnN0IHBhc3N3b3JkQnl0ZXMgPSB1dGY4RW5jb2RlLmVuY29kZShwYXNzd29yZCk7XHJcblxyXG5cdFx0Y29uc3QgcGFzc3dvcmREaWdlc3QgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCh7IG5hbWU6ICdTSEEtMjU2JyB9LCBwYXNzd29yZEJ5dGVzKTtcclxuXHJcblx0XHRjb25zdCBrZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcclxuXHRcdFx0J3JhdycsXHJcblx0XHRcdHBhc3N3b3JkRGlnZXN0LFxyXG5cdFx0XHRhbGdvcml0aG1PYnNvbGV0ZSxcclxuXHRcdFx0ZmFsc2UsXHJcblx0XHRcdFsnZW5jcnlwdCcsICdkZWNyeXB0J11cclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIGtleTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcbiAgXHQqIEBkZXByZWNhdGVkXHJcbiBcdCovXHJcblx0cHVibGljIGFzeW5jIGVuY3J5cHRUb0Jhc2U2NCh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XHJcblxyXG5cdFx0Y29uc3QgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG5cdFx0Y29uc3QgYnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2RlLmVuY29kZSh0ZXh0KTtcclxuXHJcblx0XHQvLyBlbmNyeXB0IGludG8gYnl0ZXNcclxuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxyXG5cdFx0XHRhbGdvcml0aG1PYnNvbGV0ZSwga2V5LCBieXRlc1RvRW5jcnlwdFxyXG5cdFx0KSk7XHJcblxyXG5cdFx0Ly9jb252ZXJ0IGFycmF5IHRvIGJhc2U2NFxyXG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi5lbmNyeXB0ZWRCeXRlcykpO1xyXG5cclxuXHRcdHJldHVybiBiYXNlNjRUZXh0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdHJpbmdUb0FycmF5KHN0cjogc3RyaW5nKTogVWludDhBcnJheSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGRlY3J5cHRGcm9tQmFzZTY0KGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIGNvbnZlcnQgYmFzZSA2NCB0byBhcnJheVxyXG5cdFx0XHRjb25zdCBieXRlc1RvRGVjcnlwdCA9IHRoaXMuc3RyaW5nVG9BcnJheShhdG9iKGJhc2U2NEVuY29kZWQpKTtcclxuXHJcblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuYnVpbGRLZXkocGFzc3dvcmQpO1xyXG5cclxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KGFsZ29yaXRobU9ic29sZXRlLCBrZXksIGJ5dGVzVG9EZWNyeXB0KTtcclxuXHJcblx0XHRcdC8vIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxyXG5cdFx0XHRjb25zdCB1dGY4RGVjb2RlID0gbmV3IFRleHREZWNvZGVyKCk7XHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2RlLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XHJcblx0XHRcdHJldHVybiBkZWNyeXB0ZWRUZXh0O1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiIsICJpbXBvcnQgeyBGaWxlRGF0YSB9IGZyb20gXCIuL0ZpbGVEYXRhSGVscGVyLnRzXCI7XHJcbmltcG9ydCB7IERlY3J5cHRhYmxlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0RlY3J5cHRhYmxlLnRzXCI7XHJcbmltcG9ydCB7IENyeXB0b0hlbHBlciB9IGZyb20gXCIuL0NyeXB0b0hlbHBlci50c1wiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9IZWxwZXIyMzA0IH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyMjMwNC50c1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSB9IGZyb20gXCIuL0NyeXB0b0hlbHBlck9ic29sZXRlLnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyRmFjdG9yeXtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcnlwdG9IZWxwZXIyMzA0X3YyID0gbmV3IENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwICk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgQnVpbGREZWZhdWx0KCk6IElDcnlwdG9IZWxwZXJ7XHJcblx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXIyMzA0X3YyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGE6IEZpbGVEYXRhICkgOiBJQ3J5cHRvSGVscGVyIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRmlsZURhdGFPck51bGwoZGF0YSk7XHJcblx0XHRpZiAoIHJlc3VsdCAhPSBudWxsICl7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBVbmFibGUgdG8gZGV0ZXJtaW5lIElDcnlwdG9IZWxwZXIgZm9yIEZpbGUgdmVyICR7ZGF0YS52ZXJzaW9ufWApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZGF0YTogRmlsZURhdGEgKSA6IElDcnlwdG9IZWxwZXIgfCBudWxsIHtcclxuXHRcdGlmICggZGF0YS52ZXJzaW9uID09ICcxLjAnICl7XHJcblx0XHRcdHJldHVybiBuZXcgQ3J5cHRvSGVscGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm90ZVx0XHRcdFx0djIuMFx0Q3J5cHRvSGVscGVyMjMwNFxyXG5cdFx0aWYgKCBkYXRhLnZlcnNpb24gPT0gJzIuMCcgKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyMjMwNF92MjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgQnVpbGRGcm9tRGVjcnlwdGFibGVPclRocm93KCBkZWNyeXB0YWJsZTogRGVjcnlwdGFibGUgKSA6IElDcnlwdG9IZWxwZXIge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggZGVjcnlwdGFibGUgKTtcclxuXHJcblx0XHRpZiAocmVzdWx0ICE9IG51bGwpe1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgVW5hYmxlIHRvIGRldGVybWluZSBJQ3J5cHRvSGVscGVyIGZvciBEZWNyeXB0YWJsZSB2ZXIgJHtkZWNyeXB0YWJsZS52ZXJzaW9ufWApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggZGVjcnlwdGFibGU6IERlY3J5cHRhYmxlICkgOiBJQ3J5cHRvSGVscGVyIHwgbnVsbCB7XHJcblx0XHQvLyBWZXJzaW9uc1xyXG5cdFx0Ly8gaW5wbGFjZSBvcmlnaW5hbFx0X1BSRUZJWF9PQlNPTEVURSA9ICclJVx1RDgzRFx1REQxMCAnICBDcnlwdG9IZWxwZXJPYnNvbGV0ZVxyXG5cdFx0XHJcblx0XHQvLyBpbnBsYWNlIGFscGhhXHRfUFJFRklYX0EgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjEgJ1x0XHRDcnlwdG9IZWxwZXJcclxuXHRcdC8vIFx0XHRcdFx0XHRfUFJFRklYX0FfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjEgJ1x0Q3J5cHRvSGVscGVyXHJcblxyXG5cdFx0Ly8gaW5wbGFjZSBiZXRhIFx0X1BSRUZJWF9CID0gJyUlXHVEODNEXHVERDEwXHUwM0IyICdcdFx0Q3J5cHRvSGVscGVyMjMwNCggMTYsIDE2LCAyMTAwMDAgKVxyXG5cdFx0Ly9cdFx0XHRcdFx0X1BSRUZJWF9CX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IyICdcdENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwIClcclxuXHRcdFxyXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDAgKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAxICl7XHJcblx0XHRcdHJldHVybiBuZXcgQ3J5cHRvSGVscGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDIgKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyMjMwNF92MjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG59IiwgImltcG9ydCB7IENyeXB0b0hlbHBlckZhY3RvcnkgfSBmcm9tIFwiLi9DcnlwdG9IZWxwZXJGYWN0b3J5LnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xyXG5cdFxyXG5cdHB1YmxpYyB2ZXJzaW9uID0gJzEuMCc7XHJcblx0cHVibGljIGhpbnQ6IHN0cmluZztcclxuXHRwdWJsaWMgZW5jb2RlZERhdGE6c3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggdmVyc2lvbjpzdHJpbmcsIGhpbnQ6c3RyaW5nLCBlbmNvZGVkRGF0YTpzdHJpbmcgKXtcclxuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcblx0XHR0aGlzLmhpbnQgPSBoaW50O1xyXG5cdFx0dGhpcy5lbmNvZGVkRGF0YSA9IGVuY29kZWREYXRhO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhSGVscGVye1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIERFRkFVTFRfVkVSU0lPTiA9ICcyLjAnO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIGVuY3J5cHQoIHBhc3M6IHN0cmluZywgaGludDpzdHJpbmcsIHRleHQ6c3RyaW5nICkgOiBQcm9taXNlPEZpbGVEYXRhPntcclxuXHRcdGNvbnN0IGNyeXB0byA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBlbmNyeXB0ZWREYXRhID0gYXdhaXQgY3J5cHRvLmVuY3J5cHRUb0Jhc2U2NCh0ZXh0LCBwYXNzKTtcclxuXHRcdHJldHVybiBuZXcgRmlsZURhdGEoIEZpbGVEYXRhSGVscGVyLkRFRkFVTFRfVkVSU0lPTiwgaGludCwgZW5jcnlwdGVkRGF0YSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIGRlY3J5cHQoIGRhdGE6IEZpbGVEYXRhLCBwYXNzOnN0cmluZyApIDogUHJvbWlzZTxzdHJpbmd8bnVsbD57XHJcblx0XHRpZiAoIGRhdGEuZW5jb2RlZERhdGEgPT0gJycgKXtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY3J5cHRvID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGEgKTtcclxuXHRcdHJldHVybiBhd2FpdCBjcnlwdG8uZGVjcnlwdEZyb21CYXNlNjQoIGRhdGEuZW5jb2RlZERhdGEsIHBhc3MgKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uRmlsZUVuY29kaW5nIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyBlbmNvZGUoIGRhdGE6IEZpbGVEYXRhICkgOiBzdHJpbmd7XHJcblx0XHQvL2NvbnNvbGUuZGVidWcoICdKc29uRmlsZUVuY29kaW5nLmVuY29kZScsIHtkYXRhfSApO1xyXG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBpc0VuY29kZWQoIHRleHQ6IHN0cmluZyApIDogYm9vbGVhbiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRKU09OLnBhcnNlKCB0ZXh0ICk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGRlY29kZSggZW5jb2RlZFRleHQ6c3RyaW5nICkgOiBGaWxlRGF0YSB7XHJcblx0XHQvL2NvbnNvbGUuZGVidWcoJ0pzb25GaWxlRW5jb2RpbmcuZGVjb2RlJyx7ZW5jb2RlZFRleHR9KTtcclxuXHRcdGlmICggZW5jb2RlZFRleHQgPT09ICcnICl7XHJcblx0XHRcdHJldHVybiBuZXcgRmlsZURhdGEoIEZpbGVEYXRhSGVscGVyLkRFRkFVTFRfVkVSU0lPTiwgJycsICcnICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSggZW5jb2RlZFRleHQgKSBhcyBGaWxlRGF0YTtcclxuXHR9XHJcbn0iLCAiaW1wb3J0IHsgRGVjcnlwdGFibGUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRGVjcnlwdGFibGUudHNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMgfSBmcm9tIFwiLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvZmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMudHNcIjtcclxuaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJGYWN0b3J5LnRzXCI7XHJcbmltcG9ydCB7IEpzb25GaWxlRW5jb2RpbmcgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsZURhdGFIZWxwZXIudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPZmZsaW5lRGVjcnlwdCB7XHJcblxyXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0KCBjb250ZW50OnN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApIDogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcblxyXG5cdFx0Ly8gVHJ5aW5nIHRoZSBkZWZhdWx0IGRlY3J5cHRpb25cclxuXHRcdGNvbnNvbGUuaW5mbyggJ1RyeWluZyB0aGUgZGVmYXVsdCBkZWNyeXB0aW9uJyApO1xyXG5cdFx0Y29uc3QgY2hEZWYgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY2hEZWYuZGVjcnlwdEZyb21CYXNlNjQoIGNvbnRlbnQsIHBhc3N3b3JkICk7XHJcblx0XHRpZiAoIHJlc3VsdCAhPSBudWxsICl7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVHJ5aW5nIG1hcmtlZCBpbnBsYWNlIGZlYXR1cmUgZGVjcnlwdGlvblxyXG5cdFx0Y29uc29sZS5pbmZvKCAnVHJ5aW5nIG1hcmtlZCBpbnBsYWNlIGZlYXR1cmUgZGVjcnlwdGlvbicgKTtcclxuXHRcdGNvbnN0IHRhID0gbmV3IEZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lzKCBjb250ZW50ICk7XHJcblx0XHRpZiAoIHRhLmRlY3J5cHRhYmxlICE9IG51bGwgKXtcclxuXHRcdFx0Y29uc3QgY2ggPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKHRhLmRlY3J5cHRhYmxlKTtcclxuXHRcdFx0aWYgKGNoICE9IG51bGwpe1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoLmRlY3J5cHRGcm9tQmFzZTY0KCB0YS5kZWNyeXB0YWJsZS5iYXNlNjRDaXBoZXJUZXh0LCBwYXNzd29yZCApO1xyXG5cdFx0XHRcdGlmICggcmVzdWx0ICE9IG51bGwgKXtcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVHJ5aW5nIG5vbi1tYXJrZWQgaW5wbGFjZSBmZWF0dXJlIGRlY3J5cHRpb25cclxuXHRcdGZvciAobGV0IHZlciA9IDEwOyB2ZXIgPj0gMDsgdmVyLS0pIHtcclxuXHRcdFx0Y29uc29sZS5pbmZvKCAnVHJ5aW5nIG5vbi1tYXJrZWQgaW5wbGFjZSBmZWF0dXJlIGRlY3J5cHRpb24nLCAndmVyJywgdmVyICk7XHJcblx0XHRcdGNvbnN0IGRlY3J5cHRhYmxlIDogRGVjcnlwdGFibGUgPSB7IHZlcnNpb246IHZlciwgYmFzZTY0Q2lwaGVyVGV4dDogY29udGVudCwgaGludDogJycsIHNob3dJblJlYWRpbmdWaWV3OiBmYWxzZSB9O1xyXG5cdFx0XHRjb25zdCBjaCA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRGVjcnlwdGFibGVPck51bGwoZGVjcnlwdGFibGUpXHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoPy5kZWNyeXB0RnJvbUJhc2U2NCggZGVjcnlwdGFibGUuYmFzZTY0Q2lwaGVyVGV4dCwgcGFzc3dvcmQgKTtcclxuXHRcdFx0aWYgKCByZXN1bHQgIT0gbnVsbCApe1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ly8gVHJ5aW5nIHdob2xlIG5vdGUgZmVhdHVyZSBkZWNyeXB0aW9uXHJcblx0XHRjb25zb2xlLmluZm8oICdUcnlpbmcgd2hvbGUgbm90ZSBmZWF0dXJlIGRlY3J5cHRpb24nICk7XHJcblx0XHR0cnl7XHJcblx0XHRcdGNvbnN0IGZpbGVEYXRhID0gSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUoIGNvbnRlbnQgKTtcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyhmaWxlRGF0YSk7XHJcblx0XHRcdGNvbnN0IGNoRmQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBmaWxlRGF0YSApO1xyXG5cdFx0XHRjb25zdCByZXN1bHRGZCA9IGF3YWl0IGNoRmQ/LmRlY3J5cHRGcm9tQmFzZTY0KCBmaWxlRGF0YS5lbmNvZGVkRGF0YSwgcGFzc3dvcmQgKTtcclxuXHRcdFx0aWYgKCByZXN1bHRGZCAhPSBudWxsICl7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdEZkO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlKXtcclxuXHRcdFx0Y29uc29sZS5pbmZvKGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgJDogT2ZmbGluZURlY3J5cHQ7IH1cclxufVxyXG5cclxud2luZG93LiQgPSBuZXcgT2ZmbGluZURlY3J5cHQoKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBTyxNQUFNLGNBQU4sTUFBaUI7QUFBQSxFQUt4Qjs7O0FDSk8sTUFBTSxZQUFZO0FBQ2xCLE1BQU0sb0JBQW9CO0FBRTFCLE1BQU0sWUFBWTtBQUNsQixNQUFNLG9CQUFvQjtBQUMxQixNQUFNLG1CQUFtQjtBQUN6QixNQUFNLDJCQUEyQjtBQUVqQyxNQUFNLHlCQUF5QjtBQUMvQixNQUFNLGlDQUFpQztBQUd2QyxNQUFNLFlBQVk7QUFBQSxJQUN4QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUVPLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0scUJBQXFCO0FBRzNCLE1BQU0sWUFBWTtBQUFBLElBQ3hCO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFFTyxNQUFNLFFBQVE7OztBQzVCZCxNQUFNLDZCQUFOLE1BQWdDO0FBQUEsSUFldEMsWUFBWSxNQUFhO0FBQ3hCLFdBQUssUUFBUSxJQUFJO0FBQUEsSUFDbEI7QUFBQSxJQUVRLFFBQVMsTUFBcUI7QUF0QnZDO0FBd0JFLFdBQUssZ0JBQWdCO0FBRXJCLFdBQUssVUFBVSxLQUFLLFdBQVc7QUFFL0IsV0FBSyxVQUFTLGVBQVUsS0FBTSxDQUFDLFdBQVcsS0FBSyxXQUFXLE1BQU0sQ0FBRSxNQUFwRCxZQUF5RDtBQUN2RSxXQUFLLFVBQVMsZUFBVSxLQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsTUFBTSxDQUFFLE1BQWxELFlBQXVEO0FBRXJFLFdBQUsscUJBQXFCLEtBQUssT0FBTyxTQUFTO0FBQy9DLFdBQUsscUJBQXFCLEtBQUssT0FBTyxTQUFTO0FBRS9DLFdBQUssNkJBQTZCLEtBQUssV0FBVyxvQkFBb0IsS0FBSyxXQUFXO0FBRXRGLFdBQUssMkJBQTJCLENBQUMsR0FBRyxXQUFXLEdBQUcsU0FBUyxFQUFFLEtBQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxNQUFPLENBQUM7QUFFckcsV0FBSyxhQUFhLEtBQUssc0JBQXNCLEtBQUs7QUFDbEQsV0FBSyxhQUFhLENBQUMsS0FBSyxzQkFBc0IsQ0FBQyxLQUFLO0FBRXBELFVBQUksS0FBSyxZQUFXO0FBQ25CLGNBQU0sY0FBYyxLQUFLLHdCQUF3QixJQUFJO0FBRXJELFlBQUssZUFBZSxNQUFNO0FBQ3pCLGVBQUssY0FBYztBQUFBLFFBQ3BCLE9BQUs7QUFDSixlQUFLLGFBQWE7QUFBQSxRQUNuQjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFFUSx3QkFBd0IsTUFBbUM7QUFDbEUsWUFBTSxTQUFTLElBQUksWUFBWTtBQUUvQixVQUNDLENBQUMsS0FBSyxzQkFDSCxDQUFDLEtBQUssb0JBQ1Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUVBLFVBQUssS0FBSyw0QkFBNEI7QUFDckMsZUFBTyxVQUFVO0FBQUEsTUFDbEIsV0FBVyxLQUFLLFVBQVUsYUFBYSxLQUFLLFVBQVUsbUJBQW1CO0FBQ3hFLGVBQU8sVUFBVTtBQUFBLE1BQ2xCLFdBQVcsS0FBSyxVQUFVLGFBQWEsS0FBSyxVQUFVLG1CQUFtQjtBQUN4RSxlQUFPLFVBQVU7QUFBQSxNQUNsQjtBQUdBLFlBQU0sVUFBVSxLQUFLLFVBQVUsS0FBSyxPQUFPLFFBQVEsS0FBSyxTQUFTLEtBQUssT0FBTyxNQUFNO0FBRW5GLFVBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxTQUFTLEVBQUUsS0FBTSxDQUFDLFdBQVcsUUFBUSxTQUFVLE1BQU8sQ0FBQyxHQUFHO0FBRWhGLGVBQU87QUFBQSxNQUNSO0FBR0EsVUFBSSxRQUFRLFVBQVUsR0FBRSxNQUFNLE1BQU0sS0FBSyxPQUFNO0FBQzlDLGNBQU0sZ0JBQWdCLFFBQVEsUUFBUSxPQUFNLE1BQU0sTUFBTTtBQUN4RCxZQUFJLGdCQUFjLEdBQUU7QUFDbkIsaUJBQU87QUFBQSxRQUNSO0FBQ0EsZUFBTyxPQUFPLFFBQVEsVUFBVSxNQUFNLFFBQU8sYUFBYTtBQUMxRCxlQUFPLG1CQUFtQixRQUFRLFVBQVUsZ0JBQWMsTUFBTSxNQUFNO0FBQUEsTUFDdkUsT0FBSztBQUNKLGVBQU8sbUJBQW1CO0FBQUEsTUFDM0I7QUFDQSxhQUFPLG9CQUFvQixDQUFDLEtBQUssT0FBTyxTQUFTLElBQUk7QUFDckQsYUFBTztBQUFBLElBRVI7QUFBQSxFQUNEOzs7QUM3RkEsTUFBTSxhQUFhO0FBQ25CLE1BQU0sY0FBYyxJQUFJLFlBQVk7QUFDcEMsTUFBTSxjQUFjLElBQUksWUFBWTtBQUNwQyxNQUFNLGFBQWE7QUFDbkIsTUFBTSxPQUFTLFlBQVksT0FBTyxrQkFBa0I7QUFFN0MsTUFBTSxlQUFOLE1BQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNekIsTUFBYyxVQUFVLFVBQXFDO0FBQzVELFlBQU0sU0FBYSxZQUFZLE9BQU8sUUFBUTtBQUM5QyxZQUFNLE1BQWEsTUFBTSxPQUFPLE9BQU8sVUFBVSxPQUFPLFFBQVEsRUFBQyxNQUFNLFNBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3RHLFlBQU0sYUFBYSxPQUFPLE9BQU87QUFBQSxRQUNoQztBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTSxFQUFDLE1BQU0sVUFBUztBQUFBLFVBQ3RCO0FBQUEsVUFDQTtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQSxDQUFDLFdBQVcsU0FBUztBQUFBLE1BQ3RCO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUVBLE1BQWEsZUFBZSxNQUFjLFVBQXVDO0FBRWhGLFlBQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxRQUFRO0FBRXpDLFlBQU0scUJBQXFCLFlBQVksT0FBTyxJQUFJO0FBQ2xELFlBQU0sU0FBUyxPQUFPLGdCQUFnQixJQUFJLFdBQVcsVUFBVSxDQUFDO0FBR2hFLFlBQU0saUJBQWlCLElBQUk7QUFBQSxRQUMxQixNQUFNLE9BQU8sT0FBTztBQUFBLFVBQ25CLEVBQUMsTUFBTSxXQUFXLElBQUksT0FBTTtBQUFBLFVBQzVCO0FBQUEsVUFDQTtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBRUEsWUFBTSxhQUFhLElBQUksV0FBWSxPQUFPLGFBQWEsZUFBZSxVQUFXO0FBQ2pGLGlCQUFXLElBQUssUUFBUSxDQUFFO0FBQzFCLGlCQUFXLElBQUssZ0JBQWdCLE9BQU8sVUFBVztBQUVsRCxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRVEsZ0JBQWlCLE9BQTZCO0FBQ3JELFVBQUksU0FBUztBQUNiLGVBQVMsTUFBTSxHQUFHLE1BQU0sTUFBTSxRQUFRLE9BQU87QUFFNUMsa0JBQVUsT0FBTyxhQUFhLE1BQU0sR0FBRyxDQUFDO0FBQUEsTUFDekM7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRUEsTUFBYSxnQkFBZ0IsTUFBYyxVQUFtQztBQUU3RSxZQUFNLGFBQWEsTUFBTSxLQUFLLGVBQWUsTUFBTSxRQUFRO0FBRzNELFlBQU0sYUFBYSxLQUFNLEtBQUssZ0JBQWdCLFVBQVUsQ0FBRTtBQUUxRCxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRVEsY0FBYyxLQUF5QjtBQUM5QyxZQUFNLFNBQVMsQ0FBQztBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ3BDLGVBQU8sS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFDOUI7QUFDQSxhQUFPLElBQUksV0FBVyxNQUFNO0FBQUEsSUFDN0I7QUFBQSxJQUVBLE1BQWEsaUJBQWlCLGdCQUE0QixVQUF3QztBQUNqRyxVQUFJO0FBR0gsY0FBTSxTQUFTLGVBQWUsTUFBTSxHQUFFLFVBQVU7QUFHaEQsY0FBTSxxQkFBcUIsZUFBZSxNQUFNLFVBQVU7QUFFMUQsY0FBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFFBQVE7QUFHekMsY0FBTSxpQkFBaUIsTUFBTSxPQUFPLE9BQU87QUFBQSxVQUMxQyxFQUFDLE1BQU0sV0FBVyxJQUFJLE9BQU07QUFBQSxVQUM1QjtBQUFBLFVBQ0E7QUFBQSxRQUNEO0FBR0EsY0FBTSxnQkFBZ0IsWUFBWSxPQUFPLGNBQWM7QUFDdkQsZUFBTztBQUFBLE1BQ1IsU0FBUyxHQUFHO0FBRVgsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBQUEsSUFFQSxNQUFhLGtCQUFrQixlQUF1QixVQUF3QztBQUM3RixVQUFJO0FBRUgsY0FBTSxnQkFBZ0IsS0FBSyxjQUFjLEtBQUssYUFBYSxDQUFDO0FBRTVELGVBQU8sTUFBTSxLQUFLLGlCQUFpQixlQUFlLFFBQVE7QUFBQSxNQW9CM0QsU0FBUyxHQUFHO0FBRVgsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBQUEsRUFFRDs7O0FDNUlPLE1BQU0sbUJBQU4sTUFBZ0Q7QUFBQSxJQUt0RCxZQUFhQSxhQUFvQixVQUFrQkMsYUFBb0I7QUFFdEUsV0FBSyxhQUFhRDtBQUNsQixXQUFLLFdBQVc7QUFDaEIsV0FBSyxhQUFhQztBQUFBLElBQ25CO0FBQUEsSUFFQSxNQUFjLFVBQVcsVUFBaUJDLE9BQXNDO0FBRy9FLFlBQU1DLGVBQWMsSUFBSSxZQUFZO0FBQ3BDLFlBQU0sU0FBYUEsYUFBWSxPQUFPLFFBQVE7QUFDOUMsWUFBTSxNQUFhLE1BQU0sT0FBTyxPQUFPO0FBQUE7QUFBQSxRQUMzQjtBQUFBO0FBQUEsUUFDQztBQUFBO0FBQUEsUUFDRTtBQUFBO0FBQUEsUUFDRTtBQUFBO0FBQUEsUUFDRixDQUFDLFdBQVc7QUFBQSxNQUMzQjtBQUdBLFVBQUc7QUFDRixjQUFNLGFBQWEsTUFBTSxPQUFPLE9BQU87QUFBQTtBQUFBLFVBQ3hCO0FBQUEsWUFDYixNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixNQUFBRDtBQUFBLFlBQ0EsWUFBWSxLQUFLO0FBQUEsVUFDbEI7QUFBQTtBQUFBLFVBQ1k7QUFBQTtBQUFBLFVBQ1k7QUFBQSxZQUN2QixNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVDtBQUFBO0FBQUEsVUFDZ0I7QUFBQTtBQUFBLFVBQ0YsQ0FBQyxXQUFXLFNBQVM7QUFBQSxRQUNwQztBQUVBLGVBQU87QUFBQSxNQUNSLFVBQUM7QUFBQSxNQUVEO0FBQUEsSUFDRDtBQUFBLElBRUEsTUFBYyxlQUFnQixNQUFjLFVBQXdDO0FBRW5GLFlBQU1BLFFBQU8sT0FBTyxnQkFBaUIsSUFBSSxXQUFXLEtBQUssUUFBUSxDQUFFO0FBRW5FLFlBQU0sTUFBTSxNQUFNLEtBQUssVUFBVyxVQUFVQSxLQUFLO0FBRWpELFlBQU1DLGVBQWMsSUFBSSxZQUFZO0FBQ3BDLFlBQU0scUJBQXFCQSxhQUFZLE9BQU8sSUFBSTtBQUNsRCxZQUFNLFNBQVMsT0FBTyxnQkFBZ0IsSUFBSSxXQUFXLEtBQUssVUFBVSxDQUFDO0FBR3JFLFlBQU0saUJBQWlCLElBQUk7QUFBQSxRQUMxQixNQUFNLE9BQU8sT0FBTztBQUFBO0FBQUEsVUFDTDtBQUFBLFlBQ2IsTUFBTTtBQUFBLFlBQ04sSUFBSTtBQUFBLFVBQ0w7QUFBQTtBQUFBLFVBQ1E7QUFBQTtBQUFBLFVBQ0M7QUFBQSxRQUNWO0FBQUEsTUFDRDtBQUVBLFlBQU0sYUFBYSxJQUFJLFdBQVksT0FBTyxhQUFhRCxNQUFLLGFBQWEsZUFBZSxVQUFXO0FBQ25HLGlCQUFXLElBQUssUUFBUSxDQUFFO0FBQzFCLGlCQUFXLElBQUtBLE9BQU0sT0FBTyxVQUFXO0FBQ3hDLGlCQUFXLElBQUssZ0JBQWdCLE9BQU8sYUFBYUEsTUFBSyxVQUFXO0FBRXBFLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFUSxnQkFBaUIsT0FBNkI7QUFDckQsVUFBSSxTQUFTO0FBQ2IsZUFBUyxNQUFNLEdBQUcsTUFBTSxNQUFNLFFBQVEsT0FBTztBQUU1QyxrQkFBVSxPQUFPLGFBQWEsTUFBTSxHQUFHLENBQUM7QUFBQSxNQUN6QztBQUNBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxNQUFhLGdCQUFnQixNQUFjLFVBQW1DO0FBRTdFLFlBQU0sYUFBYSxNQUFNLEtBQUssZUFBZSxNQUFNLFFBQVE7QUFHM0QsWUFBTSxhQUFhLEtBQU0sS0FBSyxnQkFBZ0IsVUFBVSxDQUFFO0FBRTFELGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFUSxjQUFjLEtBQXlCO0FBQzlDLFlBQU0sU0FBUyxDQUFDO0FBQ2hCLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDcEMsZUFBTyxLQUFLLElBQUksV0FBVyxDQUFDLENBQUM7QUFBQSxNQUM5QjtBQUNBLGFBQU8sSUFBSSxXQUFXLE1BQU07QUFBQSxJQUM3QjtBQUFBLElBRUEsTUFBYyxpQkFDYixnQkFDQSxVQUN1QjtBQUN2QixVQUFJO0FBRUgsWUFBSTtBQUNKLFlBQUk7QUFHSixpQkFBUztBQUNULHFCQUFhLFNBQVMsS0FBSztBQUMzQixjQUFNLFNBQVMsZUFBZSxNQUFNLFFBQVEsVUFBVTtBQUd0RCxpQkFBUztBQUNULHFCQUFhLFNBQVMsS0FBSztBQUMzQixjQUFNQSxRQUFPLGVBQWUsTUFBTSxRQUFRLFVBQVU7QUFHcEQsaUJBQVM7QUFDVCxxQkFBYTtBQUNiLGNBQU0scUJBQXFCLGVBQWUsTUFBTSxNQUFNO0FBRXRELGNBQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVQSxLQUFJO0FBRy9DLGNBQU0saUJBQWlCLE1BQU0sT0FBTyxPQUFPO0FBQUE7QUFBQSxVQUM1QjtBQUFBLFlBQ2IsTUFBTTtBQUFBLFlBQ04sSUFBSTtBQUFBLFVBQ0w7QUFBQTtBQUFBLFVBQ1E7QUFBQTtBQUFBLFVBQ0M7QUFBQSxRQUNWO0FBR0EsY0FBTUUsZUFBYyxJQUFJLFlBQVk7QUFDcEMsY0FBTSxnQkFBZ0JBLGFBQVksT0FBTyxjQUFjO0FBQ3ZELGVBQU87QUFBQSxNQUVSLFNBQVMsR0FBRztBQUVYLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUFBLElBRUEsTUFBYSxrQkFBbUIsZUFBdUIsVUFBeUM7QUFDL0YsVUFBSTtBQUNILGNBQU0sZ0JBQWdCLEtBQUssY0FBYyxLQUFLLGFBQWEsQ0FBQztBQUM1RCxlQUFPLE1BQU0sS0FBSyxpQkFBa0IsZUFBZSxRQUFTO0FBQUEsTUFDN0QsU0FBUyxHQUFHO0FBQ1gsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBQUEsRUFFRDs7O0FDcEtPLE1BQU0sb0JBQW9CO0FBQUEsSUFDaEMsTUFBTTtBQUFBLElBQ04sSUFBSSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDM0UsV0FBVztBQUFBLEVBQ1o7QUFFTyxNQUFNLHVCQUFOLE1BQTJCO0FBQUEsSUFFakMsTUFBYyxTQUFTLFVBQWtCO0FBQ3hDLFlBQU0sYUFBYSxJQUFJLFlBQVk7QUFDbkMsWUFBTSxnQkFBZ0IsV0FBVyxPQUFPLFFBQVE7QUFFaEQsWUFBTSxpQkFBaUIsTUFBTSxPQUFPLE9BQU8sT0FBTyxFQUFFLE1BQU0sVUFBVSxHQUFHLGFBQWE7QUFFcEYsWUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPO0FBQUEsUUFDL0I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLENBQUMsV0FBVyxTQUFTO0FBQUEsTUFDdEI7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS0EsTUFBYSxnQkFBZ0IsTUFBYyxVQUFtQztBQUM3RSxZQUFNLE1BQU0sTUFBTSxLQUFLLFNBQVMsUUFBUTtBQUV4QyxZQUFNLGFBQWEsSUFBSSxZQUFZO0FBQ25DLFlBQU0saUJBQWlCLFdBQVcsT0FBTyxJQUFJO0FBRzdDLFlBQU0saUJBQWlCLElBQUksV0FBVyxNQUFNLE9BQU8sT0FBTztBQUFBLFFBQ3pEO0FBQUEsUUFBbUI7QUFBQSxRQUFLO0FBQUEsTUFDekIsQ0FBQztBQUdELFlBQU0sYUFBYSxLQUFLLE9BQU8sYUFBYSxHQUFHLGNBQWMsQ0FBQztBQUU5RCxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRVEsY0FBYyxLQUF5QjtBQUM5QyxZQUFNLFNBQVMsQ0FBQztBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ3BDLGVBQU8sS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFDOUI7QUFDQSxhQUFPLElBQUksV0FBVyxNQUFNO0FBQUEsSUFDN0I7QUFBQSxJQUVBLE1BQWEsa0JBQWtCLGVBQXVCLFVBQXdDO0FBQzdGLFVBQUk7QUFFSCxjQUFNLGlCQUFpQixLQUFLLGNBQWMsS0FBSyxhQUFhLENBQUM7QUFFN0QsY0FBTSxNQUFNLE1BQU0sS0FBSyxTQUFTLFFBQVE7QUFHeEMsY0FBTSxpQkFBaUIsTUFBTSxPQUFPLE9BQU8sUUFBUSxtQkFBbUIsS0FBSyxjQUFjO0FBR3pGLGNBQU0sYUFBYSxJQUFJLFlBQVk7QUFDbkMsY0FBTSxnQkFBZ0IsV0FBVyxPQUFPLGNBQWM7QUFDdEQsZUFBTztBQUFBLE1BQ1IsU0FBUyxHQUFHO0FBQ1gsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBQUEsRUFFRDs7O0FDakVPLE1BQU0sdUJBQU4sTUFBTSxxQkFBbUI7QUFBQSxJQUkvQixPQUFjLGVBQTZCO0FBQzFDLGFBQU8sS0FBSztBQUFBLElBQ2I7QUFBQSxJQUVBLE9BQWMseUJBQTBCLE1BQWlDO0FBQ3hFLFlBQU0sU0FBUyxxQkFBb0Isd0JBQXdCLElBQUk7QUFDL0QsVUFBSyxVQUFVLE1BQU07QUFDcEIsZUFBTztBQUFBLE1BQ1I7QUFDQSxZQUFNLElBQUksTUFBTyxrREFBa0QsS0FBSyxPQUFPLEVBQUU7QUFBQSxJQUNsRjtBQUFBLElBRUEsT0FBYyx3QkFBeUIsTUFBd0M7QUFDOUUsVUFBSyxLQUFLLFdBQVcsT0FBTztBQUMzQixlQUFPLElBQUksYUFBYTtBQUFBLE1BQ3pCO0FBR0EsVUFBSyxLQUFLLFdBQVcsT0FBTztBQUMzQixlQUFPLEtBQUs7QUFBQSxNQUNiO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUVBLE9BQWMsNEJBQTZCLGFBQTJDO0FBQ3JGLFlBQU0sU0FBUyxxQkFBb0IsMkJBQTRCLFdBQVk7QUFFM0UsVUFBSSxVQUFVLE1BQUs7QUFDbEIsZUFBTztBQUFBLE1BQ1I7QUFDQSxZQUFNLElBQUksTUFBTyx5REFBeUQsWUFBWSxPQUFPLEVBQUU7QUFBQSxJQUNoRztBQUFBLElBRUEsT0FBYywyQkFBNEIsYUFBa0Q7QUFVM0YsVUFBSyxZQUFZLFdBQVcsR0FBRztBQUM5QixlQUFPLElBQUkscUJBQXFCO0FBQUEsTUFDakM7QUFFQSxVQUFLLFlBQVksV0FBVyxHQUFHO0FBQzlCLGVBQU8sSUFBSSxhQUFhO0FBQUEsTUFDekI7QUFFQSxVQUFLLFlBQVksV0FBVyxHQUFHO0FBQzlCLGVBQU8sS0FBSztBQUFBLE1BQ2I7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBLEVBRUQ7QUE3REMsRUFGWSxxQkFFRSxzQkFBc0IsSUFBSSxpQkFBa0IsSUFBSSxJQUFJLElBQU87QUFGbkUsTUFBTSxzQkFBTjs7O0FDTEEsTUFBTUMsWUFBTixNQUFlO0FBQUEsSUFNckIsWUFBYSxTQUFnQixNQUFhLGFBQW9CO0FBSjlELFdBQU8sVUFBVTtBQUtoQixXQUFLLFVBQVU7QUFDZixXQUFLLE9BQU87QUFDWixXQUFLLGNBQWM7QUFBQSxJQUNwQjtBQUFBLEVBQ0Q7QUFFTyxNQUFNLGtCQUFOLE1BQU0sZ0JBQWM7QUFBQSxJQUkxQixhQUFvQixRQUFTLE1BQWMsTUFBYSxNQUFpQztBQUN4RixZQUFNQyxVQUFTLG9CQUFvQixhQUFhO0FBQ2hELFlBQU0sZ0JBQWdCLE1BQU1BLFFBQU8sZ0JBQWdCLE1BQU0sSUFBSTtBQUM3RCxhQUFPLElBQUlELFVBQVUsZ0JBQWUsaUJBQWlCLE1BQU0sYUFBYTtBQUFBLElBQ3pFO0FBQUEsSUFFQSxhQUFvQixRQUFTLE1BQWdCLE1BQW9DO0FBQ2hGLFVBQUssS0FBSyxlQUFlLElBQUk7QUFDNUIsZUFBTztBQUFBLE1BQ1I7QUFDQSxZQUFNQyxVQUFTLG9CQUFvQix5QkFBMEIsSUFBSztBQUNsRSxhQUFPLE1BQU1BLFFBQU8sa0JBQW1CLEtBQUssYUFBYSxJQUFLO0FBQUEsSUFDL0Q7QUFBQSxFQUNEO0FBZkMsRUFGWSxnQkFFRSxrQkFBa0I7QUFGMUIsTUFBTSxpQkFBTjtBQW1CQSxNQUFNLG1CQUFOLE1BQXVCO0FBQUEsSUFFN0IsT0FBYyxPQUFRLE1BQXlCO0FBRTlDLGFBQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxDQUFDO0FBQUEsSUFDcEM7QUFBQSxJQUVBLE9BQWMsVUFBVyxNQUF5QjtBQUNqRCxVQUFJO0FBQ0gsYUFBSyxNQUFPLElBQUs7QUFDakIsZUFBTztBQUFBLE1BQ1IsU0FBVSxPQUFRO0FBQ2pCLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUFBLElBRUEsT0FBYyxPQUFRLGFBQWdDO0FBRXJELFVBQUssZ0JBQWdCLElBQUk7QUFDeEIsZUFBTyxJQUFJRCxVQUFVLGVBQWUsaUJBQWlCLElBQUksRUFBRztBQUFBLE1BQzdEO0FBQ0EsYUFBTyxLQUFLLE1BQU8sV0FBWTtBQUFBLElBQ2hDO0FBQUEsRUFDRDs7O0FDcERPLE1BQU0saUJBQU4sTUFBcUI7QUFBQSxJQUUzQixNQUFhLFFBQVMsU0FBZ0IsVUFBNEM7QUFHakYsY0FBUSxLQUFNLCtCQUFnQztBQUM5QyxZQUFNLFFBQVEsb0JBQW9CLGFBQWE7QUFDL0MsWUFBTSxTQUFTLE1BQU0sTUFBTSxrQkFBbUIsU0FBUyxRQUFTO0FBQ2hFLFVBQUssVUFBVSxNQUFNO0FBQ3BCLGVBQU87QUFBQSxNQUNSO0FBR0EsY0FBUSxLQUFNLDBDQUEyQztBQUN6RCxZQUFNLEtBQUssSUFBSSwyQkFBNEIsT0FBUTtBQUNuRCxVQUFLLEdBQUcsZUFBZSxNQUFNO0FBQzVCLGNBQU0sS0FBSyxvQkFBb0IsMkJBQTJCLEdBQUcsV0FBVztBQUN4RSxZQUFJLE1BQU0sTUFBSztBQUNkLGdCQUFNRSxVQUFTLE1BQU0sR0FBRyxrQkFBbUIsR0FBRyxZQUFZLGtCQUFrQixRQUFTO0FBQ3JGLGNBQUtBLFdBQVUsTUFBTTtBQUNwQixtQkFBT0E7QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFHQSxlQUFTLE1BQU0sSUFBSSxPQUFPLEdBQUcsT0FBTztBQUNuQyxnQkFBUSxLQUFNLGdEQUFnRCxPQUFPLEdBQUk7QUFDekUsY0FBTSxjQUE0QixFQUFFLFNBQVMsS0FBSyxrQkFBa0IsU0FBUyxNQUFNLElBQUksbUJBQW1CLE1BQU07QUFDaEgsY0FBTSxLQUFLLG9CQUFvQiwyQkFBMkIsV0FBVztBQUNyRSxjQUFNQSxVQUFTLE9BQU0seUJBQUksa0JBQW1CLFlBQVksa0JBQWtCO0FBQzFFLFlBQUtBLFdBQVUsTUFBTTtBQUNwQixpQkFBT0E7QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUlBLGNBQVEsS0FBTSxzQ0FBdUM7QUFDckQsVUFBRztBQUNGLGNBQU0sV0FBVyxpQkFBaUIsT0FBUSxPQUFRO0FBQ2xELGdCQUFRLE1BQU0sUUFBUTtBQUN0QixjQUFNLE9BQU8sb0JBQW9CLHdCQUF5QixRQUFTO0FBQ25FLGNBQU0sV0FBVyxPQUFNLDZCQUFNLGtCQUFtQixTQUFTLGFBQWE7QUFDdEUsWUFBSyxZQUFZLE1BQU07QUFDdEIsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRCxTQUFTLEdBQUU7QUFDVixnQkFBUSxLQUFLLENBQUM7QUFBQSxNQUNmO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBS0EsU0FBTyxJQUFJLElBQUksZUFBZTsiLAogICJuYW1lcyI6IFsidmVjdG9yU2l6ZSIsICJpdGVyYXRpb25zIiwgInNhbHQiLCAidXRmOEVuY29kZXIiLCAidXRmOERlY29kZXIiLCAiRmlsZURhdGEiLCAiY3J5cHRvIiwgInJlc3VsdCJdCn0K
