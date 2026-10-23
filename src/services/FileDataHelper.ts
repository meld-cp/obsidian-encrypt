import { CryptoHelperFactory } from "./CryptoHelperFactory.ts";

import { validateEnvelopeV3 } from './CryptoHelperV3.ts';
import type { CryptoEnvelopeV3 } from './CryptoHelperV3.ts';

const blankFile = Symbol('blank-file');

export class FileData {
	
	public version = '1.0';
	public hint: string;
	public encodedData:string;
	public kdf?: CryptoEnvelopeV3['kdf'];
	public cipher?: CryptoEnvelopeV3['cipher'];
	public [blankFile]?: boolean;

	constructor( version:string, hint:string, encodedData:string ){
		this.version = version;
		this.hint = hint;
		this.encodedData = encodedData;
	}
}

export class FileDataHelper{

	public static DEFAULT_VERSION = '3.0';

	public static async encrypt( pass: string, hint:string, text:string ) : Promise<FileData>{
		const crypto = CryptoHelperFactory.BuildDefault();
		const envelope = await crypto.encryptEnvelope(text, pass);
		return Object.assign(new FileData(envelope.version, hint, envelope.encodedData), { kdf: envelope.kdf, cipher: envelope.cipher });
	}

	public static async decrypt( data: FileData, pass:string ) : Promise<string|null>{
		if (data[blankFile]) return '';
		if (data.version === '3.0') {
			return await CryptoHelperFactory.BuildDefault().decryptEnvelope(data, pass);
		}
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
			console.error( error );
			return false;
		}
	}

	public static decode( encodedText:string ) : FileData {
		//console.debug('JsonFileEncoding.decode',{encodedText});
		if ( encodedText === '' ){
			return Object.assign(new FileData(FileDataHelper.DEFAULT_VERSION, '', ''), { [blankFile]: true });
		}
		const parsed: unknown = JSON.parse( encodedText );
		if ( parsed === null || typeof parsed !== 'object' || Array.isArray(parsed) ) {
			throw new Error('Invalid FileData JSON');
		}
		const data = parsed as Record<string, unknown>;
		if (
			typeof data.version !== 'string'
			|| typeof data.hint !== 'string'
			|| typeof data.encodedData !== 'string'
		) {
			throw new Error('Invalid FileData JSON');
		}
		if (data.version === '3.0') {
			const envelope = validateEnvelopeV3(data);
			return Object.assign(new FileData(envelope.version, data.hint, envelope.encodedData), { kdf: envelope.kdf, cipher: envelope.cipher });
		}
		return new FileData( data.version, data.hint, data.encodedData );
	}
}
