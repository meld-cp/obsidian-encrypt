import { FileData } from "src/features/feature-whole-note-encrypt/EncryptedFileContentView";
import { Decryptable } from "src/features/feature-inplace-encrypt/Decryptable";
import { CryptoHelper } from "./CryptoHelper";
import { ICryptoHelper } from "./ICryptoHelper";
import { CryptoHelper2304 } from "./CryptoHelper2304";
import { CryptoHelperObsolete } from "./CryptoHelperObsolete";

export class CryptoHelperFactory{

	public static BuildDefault(): ICryptoHelper{
		return new CryptoHelper2304( 16, 16, 210000 );
	}

	public static BuildFromFileData( data: FileData ) : ICryptoHelper {
		if ( data.version == '1.0' ){
			return new CryptoHelper();
		}

		// note				v2.0	CryptoHelper2304
		if ( data.version == '2.0' ){
			return new CryptoHelper2304( 16, 16, 210000  );
		}

		throw new Error( `Unable to determine ICryptoHelper for File ver ${data.version}`);
	}

	public static BuildFromDecryptable( decryptable: Decryptable ) : ICryptoHelper {
		// Versions
		// inplace original	_PREFIX_OBSOLETE = '%%🔐 '  CryptoHelperObsolete
		// inplace alpha	_PREFIX_A = '%%🔐α '		CryptoHelper
		// 					_PREFIX_A_VISIBLE = '🔐α '	CryptoHelper

		if ( decryptable.version == 0 ){
			return new CryptoHelperObsolete();
		}

		if ( decryptable.version == 1 ){
			return new CryptoHelper();
		}

		if ( decryptable.version == 2 ){
			return new CryptoHelper2304( 16, 16, 210000 );
		}

		throw new Error( `Unable to determine ICryptoHelper for Decryptable ver ${decryptable.version}`);
	}

}