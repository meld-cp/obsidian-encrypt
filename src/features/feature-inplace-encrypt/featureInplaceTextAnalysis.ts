import { Decryptable } from "./Decryptable.ts";
import { _HINT, _PREFIXES, _PREFIX_A, _PREFIX_A_VISIBLE, _PREFIX_B, _PREFIX_B_VISIBLE, _PREFIX_OBSOLETE, _PREFIX_OBSOLETE_VISIBLE, _SUFFIXES } from "./FeatureInplaceConstants.ts";

export class FeatureInplaceTextAnalysis{
	processedText:string;
	isEmpty: boolean;
	
	prefix: string;
	suffix: string;

	hasObsoleteEncryptedPrefix: boolean;
	hasEncryptedPrefix: boolean;
	hasEncryptedSuffix: boolean;
	canDecrypt: boolean;
	canEncrypt: boolean;
	containsEncryptedMarkers: boolean;
	decryptable? : Decryptable;

	constructor(text: string){
		this.process(text);
	}

	private process( text: string ) : void{
		
		this.processedText = text;

		this.isEmpty = text.length === 0;

		this.prefix = _PREFIXES.find( (prefix) => text.startsWith(prefix) ) ?? '';
		this.suffix = _SUFFIXES.find( (suffix) => text.endsWith(suffix) ) ?? '';
		
		this.hasEncryptedPrefix = this.prefix.length > 0;
		this.hasEncryptedSuffix = this.suffix.length > 0;

		this.hasObsoleteEncryptedPrefix = this.prefix === _PREFIX_OBSOLETE || this.prefix === _PREFIX_OBSOLETE_VISIBLE;

		this.containsEncryptedMarkers = [..._PREFIXES, ..._SUFFIXES].some( (marker) => text.includes(marker ));

		this.canDecrypt = this.hasEncryptedPrefix && this.hasEncryptedSuffix;
		this.canEncrypt = !this.hasEncryptedPrefix && !this.containsEncryptedMarkers;
		
		if (this.canDecrypt){
			const decryptable = this.parseDecryptableContent(text);

			if ( decryptable != null ){
				this.decryptable = decryptable;
			}else{
				this.canDecrypt = false;
			}
		}
	}

	private parseDecryptableContent(text: string) : Decryptable | null {
		const result = new Decryptable();

		if (
			!this.hasEncryptedPrefix
			|| !this.hasEncryptedSuffix
		){
			return null; // invalid format
		}
		
		if ( this.hasObsoleteEncryptedPrefix ){
			result.version = 0;
		}else if ( this.prefix == _PREFIX_B || this.prefix == _PREFIX_B_VISIBLE ){
			result.version = 2;
		}else if ( this.prefix == _PREFIX_A || this.prefix == _PREFIX_A_VISIBLE ){
			result.version = 1;
		}

		// remove markers from start and end	
		const content = text.substring(this.prefix.length, text.length - this.suffix.length);

		if ( [..._PREFIXES, ..._SUFFIXES].some( (marker) => content.includes( marker )) ){
			// content, itself has markers
			return null;
		}

		// check if there is a hint
		if (content.substring(0,_HINT.length) == _HINT){
			const endHintMarker = content.indexOf(_HINT,_HINT.length);
			if (endHintMarker<0){
				return null; // invalid format
			}
			result.hint = content.substring(_HINT.length,endHintMarker)
			result.base64CipherText = content.substring(endHintMarker+_HINT.length);
		}else{
			result.base64CipherText = content;
		}
		result.showInReadingView = !this.prefix.includes("%%");
		return result;

	}
}