import { FileData } from "./FileDataHelper.ts";
import { Decryptable } from "../features/feature-inplace-encrypt/Decryptable.ts";
import { CryptoHelper } from "./CryptoHelper.ts";
import { ICryptoHelper } from "./ICryptoHelper.ts";
import { CryptoHelper2304 } from "./CryptoHelper2304.ts";
import { CryptoHelperObsolete } from "./CryptoHelperObsolete.ts";

export class CryptoHelperFactory{

	public static cryptoHelper2304_v2 = new CryptoHelper2304( 16, 16, 210000 );
	public static cryptoHelper2304_v3 = new CryptoHelper2304( 12, 16, 600000 );

	public static BuildDefault(): ICryptoHelper{
		return this.cryptoHelper2304_v3;
	}

	public static BuildFromFileDataOrThrow( data: FileData ) : ICryptoHelper {
		const result = CryptoHelperFactory.BuildFromFileDataOrNull(data);
		if ( result != null ){
			return result;
		}
		throw new Error( `Unable to determine ICryptoHelper for File ver ${data.version}`);
	}

	public static BuildFromFileDataOrNull( data: FileData ) : ICryptoHelper | null {
		if ( data.version == '1.0' ){
			return new CryptoHelper();
		}

		// note				v2.0	CryptoHelper2304
		if ( data.version == '2.0' ){
			return this.cryptoHelper2304_v2;
		}

		// note				v3.0	CryptoHelper2304
		if ( data.version == '3.0' ){
			return this.cryptoHelper2304_v3;
		}

		return null;
	}

	public static BuildFromDecryptableOrThrow( decryptable: Decryptable ) : ICryptoHelper {
		const result = CryptoHelperFactory.BuildFromDecryptableOrNull( decryptable );

		if (result != null){
			return result;
		}
		throw new Error( `Unable to determine ICryptoHelper for Decryptable ver ${decryptable.version}`);
	}

	public static BuildFromDecryptableOrNull( decryptable: Decryptable ) : ICryptoHelper | null {
		// Versions
		// inplace original	_PREFIX_OBSOLETE = '%%🔐 '  CryptoHelperObsolete
		
		// inplace alpha	_PREFIX_A = '%%🔐α '		CryptoHelper
		// 					_PREFIX_A_VISIBLE = '🔐α '	CryptoHelper

		// inplace beta 	_PREFIX_B = '%%🔐β '		CryptoHelper2304( 16, 16, 210000 )
		//					_PREFIX_B_VISIBLE = '🔐β '	CryptoHelper2304( 16, 16, 210000 )
		
		// inplace gamma 	_PREFIX_C = '%%🔐γ '		CryptoHelper2304( 12, 16, 600000 )
		//				_PREFIX_C_VISIBLE = '🔐γ '	CryptoHelper2304( 12, 16, 600000 )

		if ( decryptable.version == 0 ){
			return new CryptoHelperObsolete();
		}

		if ( decryptable.version == 1 ){
			return new CryptoHelper();
		}

		if ( decryptable.version == 2 ){
			return this.cryptoHelper2304_v2;
		}

		if ( decryptable.version == 3 ){
			return this.cryptoHelper2304_v3;
		}

		return null;
	}

}
