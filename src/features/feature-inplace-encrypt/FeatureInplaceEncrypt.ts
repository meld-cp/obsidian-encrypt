import { Editor, EditorPosition, MarkdownView, Notice, Setting } from "obsidian";
import { CryptoHelper } from "../../services/CryptoHelper";
import { CryptoHelperObsolete } from "../../services/CryptoHelperObsolete";
import DecryptModal from "./DecryptModal";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";
import { IFeatureInplaceEncryptSettings } from "./IFeatureInplaceEncryptSettings";
import PasswordModal from "./PasswordModal";

const _PREFIX: string = '%%🔐';
const _PREFIX_OBSOLETE: string = _PREFIX + ' ';
const _PREFIX_A: string = _PREFIX + 'α ';
const _SUFFIX: string = ' 🔐%%';

const _HINT: string = '💡';

export default class FeatureInplaceEncrypt implements IMeldEncryptPluginFeature{
	plugin:MeldEncrypt;
	settings:IFeatureInplaceEncryptSettings;

	passwordLastUsedExpiry: number
	passwordLastUsed: string;

	pwTimeoutSetting:Setting;

	async onload(plugin:MeldEncrypt, settings:IMeldEncryptPluginSettings) {
		this.plugin = plugin;
		this.settings = settings.featureInplaceEncrypt;

		plugin.addCommand({
			id: 'meld-encrypt',
			name: 'Encrypt/Decrypt',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand( checking, editor, view, false )
		});

		plugin.addCommand({
			id: 'meld-encrypt-in-place',
			name: 'Encrypt/Decrypt In-place',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand( checking, editor, view, true )
		});

		plugin.addCommand({
			id: 'meld-encrypt-note',
			name: 'Decrypt Whole Note',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptWholeNoteCommand(
				checking,
				editor,
				view
			)
		});
		
	}

	onunload(){

	}

