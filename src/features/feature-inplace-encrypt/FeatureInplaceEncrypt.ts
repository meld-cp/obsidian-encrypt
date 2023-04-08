import { Editor, EditorPosition, Notice, Setting, MarkdownPostProcessorContext } from "obsidian";
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

		
		this.plugin.registerMarkdownPostProcessor( (el,ctx) => this.processEncryptedCodeBlockProcessor(el, ctx) );

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

	private processEncryptedCodeBlockProcessor(el: HTMLElement, ctx: MarkdownPostProcessorContext){

		const si = ctx.getSectionInfo(el);
		if (si == null){
			return;
		}

		// isolate code block lines
		const text = InplaceTextHelper.extractTextLines( si.text, si.lineStart, si.lineEnd );

		
		const markerStart = InplaceTextHelper.findFirstMarker( _PREFIXES, text );
		if ( markerStart == null || markerStart.marker != _PREFIX_A_VISIBLE ){
			//console.debug( 'not visible or null', markerStart );
			return;
		}
		
		const markerEnd = InplaceTextHelper.findFirstMarker( _SUFFIXES, text, markerStart.position + markerStart.marker.length);
		if ( markerEnd == null ){
			return;
		}
		
		const encryptedText = InplaceTextHelper.removeMarkers( text, markerStart, markerEnd );
		
		const selectionAnalysis = new SelectionAnalysis( encryptedText );
		
		if ( !selectionAnalysis.canDecrypt ){
			return;
		}
		
		const textBeforeIndicator = InplaceTextHelper.extractTextBeforeMarker(text, markerStart );
		const textAfterIndicator = InplaceTextHelper.extractTextAfterMarker(text, markerEnd);


		// create elements
		const elPreIndicator = createSpan( { text: textBeforeIndicator } );
		const elPostIndicator = createSpan( { text: textAfterIndicator } );

		const elIndicator = createSpan( { text: '🔐' } );
		elIndicator.style.cursor  = 'pointer';
		elIndicator.onClickEvent( async () =>
			await this.handleReadingIndicatorClick(
				ctx.sourcePath,
				selectionAnalysis.decryptable
			)
		);

		el.empty();
		el.append( elPreIndicator, elIndicator, elPostIndicator );

	}

	private async handleReadingIndicatorClick( path: string, decryptable:Decryptable ){
		// indicator click handler

		if ( await this.showDecryptedTextIfPasswordKnown( path, decryptable ) ){
			return;
		}

		const pw = await this.fetchPasswordFromUser( decryptable.hint );

		if ( pw == null ){
			return;
		}

		// decrypt
		if ( await this.showDecryptedResultForPassword( decryptable, pw ) ){
			SessionPasswordService.putByPath(
				{
					password: pw,
					hint: decryptable.hint
				},
				path
			);
		}else{
			new Notice('❌ Decryption failed!');
		}

	}
	
	private async showDecryptedResultForPassword( decryptable: Decryptable, pw:string ): Promise<boolean> {
		const crypto = new CryptoHelper();
			const decryptedText = await crypto.decryptFromBase64(
			decryptable.base64CipherText,
			pw
		);
		// show result
		if (decryptedText === null) {
			return false;
		}
		
		return new Promise<boolean>( (resolve) => {
			const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText );
			decryptModal.canDecryptInPlace = false;
			decryptModal.onClose = () =>{
				resolve(true);
			}
			decryptModal.open();
		} )
			
			
	}

	private async fetchPasswordFromUser( hint:string ): Promise<string|null|undefined> {
		// fetch password
		return new Promise<string|null|undefined>( (resolve) => {
			const pwModal = new PasswordModal(
				this.plugin.app,
				/*isEncrypting*/ false,
				/*confirmPassword*/ false,
				/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
				'',
				hint
			);

			pwModal.onClose = () =>{
				resolve( pwModal.resultPassword );
			}

			pwModal.open();


		} );
	}

	private async showDecryptedTextIfPasswordKnown( filePath: string, decryptable: Decryptable ) : Promise<boolean> {
		const bestGuessPasswordAndHint = SessionPasswordService.getByPath( filePath );
		if ( bestGuessPasswordAndHint.password == null ){
			return false;
		}

		return await this.showDecryptedResultForPassword(
			decryptable,
			bestGuessPasswordAndHint.password
		);
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

		new Setting(containerEl)
			.setName('By default, show encrypted marker when reading')
			.setDesc('When encrypting inline text, should the default be to have a visible marker in Reading view?')
			.addToggle( toggle =>{
				toggle
					.setValue(this.featureSettings.showMarkerWhenReadingDefault)
					.onChange( async value =>{
						this.featureSettings.showMarkerWhenReadingDefault = value;
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
			const bestGuessPasswordAndHint = SessionPasswordService.getByPath( activeFile.path );
			//console.debug({bestGuessPasswordAndHint});

			defaultPassword = bestGuessPasswordAndHint.password;
			defaultHint = defaultHint ?? bestGuessPasswordAndHint.hint;
		}

		const confirmPassword = selectionAnalysis.canEncrypt && this.pluginSettings.confirmPassword;

		const pwModal = new PasswordModal(
			this.plugin.app,
			selectionAnalysis.canEncrypt,
			confirmPassword,
			/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
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
					finalSelectionEnd,
					pwModal.resultShowInReadingView ?? this.featureSettings.showMarkerWhenReadingDefault
				);

				// remember password
				SessionPasswordService.putByPath( { password:pw, hint: hint }, activeFile.path );

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
					SessionPasswordService.putByPath(	{ password:pw, hint: hint }, activeFile.path );
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
		showInReadingView: boolean
	) {
		//encrypt
		const crypto = new CryptoHelper();
		const encodedText = this.encodeEncryption(
			await crypto.encryptToBase64(encryptable.text, password),
			encryptable.hint,
			showInReadingView
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


	private encodeEncryption( encryptedText: string, hint: string, showInReadingView: boolean ): string {
		if (
			!_PREFIXES.some( (prefix) => encryptedText.contains(prefix) )
			&& !_SUFFIXES.some( (suffix) => encryptedText.contains(suffix) )
		) {
			const prefix = showInReadingView ? _PREFIX_A_VISIBLE : _PREFIX_A;
			const suffix = showInReadingView ? _SUFFIX_NO_COMMENT : _SUFFIX_WITH_COMMENT;

			if ( hint.length > 0 ){
				return prefix.concat(_HINT, hint, _HINT, encryptedText, suffix);
			}
			return prefix.concat(encryptedText, suffix);
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


interface IMarkerPosition{
	marker:string;
	position:number;
}

class InplaceTextHelper{
	static extractTextBeforeMarker(text: string, marker: IMarkerPosition) {
		return text.substring( 0, marker.position );
	}
	static extractTextAfterMarker(text: string, marker: IMarkerPosition) {
		return text.substring( marker.position + marker.marker.length );
	}

	public static removeMarkers(text: string, markerStart: IMarkerPosition, markerEnd: IMarkerPosition) {
		return text.substring( markerStart.position, markerEnd.position + markerEnd.marker.length );
	}

	public static extractTextLines(text: string, lineStart: number, lineEnd: number) {
		return text.split('\n').slice(lineStart, lineEnd+1).join('\n');
	}

	public static findFirstMarker( markers:string[], text:string, startPos = 0 ) : IMarkerPosition | null {

		let firstMarkerPos : number | null = null;
		let firstMarker : string | null = null;

		markers.forEach(m => {
			const pos = text.indexOf( m, startPos );
			//console.debug({m,pos});
			if ( pos != -1 && ( firstMarkerPos == null || pos < firstMarkerPos ) ){
				firstMarkerPos = pos;
				firstMarker = m;
			}
		});

		if ( firstMarker == null || firstMarkerPos == null ){
			return null;
		}

		return {
			marker: firstMarker,
			position: firstMarkerPos
		};
	}



}