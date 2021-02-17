import { App, Modal, Notice, Plugin, MarkdownView, PluginSettingTab, Setting } from 'obsidian';
import CryptoES from 'crypto-es';


// interface MyPluginSettings {
// 	mySetting: string;
// }

// const DEFAULT_SETTINGS: MyPluginSettings = {
// 	mySetting: 'default'
// }

export default class MyPlugin extends Plugin {
	//settings: MyPluginSettings;

	async onload() {
		//await this.loadSettings();

		// this.addRibbonIcon('dice', 'Sample Plugin', () => {
		// 	new Notice('This is a notice!');
		// });

		//this.addStatusBarItem().setText('Status Bar Text');

		this.addCommand({
			id: 'encrypt-decrypt',
			name: 'Encrypt/Decrypt',
			checkCallback: this._processEncryptDecryptCommand.bind(this)
		});

		//this.addSettingTab(new SampleSettingTab(this.app, this));

		// this.registerCodeMirror((cm: CodeMirror.Editor) => {
		// 	console.log('codemirror', cm);
		// 	//cm.hasFocus()
		// 	this.editors.push(cm);
		// });

		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	//console.log('click', evt);
		// });

		//this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));

		//this.registerMarkdownCodeBlockProcessor()
	}

	_processEncryptDecryptCommand( checking: boolean ) : boolean {

		let leaf = this.app.workspace.activeLeaf;
		if (!leaf) {
			return false;
		}

		let editor : CodeMirror.Editor = null;

		if ( leaf.view instanceof MarkdownView ) {
			editor = leaf.view.sourceMode.cmEditor;
		}

		if (!editor){
		 	return false;
		}
		
		var startPos = editor.listSelections().first().from();
		var endPos = editor.listSelections().last().to();
		var lastCharPos = editor.lineInfo(endPos.line).text.length;

		editor.extendSelection(
			{ line:startPos.line, ch:0 },
			{ line:endPos.line, ch: lastCharPos }
		);
		
		const selectionText = editor.getSelection();
		
		if ( selectionText.length == 0 ){
			return false;
		}
		
		const decrypt = selectionText.startsWith(MyPlugin._PREFIX) && selectionText.endsWith(MyPlugin._SUFFIX);
		const encrypt = !selectionText.contains(MyPlugin._PREFIX) && !selectionText.contains(MyPlugin._SUFFIX);
		
		if ( !decrypt && !encrypt ){
			return false;
		}
		
		if ( checking ){
			return true;
		}
		

		// Fetch password from user
		const modal = new PasswordModal( this.app );
		const textModal = new TextModal( this.app, '🔓' );
		textModal.onClose = () =>{
			editor.focus();
		}
		
		modal.onClose = () => {
			if (modal.password){
				// what should we do with it?
				if (decrypt){
					// decrypt
					const decryptedText = this._decrypt( selectionText, modal.password );
					if (decryptedText === null){
						new Notice('❌ Decryption failed!');
					}else{
						textModal.text = decryptedText;

						textModal.open();
					}
				}else if(encrypt){
					//encrypt
					const encryptedText = this._encrypt( selectionText, modal.password );
					editor.replaceSelection( encryptedText );
				}else{
					return false;
				}
			}
			
		}
		modal.open();

		return true;
	}

	static _PREFIX:string = '%%🔐 '
	static _SUFFIX:string = ' 🔐%%'

	private _encrypt( text: string, password: string): string {
		return MyPlugin._PREFIX + CryptoES.AES.encrypt(text, password).toString()+ MyPlugin._SUFFIX;
		//return '%%ENCRYPTED::' + text.replace('\n', '{EOL}') + '::ENCRYPTED%%'; // TODO
	}

	private _decrypt( text: string, password: string ):string {
		try{
			const ciphertext = text.replace(MyPlugin._PREFIX, '').replace(MyPlugin._SUFFIX, '');
			const bytes = CryptoES.AES.decrypt(ciphertext, password);
			if ( bytes.sigBytes > 0 ){
				return bytes.toString(CryptoES.enc.Utf8);
			}
			return null;
		}catch{
			return null;
		}
		//return ciphertext.replace('%%ENCRYPTED::', '').replace('::ENCRYPTED%%', '').replace('{EOL}','\n'); // TODO: 
	}

	onunload() {
		//console.log('unloading plugin');
	}

	// async loadSettings() {
	// 	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }
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
		//textEl.focus();
		

		setImmediate(() =>{textEl.focus()});

	}
	
}

// class SampleSettingTab extends PluginSettingTab {
// 	plugin: MyPlugin;

// 	constructor(app: App, plugin: MyPlugin) {
// 		super(app, plugin);
// 		this.plugin = plugin;
// 	}

// 	display(): void {
// 		let {containerEl} = this;

// 		containerEl.empty();

// 		containerEl.createEl('h2', {text: 'Settings for my awesome plugin.'});

// 		new Setting(containerEl)
// 			.setName('Setting #1')
// 			.setDesc('It\'s a secret')
// 			.addText(text => text
// 				.setPlaceholder('Enter your secret')
// 				.setValue('')
// 				.onChange(async (value) => {
// 					console.log('Secret: ' + value);
// 					this.plugin.settings.mySetting = value;
// 					await this.plugin.saveSettings();
// 				}));
// 	}
// }
