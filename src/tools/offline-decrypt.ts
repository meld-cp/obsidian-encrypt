import { Decryptable } from "src/features/feature-inplace-encrypt/Decryptable";
import { FeatureInplaceTextAnalysis } from "src/features/feature-inplace-encrypt/featureInplaceTextAnalysis";
import { CryptoHelperFactory } from "src/services/CryptoHelperFactory";
import { JsonFileEncoding } from "src/services/FileDataHelper";

export class OfflineDecrypt {

	public async decrypt( content:string, password: string ) : Promise<string | null> {

		// Trying the default decryption
		console.info( 'Trying the default decryption' );
		const chDef = CryptoHelperFactory.BuildDefault();
		const result = await chDef.decryptFromBase64( content, password );
		if ( result != null ){
			return result;
		}

		// Trying marked inplace feature decryption
		console.info( 'Trying marked inplace feature decryption' );
		const ta = new FeatureInplaceTextAnalysis( content );
		if ( ta.decryptable != null ){
			const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(ta.decryptable);
			if (ch != null){
				const result = await ch.decryptFromBase64( ta.decryptable.base64CipherText, password );
				if ( result != null ){
					return result;
				}
			}
		}

		// Trying non-marked inplace feature decryption
		for (let ver = 10; ver >= 0; ver--) {
			console.info( 'Trying non-marked inplace feature decryption', 'ver', ver );
			const decryptable : Decryptable = { version: ver, base64CipherText: content, hint: '', showInReadingView: false };
			const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable)
			const result = await ch?.decryptFromBase64( decryptable.base64CipherText, password );
			if ( result != null ){
				return result;
			}
		}


		// Trying whole note feature decryption
		console.info( 'Trying whole note feature decryption' );
		try{
			const fileData = JsonFileEncoding.decode( content );
			console.debug(fileData);
			const chFd = CryptoHelperFactory.BuildFromFileDataOrNull( fileData );
			const resultFd = await chFd?.decryptFromBase64( fileData.encodedData, password );
			if ( resultFd != null ){
				return resultFd;
			}
		} catch (e){
			console.info(e);
		}

		return null;
	}
}
declare global {
    interface Window { $: OfflineDecrypt; }
}

window.$ = new OfflineDecrypt();
