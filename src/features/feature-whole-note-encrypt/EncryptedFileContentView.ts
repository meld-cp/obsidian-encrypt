import { Menu, MenuItem, Notice, Setting, TextFileView } from 'obsidian';
import { WorkspaceLeaf } from "obsidian";
import { CryptoHelper } from '../../services/CryptoHelper';

export enum EncryptedFileContentViewStateEnum{
	init,
	decryptNote,
	editNote,
	changePassword,
	newNote
}

export const VIEW_TYPE_ENCRYPTED_FILE_CONTENT = "meld-encrypted-file-content-view";
export class EncryptedFileContentView extends TextFileView {
	
	// State
	currentView : EncryptedFileContentViewStateEnum = EncryptedFileContentViewStateEnum.init;
	encryptionPassword:string = '';
	hint:string = '';
	currentEditorText:string = '';
	// end state
	
	elActionIconLockNote : HTMLElement;
	elActionChangePassword : HTMLElement;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);

		console.debug('EncryptedFileContentView.constructor', {leaf});

		this.elActionIconLockNote = this.addAction( 'lock', 'Lock', () => this.actionLockFile() );

		this.elActionChangePassword = this.addAction( 'key', 'Change Password', () => this.actionChangePassword() );
		
		this.contentEl.style.display = 'flex';
		this.contentEl.style.flexDirection = 'column';
		this.contentEl.style.alignItems = 'center';

	}

	private actionLockFile(){
		this.encryptionPassword = '';
		this.refreshView(EncryptedFileContentViewStateEnum.decryptNote);
	}

	private actionChangePassword(){
		this.refreshView(EncryptedFileContentViewStateEnum.changePassword);
	}

	override onPaneMenu(menu: Menu, source: string): void {
		console.debug( {menu, source, 'view': this.currentView});
		if ( source == 'tab-header' && this.currentView == EncryptedFileContentViewStateEnum.editNote ){
			menu.addItem( m =>{
				m
					.setSection('action')
					.setIcon('lock')
					.setTitle('Lock')
					.onClick( () => this.actionLockFile() )
				;
			});
			menu.addItem( m =>{
				m
					.setSection('action')
					.setIcon('key')
					.setTitle('Change Password')
					.onClick( () => this.actionChangePassword() )
				;
			});
		}
		super.onPaneMenu(menu,source);
	}

	private createTitle( title:string ) : HTMLElement{
		return this.contentEl.createDiv({
			text : `🔐 ${title} 🔐`,
			attr : {
			 	style: 'margin-bottom:2em;'
			}
		});
	}

	private validatePassword ( pw: string ) : string {
		if (pw.length == 0){
			return 'Password is too short';
		}
		return '';
	}

	private validateConfirm ( pw: string, cpw: string ) : string {
		const passwordMatch = pw === cpw;
		return passwordMatch ? '' :'Password doesn\'t match';
	}

	private createNewNoteView() : HTMLElement {
		//console.debug('createDecryptNoteView', { "hint": this.hint} );
		const container = this.createInputContainer();

		new Setting(container)
			.setDesc('Please provide a password and hint to start editing this note.')
		;

		const submit = async (password: string, confirm: string, hint:string) => {
			var validPw = this.validatePassword(password);
			var validCpw = this.validateConfirm(password, confirm);
			sPassword.setDesc( validPw );
			sConfirm.setDesc( validCpw );

			if ( validPw.length === 0 && validCpw.length === 0 ){
				
				//set password and hint and open note
				this.encryptionPassword = password;
				this.hint = hint;
				this.currentEditorText = this.file.basename;

				await this.encodeAndSave();
					
				this.refreshView(EncryptedFileContentViewStateEnum.editNote);

			}
		}

		let password = '';
		let confirm = '';
		let hint = '';

		const sPassword = new Setting(container)
			.setName("Password:")
			.setDesc('')
			.addText( tc => {
				tc.inputEl.focus();
				tc.inputEl.type = 'password';
				tc.onChange( v => {
					password = v;
					sPassword.setDesc( this.validatePassword(password) );
					sConfirm.setDesc( this.validateConfirm(password, confirm) );
				} );
			} )
		;
		sPassword.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				// validate password
				if (password.length > 0){
					sConfirm.controlEl.querySelector('input').focus();
				}
			}
		});

		const sConfirm = new Setting(container)
			.setName("Confirm:")
			.setDesc('')
			.addText( tc => {
				tc.inputEl.type = 'password';
				tc.onChange( v => {
					confirm = v;
					sPassword.setDesc( this.validatePassword(password) );
					sConfirm.setDesc( this.validateConfirm(password, confirm) );
				});
			} )
		;
		sConfirm.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				// validate confirm
				const passwordMatch = password === confirm;
				if (passwordMatch){
					sHint.controlEl.querySelector('input').focus();
				}
			}
		});


		const sHint = new Setting(container)
			.setName("Hint:")
			.addText((tc) =>{
				tc.onChange( v => {
					hint = v;
				});
			})
		;
		sHint.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				submit(password, confirm, hint);
			}
		});

		new Setting(container)
			.addButton( bc => {
				bc
					.setCta()
					.setIcon('go-to-file')
					.setTooltip('Edit')
					.onClick( (ev) => submit(password, confirm, hint) )
				;
			})
		;

		return container;
	}


	private createDecryptNoteView() : HTMLElement {
		const container = this.createInputContainer();

		new Setting(container)
			.setDesc('Please provide a password to unlock this note.')
		;

		new Setting(container)
			.setName("Password:")
			.addText((tc) =>{
				tc.inputEl.type = 'password';
				tc.inputEl.focus();
				tc.setValue(this.encryptionPassword)
				tc.setPlaceholder(this.formatHint(this.hint));
				tc.onChange((value) => {
					this.encryptionPassword = value;
				});
				tc.inputEl.onkeydown = async (ev) =>{
					if ( ev.key === 'Enter' ) {
						ev.preventDefault();
						await this.handleDecryptButtonClick();
					}
				}
			})
		;

		new Setting(container)
			.addButton( bc => {
				bc
					.setCta()
					.setIcon('checkmark')
					.setTooltip('Unlock & Edit')
					.onClick( (evt) => this.handleDecryptButtonClick() )
				;
			})
		;

		return container;
	}

	private async encodeAndSave( ){
		try{

			console.debug('encodeAndSave');
			
			var fileData = await FileDataHelper.encode(
				this.encryptionPassword,
				this.hint,
				this.currentEditorText
			);
			
			this.data = JsonFileEncoding.encode(fileData);
			
			this.requestSave();
		} catch(e){
			console.error(e);
			new Notice(e, 10000);
		}
	}

	private createEditorView() : HTMLElement {
		//const container = this.contentEl.createEl('textarea');
		const container = this.contentEl.createDiv();
		container.contentEditable = 'true';
		container.style.flexGrow = '1';
		container.style.alignSelf = 'stretch';

		//container.value = this.currentEditorText
		container.innerText = this.currentEditorText;
		container.focus();

		container.on('input', '*', async (ev, target) =>{
			console.debug('editor input',{ev, target});
			//this.currentEditorText = container.value;
			this.currentEditorText = container.innerText;
			await this.encodeAndSave();
		});
		return container;
	}

	private createInputContainer() : HTMLElement{
		return this.contentEl.createDiv( {
			'attr': {
				'style': 'width:100%; max-width:400px;'
			}
		} );
	}

	private createChangePasswordView() : HTMLElement {
		const container = this.createInputContainer();

		let newPassword = '';
		let confirm = '';
		let newHint = '';

		const submit = async (newPassword: string, confirm: string, newHint:string) => {
			var validPw = this.validatePassword(newPassword);
			var validCpw = this.validateConfirm(newPassword, confirm);
			sNewPassword.setDesc( validPw );
			sConfirm.setDesc( validCpw );

			if ( validPw.length === 0 && validCpw.length === 0 ){
				//set password and hint and open note
				console.debug('createChangePasswordView submit');
				this.encryptionPassword = newPassword;
				this.hint = newHint;

				this.encodeAndSave();
				this.refreshView( EncryptedFileContentViewStateEnum.editNote );
				new Notice('Password and Hint were changed');
			}
		}


		const sNewPassword = new Setting(container)
			.setName("New Password:")
			.setDesc('')
			.addText( tc => {
				tc.inputEl.type = 'password';
				tc.inputEl.focus();
				tc.onChange( v => {
					newPassword = v;
					sNewPassword.setDesc( this.validatePassword(newPassword) );
					sConfirm.setDesc( this.validateConfirm(newPassword, confirm) );
				} );
			} )
		;
		sNewPassword.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				// validate password
				if (newPassword.length > 0){
					sConfirm.controlEl.querySelector('input').focus();
				}
			}
		});

		const sConfirm = new Setting(container)
			.setName("Confirm:")
			.setDesc('')
			.addText( tc => {
				tc.inputEl.type = 'password';
				tc.onChange( v => {
					confirm = v;
					sNewPassword.setDesc( this.validatePassword(newPassword) );
					sConfirm.setDesc( this.validateConfirm(newPassword, confirm) );
				});
			} )
		;
		sConfirm.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				// validate confirm
				const passwordMatch = newPassword === confirm;
				if (passwordMatch){
					sHint.controlEl.querySelector('input').focus();
				}
			}
		});


		const sHint = new Setting(container)
			.setName("New Hint:")
			.addText((tc) =>{
				tc.onChange( v => {
					newHint = v;
				});
			})
		;
		sHint.controlEl.on('keydown', '*', (ev) =>{
			if ( ev.key === 'Enter' ) {
				ev.preventDefault();
				submit(newPassword, confirm, newHint);
			}
		});

		new Setting(container)
				.addButton( bc => {
				bc
					.removeCta()
					.setIcon('cross')
					//.setButtonText('Cancel')
					.setTooltip('Cancel')
					.onClick( () => {
						this.refreshView( EncryptedFileContentViewStateEnum.editNote );
					} )
				;
			}).addButton( bc => {
				bc
					.setCta()
					.setIcon('checkmark')
					.setTooltip('Change Password')
					//.setButtonText('Change Password')
					.setWarning()
					.onClick( (ev) => {
						submit(newPassword, confirm, newHint);
					} )
				;
			})
		;

		return container;
	}

	private formatHint( hint:string ): string{
		if (hint.length > 0){
			return `Hint: ${hint}`;
		}else{
			return '';
		}
	}

	private refreshView(
		newView: EncryptedFileContentViewStateEnum
	){
		
		console.debug('refreshView',{'currentView':this.currentView, newView});

		this.elActionIconLockNote.hide();
		this.elActionChangePassword.hide();

		// clear view
		this.contentEl.empty();

		this.currentView = newView;

		switch (this.currentView) {
			case EncryptedFileContentViewStateEnum.newNote:
				this.createTitle('This note will be encrypted');
				this.createNewNoteView();
			break;

			case EncryptedFileContentViewStateEnum.decryptNote:
				this.createTitle('This note is encrypted');
				this.createDecryptNoteView();
			break;
			
			case EncryptedFileContentViewStateEnum.editNote:
				this.elActionIconLockNote.show();
				this.elActionChangePassword.show();
				this.createTitle('This note is encrypted');
				this.createEditorView();
			break;

			case EncryptedFileContentViewStateEnum.changePassword:
				this.createTitle('Change encrypted note password');
				this.createChangePasswordView();
			break;
		}

	}

	async handleDecryptButtonClick() {
		var fileData = JsonFileEncoding.decode(this.data)
						
		console.debug('Decrypt button', fileData);

		const decryptedText = await FileDataHelper.decrypt(
			fileData,
			this.encryptionPassword
		);

		if (decryptedText === null){
			new Notice('Decryption failed');
		}else{
			//this.currentView = EncryptedFileContentViewStateEnum.editNote;
			this.currentEditorText = decryptedText;
			this.refreshView( EncryptedFileContentViewStateEnum.editNote);
		}

	}

	// important
	canAcceptExtension(extension: string): boolean {
		console.debug('EncryptedFileContentView.canAcceptExtension', {extension});
		return extension == 'encrypted';
	}

	// important
	getViewType() {
		return VIEW_TYPE_ENCRYPTED_FILE_CONTENT;
	}

	// the data to show on the view
	override setViewData(data: string, clear: boolean): void {
		console.debug('EncryptedFileContentView.setViewData', {
			data,
			clear,
			'pass':this.encryptionPassword,
			//'mode':this.getMode(),
			//'mode-data':this.currentMode.get(),
			//'preview-mode-data':this.previewMode.get()
		});

		if (clear){

			var newView : EncryptedFileContentViewStateEnum;
			if (data === ''){
				// blank new file
				newView = EncryptedFileContentViewStateEnum.newNote;
			}else{
				newView = EncryptedFileContentViewStateEnum.decryptNote;
			}
			
			// new file, we don't know what the password is yet
			this.encryptionPassword = '';

			// json decode file data to get the Hint
			var fileData = JsonFileEncoding.decode(this.data);
			
			this.hint = fileData.hint;
			
			this.refreshView( newView );

		}else{
			this.leaf.detach();
			new Notice('Multiple views of the same encrypted note isn\'t supported');
		}
		
	}

	// the data to save to disk
	override getViewData(): string {
		console.debug('EncryptedFileContentView.getViewData', {
			'this':this,
			'data':this.data,
		});
		
		return this.data;
	}

	override clear(): void {
		console.debug('EncryptedFileContentView.clear');
	}


}

class FileData{
	
	public version : string = "1.0";
	public hint: string;
	public encodedData:string;

	constructor( hint:string, encodedData:string ){
		this.hint = hint;
		this.encodedData = encodedData;
	}
}

class FileDataHelper{

	public static async encode( pass: string, hint:string, text:string ) : Promise<FileData>{
		const crypto = new CryptoHelper();
		const encryptedData = await crypto.encryptToBase64(text, pass);
		return new FileData(hint, encryptedData);
	}

	public static async decrypt( data: FileData, pass:string ) : Promise<string>{
		if ( data.encodedData == '' ){
			return '';
		}
		const crypto = new CryptoHelper();
		return await crypto.decryptFromBase64(data.encodedData, pass);
	}
}

class JsonFileEncoding {

	public static encode( data: FileData ) : string{
		return JSON.stringify(data, null, 2);
	}

	public static decode( encodedText:string ) : FileData{
		console.debug('JsonFileEncoding.decode',{encodedText});
		if (encodedText === ''){
			return new FileData( "", "" );
		}
		return JSON.parse(encodedText) as FileData;
	}
}