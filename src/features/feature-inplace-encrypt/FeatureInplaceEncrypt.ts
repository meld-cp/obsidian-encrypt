import { Editor, EditorPosition, Notice, Setting } from "obsidian";
import { CryptoHelper } from "../../services/CryptoHelper";
import { CryptoHelperObsolete } from "../../services/CryptoHelperObsolete";
import DecryptModal from "./DecryptModal";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";
import { IFeatureInplaceEncryptSettings } from "./IFeatureInplaceEncryptSettings";
import PasswordModal from "./PasswordModal";
import { UiHelper } from "../../services/UiHelper";
import { SessionPasswordService } from "src/services/SessionPasswordService";

const _PREFIX_A = '%%🔐α ';
const _PREFIX_A_VISIBLE = '🔐α ';
const _PREFIX_OBSOLETE = '%%🔐 ';

// Should be listed by evaluation priority
const _PREFIXES = [
	_PREFIX_A,
	_PREFIX_A_VISIBLE,
	_PREFIX_OBSOLETE,
];

const _SUFFIX_WITH_COMMENT = ' 🔐%%';
const _SUFFIX_NO_COMMENT = ' 🔐';

// Should be listed by evaluation priority
const _SUFFIXES = [
	_SUFFIX_WITH_COMMENT,
	_SUFFIX_NO_COMMENT
]

const _HINT = '💡';

export default class FeatureInplaceEncrypt implements IMeldEncryptPluginFeature{
	plugin:MeldEncrypt;
	pluginSettings: IMeldEncryptPluginSettings;
	featureSettings:IFeatureInplaceEncryptSettings;

	async onload(plugin:MeldEncrypt, settings:IMeldEncryptPluginSettings) {
		this.plugin = plugin;
		this.pluginSettings = settings;
		this.featureSettings = settings.featureInplaceEncrypt;

		plugin.addCommand({
			id: 'meld-encrypt',
			name: 'Encrypt/Decrypt',
			icon: 'lock',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand( checking, editor, false )
		});

		plugin.addCommand({
			id: 'meld-encrypt-in-place',
			name: 'Encrypt/Decrypt In-place',
			icon: 'lock',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand( checking, editor, true )
		});
		
	}

	onunload(){

	}

