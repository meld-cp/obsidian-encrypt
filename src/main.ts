import { App, Modal, Notice, Plugin, MarkdownView } from 'obsidian';
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
		pwModal.onClose = async () => {
			if (pwModal.password) {

				// what should we do with it?
				if (decrypt) {

					// decrypt
					const decryptedText = await this.decrypt(selectionText, pwModal.password);
					if (decryptedText === null) {
						new Notice('❌ Decryption failed!');
					} else {
						const textModal = new TextModal(this.app, '🔓', decryptedText);
						textModal.onClose = () => { editor.focus(); }
						textModal.open();
					}

				} else if (encrypt) {

					//encrypt
					const encryptedText = await this.encrypt(selectionText, pwModal.password);
					editor.setSelection(startPos, endPos);
					editor.replaceSelection(encryptedText, 'around');

				} else {
					return false;
				}
			}

		}
		pwModal.open();

		return true;
	}

	private async encrypt(text: string, password: string): Promise<string> {
		const ch = new CryptoHelper();
		return _PREFIX + await ch.encryptToBase64(text, password) + _SUFFIX;
	}

	private async decrypt(text: string, password: string): Promise<string> {
		const ciphertext = text.replace(_PREFIX, '').replace(_SUFFIX, '');
		const ch = new CryptoHelper();
		return await ch.decryptFromBase64(ciphertext, password);
	}

}

class PasswordModal extends Modal {
	password: string = null;

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let { contentEl } = this;

		const pwInputEl = contentEl.createDiv().createEl('input');
		pwInputEl.type = 'password';
		pwInputEl.placeholder = '🔑 Enter your password';
		pwInputEl.style.width = '100%';
		pwInputEl.focus();

		pwInputEl.addEventListener('keyup', (ev) => {
			if (ev.code === 'Enter' && pwInputEl.value.length > 0) {
				ev.preventDefault();
				this.password = pwInputEl.value;
				this.close();
			}
		});

	}

}

class TextModal extends Modal {
	text: string;

	constructor(app: App, title: string, text: string = '') {
		super(app);
		this.text = text;
		this.titleEl.innerText = title;
	}

	onOpen() {
		let { contentEl } = this;

		const textEl = contentEl.createEl('textarea');
		textEl.value = this.text;
		textEl.style.width = '100%';
		textEl.style.height = '100%';
		textEl.rows = 10;
		textEl.readOnly = true;
		//textEl.focus(); // Doesn't seem to work here...
		setImmediate(() => { textEl.focus() }); //... but this does

	}

}
