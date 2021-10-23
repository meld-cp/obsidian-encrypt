import { Notice, Plugin, MarkdownView, Editor } from 'obsidian';
import DecryptModal from './DecryptModal';
import PasswordModal from './PasswordModal';
import { CryptoHelperV2, CryptoHelperObsolete} from './CryptoHelper';
import MeldEncryptSettingsTab from './MeldEncryptSettingsTab';

const _PREFIX_OBSOLETE: string = '%%🔐 ';
const _PREFIX_A: string = '%%🔐α ';
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
			id: 'encrypt-decrypt',
			name: 'Encrypt/Decrypt',
			checkCallback: (checking) => this.processEncryptDecryptCommand(checking, false)
		});

		this.addCommand({
			id: 'encrypt-decrypt-in-place',
			name: 'Encrypt/Decrypt In-place',
			checkCallback: (checking) => this.processEncryptDecryptCommand(checking, true)
		});
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	processEncryptDecryptCommand(checking: boolean, decryptInPlace: boolean): boolean {

		if (checking && this.app.workspace.activeLeaf){
			// ensures this command can show up in other plugins which list commands e.g. customizable-sidebar
			return true; 
		}

		const mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!mdview) {
			return false;
		}

		const editor = mdview.editor;
		if (!editor) {
			return false;
		}

		let startPos = editor.getCursor('from');
		let endPos = editor.getCursor('to');

		if (this.settings.expandToWholeLines){
			const startLine = startPos.line;
			startPos = { line: startLine, ch: 0 }; // want the start of the first line

			const endLine = endPos.line;
			const endLineText = editor.getLine(endLine);
			endPos = { line: endLine, ch: endLineText.length }; // want the end of last line
		}

		const selectionText = editor.getRange(startPos, endPos);

		if (selectionText.length == 0) {
			return false;
		}

		const decrypt_obs = selectionText.startsWith(_PREFIX_OBSOLETE) && selectionText.endsWith(_SUFFIX);
		const decrypt_a = selectionText.startsWith(_PREFIX_A) && selectionText.endsWith(_SUFFIX);

		const decrypt = decrypt_obs || decrypt_a;
		const encrypt = !selectionText.contains(_PREFIX_OBSOLETE) && !selectionText.contains(_SUFFIX);

		if (!decrypt && !encrypt) {
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

		const confirmPassword = encrypt && this.settings.confirmPassword;

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

			if (encrypt) {
				this.encryptSelection(
					editor,
					selectionText,
					pw,
					startPos,
					endPos
				);
			} else {

				if (decrypt_a){
					this.decryptSelection_a(
						editor,
						selectionText,
						pw,
						startPos,
						endPos,
						decryptInPlace
					);
				}else{
					this.decryptSelectionObsolete(
						editor,
						selectionText,
						pw,
						startPos,
						endPos,
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
		//console.log('decryptSelection_a');
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
		//console.log('decryptSelectionObsolete');
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