	public buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	): void {
		new Setting(containerEl)
			.setHeading()
			.setName('In-place Encryption Settings')
		;

		// Selection encrypt feature settings below
		new Setting(containerEl)
			.setName('Expand selection to whole line?')
			.setDesc('Partial selections will get expanded to the whole line.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.featureSettings.expandToWholeLines)
					.onChange( async value =>{
						this.featureSettings.expandToWholeLines = value;
						await saveSettingCallback();
					})
			})
		;
	}

	

	private processEncryptDecryptCommand(
		checking: boolean,
		editor: Editor,
		decryptInPlace: boolean
	): boolean {
		if ( checking && UiHelper.isSettingsModalOpen() ){
			// Settings is open, ensures this command can show up in other
			// plugins which list commands e.g. customizable-sidebar
			return true;
		}

		let startPos = editor.getCursor('from');
		let endPos = editor.getCursor('to');

		if (this.featureSettings.expandToWholeLines){
			const startLine = startPos.line;
			startPos = { line: startLine, ch: 0 }; // want the start of the first line

			const endLine = endPos.line;
			const endLineText = editor.getLine(endLine);
			endPos = { line: endLine, ch: endLineText.length }; // want the end of last line
		}else{
			if ( !editor.somethingSelected() ){
				//console.debug('nothing selected, assume user wants to decrypt, expand to start and end markers');
				// nothing selected, assume user wants to decrypt, expand to start and end markers
				const foundStartPos = this.getClosestPrefixCursorPos( editor );
				if ( foundStartPos == null ){
					return false;
				}
				startPos = foundStartPos;

				const foundEndPos = this.getClosestSuffixCursorPos(editor);
				if ( foundEndPos == null ){
					return false;
				}
				endPos = foundEndPos;
			}
		}

		const selectionText = editor.getRange(startPos, endPos);

		return this.processSelection(
			checking,
			editor,
			selectionText,
			startPos,
			endPos,
			decryptInPlace
		);
	}

	private getClosestPrefixCursorPos(editor: Editor): EditorPosition | null{
		
		const maxLengthPrefix = _PREFIXES.reduce((prev,cur, i) => {
			if (i== 0) return cur;
			if ( cur.length > prev.length ) return cur;
			return prev;
		} );
		const initOffset = editor.posToOffset( editor.getCursor("from") ) + maxLengthPrefix.length;

		for (let offset = initOffset; offset >= 0; offset--) {
			const offsetPos = editor.offsetToPos(offset);
			for (const prefix of _PREFIXES) {
				const prefixStartOffset = offset - prefix.length;
				const prefixStartPos = editor.offsetToPos(prefixStartOffset);
			
				const testText = editor.getRange( prefixStartPos, offsetPos );
				//console.debug({testText});
				if (testText == prefix){
					return editor.offsetToPos(prefixStartOffset);
				}
			}
		}

		return null;

	}

	private getClosestSuffixCursorPos(editor: Editor): EditorPosition | null{
		const maxLengthPrefix = _PREFIXES.reduce((prev,cur, i) => {
			if (i== 0) return cur;
			if ( cur.length > prev.length ) return cur;
			return prev;
		} );
		
		const initOffset = editor.posToOffset( editor.getCursor("from") ) - maxLengthPrefix.length + 1;
		const lastLineNum = editor.lastLine();

		const maxOffset = editor.posToOffset( {line:lastLineNum, ch:editor.getLine(lastLineNum).length} );

		for (let offset = initOffset; offset <= maxOffset; offset++) {
			const offsetPos = editor.offsetToPos(offset);
			for (const suffix of _SUFFIXES) {	
				const textEndOffset = offset + suffix.length;
				const textEndPos = editor.offsetToPos(textEndOffset);
				
				const testText = editor.getRange( offsetPos, textEndPos );
				
				if (testText == suffix){
					return textEndPos;
				}
			}
		}
		
		return null;
	}

	private processSelection(
		checking: boolean,
		editor: Editor,
		selectionText: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
		decryptInPlace: boolean,
		allowEncryption = true
	) : boolean {
		const selectionAnalysis = new SelectionAnalysis( selectionText );
		//console.debug(selectionAnalysis);

		if (selectionAnalysis.isEmpty) {
			if (!checking){
				new Notice('Nothing to Encrypt.');
			}
			return false;
		}

		if (!selectionAnalysis.canDecrypt && !selectionAnalysis.canEncrypt) {
			if (!checking){
				new Notice('Unable to Encrypt or Decrypt that.');
			}
			return false;
		}

		if (selectionAnalysis.canEncrypt && !allowEncryption){
			return false;
		}

		const activeFile = this.plugin.app.workspace.getActiveFile();
		if (activeFile == null){
			return false;
		}

		if (checking) {
			return true;
		}

		
		// Fetch password from user

		// determine default password and hint
		let defaultPassword = '';
		let defaultHint = selectionAnalysis.decryptable?.hint;
		if ( this.pluginSettings.rememberPassword ){
			const bestGuessPasswordAndHint = SessionPasswordService.get( activeFile );
			//console.debug({bestGuessPasswordAndHint});

			defaultPassword = bestGuessPasswordAndHint.password;
			defaultHint = defaultHint ?? bestGuessPasswordAndHint.hint;
		}

		const confirmPassword = selectionAnalysis.canEncrypt && this.pluginSettings.confirmPassword;

		const pwModal = new PasswordModal(
			this.plugin.app,
			selectionAnalysis.canEncrypt,
			confirmPassword,
			defaultPassword,
			defaultHint
		);

		pwModal.onClose = async () => {
			if ( !pwModal.resultConfirmed ){
				return;
			}
			const pw = pwModal.resultPassword ?? ''
			const hint = pwModal.resultHint ?? '';

			if (selectionAnalysis.canEncrypt) {
				const encryptable = new Encryptable();
				encryptable.text = selectionText;
				encryptable.hint = hint;

				this.encryptSelection(
					editor,
					encryptable,
					pw,
					finalSelectionStart,
					finalSelectionEnd
				);

				// remember password
				SessionPasswordService.put(	{ password:pw, hint: hint }, activeFile );

			} else {

				let decryptSuccess : boolean;
				if (selectionAnalysis.decryptable?.version == 1){
					decryptSuccess = await this.decryptSelection_a(
						editor,
						selectionAnalysis.decryptable,
						pw,
						finalSelectionStart,
						finalSelectionEnd,
						decryptInPlace
					);
				}else{
					decryptSuccess = await this.decryptSelectionObsolete(
						editor,
						selectionAnalysis,
						pw,
						finalSelectionStart,
						finalSelectionEnd,
						decryptInPlace
					);
				}

				// remember password?
				if ( decryptSuccess ) {
					SessionPasswordService.put(	{ password:pw, hint: hint }, activeFile );
				}
				
			}
		}
		pwModal.open();

		return true;
	}

	private async encryptSelection(
		editor: Editor,
		encryptable: Encryptable,
		password: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
	) {
		//encrypt
		const crypto = new CryptoHelper();
		const encodedText = this.encodeEncryption(
			await crypto.encryptToBase64(encryptable.text, password),
			encryptable.hint
		);
		editor.setSelection(finalSelectionStart, finalSelectionEnd);
		editor.replaceSelection(encodedText);
	}

	private async decryptSelection_a(
		editor: Editor,
		decryptable: Decryptable,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) : Promise<boolean> {
		// decrypt

		const crypto = new CryptoHelper();
		const decryptedText = await crypto.decryptFromBase64(decryptable.base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
			return false;
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText );
				decryptModal.onClose = () => {
					editor.focus();
					if (decryptModal.decryptInPlace) {
						editor.setSelection(selectionStart, selectionEnd);
						editor.replaceSelection(decryptedText);
					}
				}
				decryptModal.open();
			}
		}
		return true;
	}

	private async decryptSelectionObsolete(
		editor: Editor,
		selectionAnalysis: SelectionAnalysis,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) :Promise<boolean> {
		// decrypt
		//console.debug(selectionAnalysis);
		const base64CipherText = selectionAnalysis.decryptable.base64CipherText;
		const crypto = new CryptoHelperObsolete();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
			return false;
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText );
				decryptModal.onClose = () => {
					editor.focus();
					if (decryptModal.decryptInPlace) {
						editor.setSelection(selectionStart, selectionEnd);
						editor.replaceSelection(decryptedText);
					}
				}
				decryptModal.open();
			}
		}
		return true;
	}


	private encodeEncryption( encryptedText: string, hint: string ): string {
		if (
			!_PREFIXES.some( (prefix) => encryptedText.contains(prefix) )
			&& !_SUFFIXES.some( (suffix) => encryptedText.contains(suffix) )
		) {
			if (hint.length > 0){
				return _PREFIX_A.concat(_HINT, hint, _HINT, encryptedText, _SUFFIX_WITH_COMMENT);
			}
			return _PREFIX_A.concat(encryptedText, _SUFFIX_WITH_COMMENT);
		}
		return encryptedText;
	}
}