	public buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	): void {
		//containerEl.createEl('hr');
		//containerEl.createEl('h3', {text: 'Inplace Encryption Settings'});
		new Setting(containerEl)
			.setHeading()
			.setName('Inplace Encryption Feature Settings')
		;

		// Selection encrypt feature settings below
		new Setting(containerEl)
			.setName('Expand selection to whole line?')
			.setDesc('Partial selections will get expanded to the whole line.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.expandToWholeLines)
					.onChange( async value =>{
						this.settings.expandToWholeLines = value;
						await saveSettingCallback();
					})
			})
		;

		new Setting(containerEl)
			.setName('Confirm password?')
			.setDesc('Confirm password when encrypting.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.confirmPassword)
					.onChange( async value =>{
						this.settings.confirmPassword = value;
						await saveSettingCallback();
						this.updateSettingsUi();
					})
			})
		;

		new Setting(containerEl)
			.setName('Copy button?')
			.setDesc('Show a button to copy decrypted text.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.showCopyButton)
					.onChange( async value =>{
						this.settings.showCopyButton = value;
						await saveSettingCallback();
						this.updateSettingsUi();
					})
			})
		;

		new Setting(containerEl)
			.setName('Remember password?')
			.setDesc('Remember the last used password for this session.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.rememberPassword)
					.onChange( async value =>{
						this.settings.rememberPassword = value;
						await saveSettingCallback();
						this.updateSettingsUi();
					})
			})
		;

		this.pwTimeoutSetting = new Setting(containerEl)
			.setName( this.buildPasswordTimeoutSettingName( this.settings.rememberPasswordTimeout ) )
			.setDesc('The number of minutes to remember the last used password.')
			.addSlider( slider => {
				slider
					.setLimits(0, 120, 5)
					.setValue(this.settings.rememberPasswordTimeout)
					.onChange( async value => {
						this.settings.rememberPasswordTimeout = value;
						await saveSettingCallback();
						this.updateSettingsUi();
					})
				;
				
			})
		;

		this.updateSettingsUi();
	}

	private updateSettingsUi( ):void{
		this.pwTimeoutSetting.setName(this.buildPasswordTimeoutSettingName( this.settings.rememberPasswordTimeout ));

		if ( this.settings.rememberPassword ){
			this.pwTimeoutSetting.settingEl.show();
		}else{
			this.pwTimeoutSetting.settingEl.hide();
		}
	}

	buildPasswordTimeoutSettingName(rememberPasswordTimeout:number):string{
		const value = rememberPasswordTimeout;
		let timeoutString = `${value} minutes`;
		if(value == 0){
			timeoutString = 'Never forget';
		}
		return `Remember Password Timeout (${timeoutString})`;
	}

	// TODO: move to utils
	isSettingsModalOpen() : boolean{
		return document.querySelector('.mod-settings') !== null;
	}

	private processEncryptDecryptWholeNoteCommand(
		checking: boolean,
		editor: Editor,
		view: MarkdownView
	): boolean {

		if ( checking && this.isSettingsModalOpen() ){
			// Settings is open, ensures this command can show up in other
			// plugins which list commands e.g. customizable-sidebar
			return true;
		}

		const startPos = editor.offsetToPos(0);
		const endPos = { line: editor.lastLine(), ch: editor.getLine(editor.lastLine()).length };

		const selectionText = editor.getRange(startPos, endPos).trim();

		return this.processSelection(
			checking,
			editor,
			selectionText,
			startPos,
			endPos,
			true,
			false
		);
	}

	private processEncryptDecryptCommand(
		checking: boolean,
		editor: Editor,
		view: MarkdownView,
		decryptInPlace: boolean
	): boolean {
		if ( checking && this.isSettingsModalOpen() ){
			// Settings is open, ensures this command can show up in other
			// plugins which list commands e.g. customizable-sidebar
			return true;
		}

		let startPos = editor.getCursor('from');
		let endPos = editor.getCursor('to');

		if (this.settings.expandToWholeLines){
			const startLine = startPos.line;
			startPos = { line: startLine, ch: 0 }; // want the start of the first line

			const endLine = endPos.line;
			const endLineText = editor.getLine(endLine);
			endPos = { line: endLine, ch: endLineText.length }; // want the end of last line
		}else{
			if ( !editor.somethingSelected() ){
				// nothing selected, assume user wants to decrypt, expand to start and end markers
				startPos = this.getClosestPrevTextCursorPos(editor, _PREFIX, startPos );
				endPos = this.getClosestNextTextCursorPos(editor, _SUFFIX, endPos );
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

	private getClosestPrevTextCursorPos(editor: Editor, text: string, defaultValue:EditorPosition ): EditorPosition{
		const initOffset = editor.posToOffset( editor.getCursor("from") );

		for (let offset = initOffset; offset >= 0; offset--) {
			const offsetPos = editor.offsetToPos(offset);
			const textEndOffset = offset + text.length;
			const prefixEndPos = editor.offsetToPos(textEndOffset);
			
			const testText = editor.getRange( offsetPos, prefixEndPos );
			if (testText == text){
				return offsetPos;
			}
		}

		return defaultValue;
	}

	private getClosestNextTextCursorPos(editor: Editor, text: string, defaultValue:EditorPosition ): EditorPosition{
		const initOffset = editor.posToOffset( editor.getCursor("from") );
		const lastLineNum = editor.lastLine();

		let maxOffset = editor.posToOffset( {line:lastLineNum, ch:editor.getLine(lastLineNum).length} );

		for (let offset = initOffset; offset <= maxOffset - text.length; offset++) {
			const offsetPos = editor.offsetToPos(offset);
			const textEndOffset = offset + text.length;
			const prefixEndPos = editor.offsetToPos(textEndOffset);
			
			const testText = editor.getRange( offsetPos, prefixEndPos );
			
			if (testText == text){
				return prefixEndPos;
			}
		}
		
		return defaultValue;
	}

	private analyseSelection( selectionText: string ):SelectionAnalysis{
		
		const result = new SelectionAnalysis();

		result.isEmpty = selectionText.length === 0;

		result.hasObsoleteEncryptedPrefix = selectionText.startsWith(_PREFIX_OBSOLETE);
		result.hasEncryptedPrefix = result.hasObsoleteEncryptedPrefix || selectionText.startsWith(_PREFIX_A);

		result.hasDecryptSuffix = selectionText.endsWith(_SUFFIX);

		result.containsEncryptedMarkers =
			selectionText.contains(_PREFIX_OBSOLETE)
			|| selectionText.contains(_PREFIX_A)
			|| selectionText.contains(_SUFFIX)
		;

		result.canDecrypt = result.hasEncryptedPrefix && result.hasDecryptSuffix;
		result.canEncrypt = !result.hasEncryptedPrefix && !result.containsEncryptedMarkers;
		
		if (result.canDecrypt){
			result.decryptable = this.parseDecryptableContent(selectionText);
			if (result.decryptable == null){
				result.canDecrypt = false;
			}
		}

		return result;
	}

	private processSelection(
		checking: boolean,
		editor: Editor,
		selectionText: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
		decryptInPlace: boolean,
		allowEncryption:boolean = true
	){

		const selectionAnalysis = this.analyseSelection(selectionText);

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

		if (checking) {
			return true;
		}

		// Fetch password from user

		// determine default password
		const isRememberPasswordExpired =
			!this.settings.rememberPassword
			|| (
				this.passwordLastUsedExpiry != null
				&& Date.now() > this.passwordLastUsedExpiry
			)
		;

		const confirmPassword = selectionAnalysis.canEncrypt && this.settings.confirmPassword;

		if ( isRememberPasswordExpired || confirmPassword ) {
			// forget password
			this.passwordLastUsed = '';
		}

		const pwModal = new PasswordModal(
			this.plugin.app,
			selectionAnalysis.canEncrypt,
			confirmPassword,
			this.passwordLastUsed,
			selectionAnalysis.decryptable?.hint
		);
		pwModal.onClose = () => {
			const pw = pwModal.password ?? ''
			if (pw.length == 0) {
				return;
			}
			const hint = pwModal.hint;

			// remember password?
			if (this.settings.rememberPassword) {
				this.passwordLastUsed = pw;
				this.passwordLastUsedExpiry =
					this.settings.rememberPasswordTimeout == 0
						? null
						: Date.now() + this.settings.rememberPasswordTimeout * 1000 * 60// new expiry
					;
			}

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
			} else {

				if (selectionAnalysis.decryptable.version == 1){
					this.decryptSelection_a(
						editor,
						selectionAnalysis.decryptable,
						pw,
						finalSelectionStart,
						finalSelectionEnd,
						decryptInPlace
					);
				}else{
					this.decryptSelectionObsolete(
						editor,
						selectionAnalysis.decryptable,
						pw,
						finalSelectionStart,
						finalSelectionEnd,
						decryptInPlace
					);
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
	) {
		// decrypt

		const crypto = new CryptoHelper();
		const decryptedText = await crypto.decryptFromBase64(decryptable.base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText, this.settings.showCopyButton);
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
	}

	private async decryptSelectionObsolete(
		editor: Editor,
		decryptable: Decryptable,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) {
		// decrypt
		const base64CipherText = this.removeMarkers(decryptable.base64CipherText);
		const crypto = new CryptoHelperObsolete();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText, this.settings.showCopyButton);
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
	}

	private parseDecryptableContent(text: string) : Decryptable{
		const result = new Decryptable();

		let content = text;
		if (content.startsWith(_PREFIX_A) && content.endsWith(_SUFFIX)) {
			result.version=1;
			content = content.replace(_PREFIX_A, '').replace(_SUFFIX, '');
		}else if (content.startsWith(_PREFIX_OBSOLETE) && content.endsWith(_SUFFIX)) {
			result.version=0;
			content = content.replace(_PREFIX_OBSOLETE, '').replace(_SUFFIX, '');
		}else {
			return null; // invalid format
		}

		// check if there is a hint
		//console.table(content);
		if (content.substr(0,_HINT.length) == _HINT){
			const endHintMarker = content.indexOf(_HINT,_HINT.length);
			if (endHintMarker<0){
				return null; // invalid format
			}
			result.hint = content.substring(_HINT.length,endHintMarker)
			result.base64CipherText = content.substring(endHintMarker+_HINT.length);
		}else{
			result.base64CipherText = content;
		}
		
		//console.table(result);

		return result;

	}

	private removeMarkers(text: string): string {
		if (text.startsWith(_PREFIX_A) && text.endsWith(_SUFFIX)) {
			return text.replace(_PREFIX_A, '').replace(_SUFFIX, '');
		}
		if (text.startsWith(_PREFIX_OBSOLETE) && text.endsWith(_SUFFIX)) {
			return text.replace(_PREFIX_OBSOLETE, '').replace(_SUFFIX, '');
		}
		return text;
	}

	private encodeEncryption( encryptedText: string, hint: string ): string {
		if (!encryptedText.contains(_PREFIX_OBSOLETE) && !encryptedText.contains(_PREFIX_A) && !encryptedText.contains(_SUFFIX)) {
			if (hint){
				return _PREFIX_A.concat(_HINT, hint, _HINT, encryptedText, _SUFFIX);	
			}
			return _PREFIX_A.concat(encryptedText, _SUFFIX);
		}
		return encryptedText;
	}
}

class SelectionAnalysis{
	isEmpty: boolean;
	hasObsoleteEncryptedPrefix: boolean;
	hasEncryptedPrefix: boolean;
	hasDecryptSuffix: boolean;
	canDecrypt: boolean;
	canEncrypt: boolean;
	containsEncryptedMarkers: boolean;
	decryptable : Decryptable;
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