import { Notice, Plugin, MarkdownView } from 'obsidian';
import DecryptModal from './DecryptModal';
import PasswordModal from './PasswordModal';
import CryptoHelper from './CryptoHelper';
import MeldEncryptSettingsTab from './MeldEncryptSettingsTab';

const _PREFIX: string = '%%🔐 ';
const _SUFFIX: string = ' 🔐%%';

interface MeldEncryptPluginSettings {
	confirmPassword: boolean;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
}

const DEFAULT_SETTINGS: MeldEncryptPluginSettings = {
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

		const mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!mdview) {
			return false;
		}

		const editor = mdview.sourceMode.cmEditor;
		if (!editor) {
			return false;
		}

		const startLine = editor.getCursor('from').line;
		const startPos = { line: startLine, ch: 0 }; // want the start of the first line

		const endLine = editor.getCursor('to').line;
		const endLineText = editor.getLine(endLine);
		const endPos = { line: endLine, ch: endLineText.length }; // want the end of last line

		const selectionText = editor.getRange(startPos, endPos);

		if (selectionText.length == 0) {
			return false;
		}

		const decrypt = selectionText.startsWith(_PREFIX) && selectionText.endsWith(_SUFFIX);
		const encrypt = !selectionText.contains(_PREFIX) && !selectionText.contains(_SUFFIX);

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

		if (isRememberPasswordExpired) {
			this.passwordLastUsed = '';
		}

		const confirmPassword = encrypt && this.settings.confirmPassword;

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
				this.decryptSelection(
					editor,
					selectionText,
					pw,
					startPos,
					endPos,
					decryptInPlace
				);
			}
		}
		pwModal.open();

		return true;
	}

	private async encryptSelection(
		editor: CodeMirror.Editor,
		selectionText: string,
		password: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
	) {
		//encrypt
		const crypto = new CryptoHelper();
		const base64EncryptedText = this.addMarkers(await crypto.encryptToBase64(selectionText, password));
		editor.setSelection(finalSelectionStart, finalSelectionEnd);
		editor.replaceSelection(base64EncryptedText, 'around');
	}

	private async decryptSelection(
		editor: CodeMirror.Editor,
		selectionText: string,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position,
		decryptInPlace: boolean
	) {
		// decrypt
		const base64CipherText = this.removeMarkers(selectionText);
		const crypto = new CryptoHelper();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
		} else {

			if (decryptInPlace) {
				editor.setSelection(selectionStart, selectionEnd);
				editor.replaceSelection(decryptedText, 'around');
			} else {
				const decryptModal = new DecryptModal(this.app, '🔓', decryptedText);
				decryptModal.onClose = () => {
					editor.focus();
					if (decryptModal.decryptInPlace) {
						editor.setSelection(selectionStart, selectionEnd);
						editor.replaceSelection(decryptedText, 'around');
					}
				}
				decryptModal.open();
			}
		}
	}

	private removeMarkers(text: string): string {
		if (text.startsWith(_PREFIX) && text.endsWith(_SUFFIX)) {
			return text.replace(_PREFIX, '').replace(_SUFFIX, '');
		}
		return text;
	}

	private addMarkers(text: string): string {
		if (!text.contains(_PREFIX) && !text.contains(_SUFFIX)) {
			return _PREFIX.concat(text, _SUFFIX);
		}
		return text;
	}

}
