import { Decryptable } from "src/features/feature-inplace-encrypt/Decryptable";
import { FeatureInplaceTextAnalysis } from "src/features/feature-inplace-encrypt/featureInplaceTextAnalysis";
import { CryptoHelperFactory } from "src/services/CryptoHelperFactory";

export class OfflineDecrypt {

	public async decrypt( content:string, password: string ) : Promise<string | null> {

		// Trying the default decryption
		console.debug( 'Trying the default decryption' );
		const chDef = CryptoHelperFactory.BuildDefault();
		const result = await chDef.decryptFromBase64( content, password );
		if ( result != null ){
			return result;
		}

		// Trying marked inplace feature decryption
		console.debug( 'Trying marked inplace feature decryption' );
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
			console.debug( 'Trying non-marked inplace feature decryption', 'ver', ver );
			const decryptable : Decryptable = {version: ver, base64CipherText: content, hint: ''};
			const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable)
			const result = await ch?.decryptFromBase64( decryptable.base64CipherText, password );
			if ( result != null ){
				return result;
			}
		}


		//TODO: handle whole note json
		// try to decode json as FileData
		//const filedata = FileSa
		//ch = CryptoHelperFactory.BuildFromFileData( fileData );

		//TODO: handle whole note encoded

		return null;
	}
}
declare global {
    interface Window { $: OfflineDecrypt; }
}

window.$ = new OfflineDecrypt();
