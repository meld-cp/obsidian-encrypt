import { App, Modal, Notice, Plugin, MarkdownView } from 'obsidian';
import CryptoES from 'crypto-es';


const _PREFIX:string = '%%🔐 ';
const _SUFFIX:string = ' 🔐%%';

export default class MeldEncrypt extends Plugin {
	async onload() {

		this.addCommand({
			id: 'encrypt-decrypt',
			name: 'Encrypt/Decrypt',
			checkCallback: this._processEncryptDecryptCommand.bind(this)
		});
	}

	_processEncryptDecryptCommand( checking: boolean ) : boolean {

		let mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!mdview) {
			return false;
		}

		let editor = mdview.sourceMode.cmEditor;
		if (!editor){
		 	return false;
		}
		
		var startPos = editor.listSelections().first().from();
		var endPos = editor.listSelections().last().to();
		var lastCharPos = editor.lineInfo(endPos.line).text.length;

		// TODO: This causes the selection to expand, need to find a way
		// to extract text without extending the selection.
		editor.extendSelection(
			{ line:startPos.line, ch:0 },
			{ line:endPos.line, ch: lastCharPos }
		);
		
		const selectionText = editor.getSelection();
		
		if ( selectionText.length == 0 ){
			return false;
		}
		
		const decrypt = selectionText.startsWith(_PREFIX) && selectionText.endsWith(_SUFFIX);
		const encrypt = !selectionText.contains(_PREFIX) && !selectionText.contains(_SUFFIX);
		
		if ( !decrypt && !encrypt ){
			return false;
		}
		
		if ( checking ){
			return true;
		}
		

		// Fetch password from user
		const pwModal = new PasswordModal( this.app );
		pwModal.onClose = () => {
			if ( pwModal.password ){
				// what should we do with it?
				if ( decrypt ){
					// decrypt
					const decryptedText = this._decrypt( selectionText, pwModal.password );
					if (decryptedText === null){
						new Notice('❌ Decryption failed!');
					}else{
						const textModal = new TextModal( this.app, '🔓' );
						textModal.text = decryptedText;
						textModal.onClose = () =>{
							editor.focus();
						}
						textModal.open();
					}
				}else if(encrypt){
					//encrypt
					const encryptedText = this._encrypt( selectionText, pwModal.password );
					editor.replaceSelection( encryptedText );
				}else{
					return false;
				}
			}
			
		}
		pwModal.open();

		return true;
	}



	private _encrypt( text: string, password: string): string {
		return _PREFIX + CryptoES.AES.encrypt(text, password).toString()+ _SUFFIX;
	}

	private _decrypt( text: string, password: string ):string {
		try{
			const ciphertext = text.replace(_PREFIX, '').replace(_SUFFIX, '');
			const bytes = CryptoES.AES.decrypt(ciphertext, password);
			if ( bytes.sigBytes > 0 ){
				return bytes.toString(CryptoES.enc.Utf8);
			}
			return null; // decrypt failed
		}catch{
			return null; // decrypt failed
		}
	}

}

class PasswordModal extends Modal {
	password: string = null;
	
	constructor( app: App ) {
		super(app);
	}

	onOpen() {
		let {contentEl} = this;

		const pwInputEl = contentEl.createDiv().createEl('input');
		pwInputEl.type = 'password';
		pwInputEl.placeholder = '🔑 Enter your password';
		pwInputEl.style.width = '100%';
		pwInputEl.focus();

		pwInputEl.addEventListener( 'keyup', (ev) => {
			if ( ev.code === 'Enter' && pwInputEl.value.length > 0 ) {
				ev.preventDefault();
				this.password = pwInputEl.value;
				this.close();
			}
		});

	}

}

class TextModal extends Modal {
	text: string;

	constructor(app: App, title: string, text: string ='') {
		super(app);
		this.text = text;
		this.titleEl.innerText = title;
	}

	onOpen() {
		let {contentEl} = this;
		
		const textEl = contentEl.createEl('textarea');
		textEl.value = this.text;
		textEl.style.width = '100%';
		textEl.style.height = '100%';
		textEl.rows = 10;
		textEl.readOnly = true;
		//textEl.focus(); // Doesn't see to work here...
		setImmediate(() =>{textEl.focus()}); //... but this does

	}
	
}
