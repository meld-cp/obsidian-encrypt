import { CryptoHelperFactory } from "./CryptoHelperFactory.ts";

export class FileData {
	
	public version = '1.0';
	public hint: string;
	public encodedData:string;

	constructor( version:string, hint:string, encodedData:string ){
		this.version = version;
		this.hint = hint;
		this.encodedData = encodedData;
	}
}

export class FileDataHelper{

	public static DEFAULT_VERSION = '2.0';

	public static async encrypt( pass: string, hint:string, text:string ) : Promise<FileData>{
		const crypto = CryptoHelperFactory.BuildDefault();
		const encryptedData = await crypto.encryptToBase64(text, pass);
		return new FileData( FileDataHelper.DEFAULT_VERSION, hint, encryptedData);
	}

	public static async decrypt( data: FileData, pass:string ) : Promise<string|null>{
		if ( data.encodedData == '' ){
			return '';
		}
		const crypto = CryptoHelperFactory.BuildFromFileDataOrThrow( data );
		return await crypto.decryptFromBase64( data.encodedData, pass );
	}
}

export class JsonFileEncoding {

	public static encode( data: FileData ) : string{
		//console.debug( 'JsonFileEncoding.encode', {data} );
		return JSON.stringify(data, null, 2);
	}

	public static isEncoded( text: string ) : boolean {
		try {
			JSON.parse( text );
			return true;
		} catch ( error ) {
			return false;
		}
	}

	public static decode( encodedText:string ) : FileData {
		//console.debug('JsonFileEncoding.decode',{encodedText});
		if ( encodedText === '' ){
			return new FileData( FileDataHelper.DEFAULT_VERSION, '', '' );
		}
		return JSON.parse( encodedText ) as FileData;
	}
}