class SelectionAnalysis{
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
	decryptable : Decryptable;

	constructor(text: string){
		this.process(text);
	}

	private process( text: string ) : void{
		//console.debug('SelectionAnalysis.process', {text});
		
		this.processedText = text;

		this.isEmpty = text.length === 0;

		this.prefix = _PREFIXES.find( (prefix) => text.startsWith(prefix) ) ?? '';
		this.suffix = _SUFFIXES.find( (suffix) => text.endsWith(suffix) ) ?? '';
		
		//console.debug( {prefix:this.prefix, suffix:this.suffix} );
		
		this.hasEncryptedPrefix = this.prefix.length > 0;
		this.hasEncryptedSuffix = this.suffix.length > 0;

		this.hasObsoleteEncryptedPrefix = this.prefix === _PREFIX_OBSOLETE;

		this.containsEncryptedMarkers = [..._PREFIXES, ..._SUFFIXES].some( (marker) => text.contains(marker ));

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
		
		result.version = this.hasObsoleteEncryptedPrefix ? 0 : 1;
		
		// remove markers from start and end	
		const content = text.substring(this.prefix.length, text.length - this.suffix.length);
		//console.debug({content});

		if ( [..._PREFIXES, ..._SUFFIXES].some( (marker) => content.contains( marker )) ){
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
		
		return result;

	}
}

class Encryptable{
	text:string;
	hint:string;
}

class Decryptable{
	version: number;
	base64CipherText:string;
	hint:string;
}