import { Notice, Plugin, MarkdownView } from 'obsidian';
import DecryptModal from './DecryptModal';
import PasswordModal from './PasswordModal';
import CryptoHelper from './CryptoHelper';

const _PREFIX: string = '%%🔐 ';
const _SUFFIX: string = ' 🔐%%';

export default class MeldEncrypt extends Plugin {

	async onload() {
		this.addCommand({
			id: 'encrypt-decrypt',
			name: 'Encrypt/Decrypt',
			checkCallback: this.processEncryptDecryptCommand.bind(this)
		});
	}

	processEncryptDecryptCommand(checking: boolean): boolean {

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
		const pwModal = new PasswordModal(this.app);
		if (encrypt) {
			pwModal.onClose = () => this.encryptSelection(
				editor,
				selectionText,
				pwModal.password,
				startPos,
				endPos
			);
		} else {
			pwModal.onClose = () => this.decryptSelection(
				editor,
				selectionText,
				pwModal.password,
				startPos,
				endPos
			);
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
	) {
		// decrypt
		const base64CipherText = this.removeMarkers(selectionText);
		const crypto = new CryptoHelper();
		const decryptedText = await crypto.decryptFromBase64(base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
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
