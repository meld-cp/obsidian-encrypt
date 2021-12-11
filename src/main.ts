import { Notice, Plugin, MarkdownView, Editor, EditorPosition } from 'obsidian';
import DecryptModal from './DecryptModal';
import PasswordModal from './PasswordModal';
import { CryptoHelperV2, CryptoHelperObsolete} from './CryptoHelper';
import MeldEncryptSettingsTab from './MeldEncryptSettingsTab';

const _PREFIX: string = '%%🔐';
const _PREFIX_OBSOLETE: string = _PREFIX + ' ';
const _PREFIX_A: string = _PREFIX + 'α ';
const _SUFFIX: string = ' 🔐%%';

interface MeldEncryptPluginSettings {
	expandToWholeLines: boolean,
	confirmPassword: boolean;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
}

const DEFAULT_SETTINGS: MeldEncryptPluginSettings = {
	expandToWholeLines: true,
	confirmPassword: true,
	rememberPassword: true,
	rememberPasswordTimeout: 30
}

export default class MeldEncrypt extends Plugin {

	settings: MeldEncryptPluginSettings;
	passwordLastUsedExpiry: number
	passwordLastUsed: string;

	async onload() {

		await this.loadSettings();

		this.addSettingTab(new MeldEncryptSettingsTab(this.app, this));

		this.addCommand({
			id: 'meld-encrypt',
			name: 'Encrypt/Decrypt',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand(checking, editor, view, false)
		});

		this.addCommand({
			id: 'meld-encrypt-in-place',
			name: 'Encrypt/Decrypt In-place',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptCommand(checking, editor, view, true)
		});

		this.addCommand({
			id: 'meld-encrypt-note',
			name: 'Encrypt/Decrypt Whole Note',
			editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptWholeNoteCommand(checking, editor, view)
		});

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	isSettingsModalOpen() : boolean{
		return document.querySelector('.mod-settings') !== null;
	} 

	processEncryptDecryptWholeNoteCommand(checking: boolean, editor: Editor, view: MarkdownView): boolean {

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
			true
		);
	}

	processEncryptDecryptCommand(checking: boolean, editor: Editor, view: MarkdownView, decryptInPlace: boolean): boolean {
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
		
		let maxOffset = editor.posToOffset( {line:editor.lastLine(), ch:Number.MAX_VALUE} );

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
		
		return result;
	}

	private processSelection(
		checking: boolean,
		editor: Editor,
		selectionText: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
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

		const pwModal = new PasswordModal(this.app, confirmPassword, this.passwordLastUsed);
		pwModal.onClose = () => {
			const pw = pwModal.password ?? ''
			if (pw.length == 0) {
				return;
			}

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
				this.encryptSelection(
					editor,
					selectionText,
					pw,
					finalSelectionStart,
					finalSelectionEnd
				);
			} else {

				if (!selectionAnalysis.hasObsoleteEncryptedPrefix){
					this.decryptSelection_a(
						editor,
						selectionText,
						pw,
						finalSelectionStart,
						finalSelectionEnd,
						decryptInPlace
					);
				}else{
					this.decryptSelectionObsolete(
						editor,
						selectionText,
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
		selectionText: string,
		password: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
	) {
		//encrypt
		const crypto = new CryptoHelperV2();
		const base64EncryptedText = this.addMarkers(await crypto.encryptToBase64(selectionText, password));
		editor.setSelection(finalSelectionStart, finalSelectionEnd);
		editor.replaceSelection(base64EncryptedText);
	}

	private async decryptSelection_a(
		editor: Editor,
		selectionText: string,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) {
		// decrypt
		const base64CipherText = this.removeMarkers(selectionText);

		const crypto = new CryptoHelperV2();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.app, '🔓', decryptedText);
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
		selectionText: string,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) {
		// decrypt
		const base64CipherText = this.removeMarkers(selectionText);
		const crypto = new CryptoHelperObsolete();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText);
			} else {
				const decryptModal = new DecryptModal(this.app, '🔓', decryptedText);
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

	private removeMarkers(text: string): string {
		if (text.startsWith(_PREFIX_A) && text.endsWith(_SUFFIX)) {
			return text.replace(_PREFIX_A, '').replace(_SUFFIX, '');
		}
		if (text.startsWith(_PREFIX_OBSOLETE) && text.endsWith(_SUFFIX)) {
			return text.replace(_PREFIX_OBSOLETE, '').replace(_SUFFIX, '');
		}
		return text;
	}

	private addMarkers(text: string): string {
		if (!text.contains(_PREFIX_OBSOLETE) && !text.contains(_PREFIX_A) && !text.contains(_SUFFIX)) {
			return _PREFIX_A.concat(text, _SUFFIX);
		}
		return text;
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
}
