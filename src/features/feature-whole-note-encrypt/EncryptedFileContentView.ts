import { Menu, Notice, Setting, TextFileView } from 'obsidian';
import { WorkspaceLeaf } from "obsidian";
import { SessionPasswordService } from 'src/services/SessionPasswordService';
import { UiHelper } from 'src/services/UiHelper';
import { CryptoHelper } from '../../services/CryptoHelper';

enum EncryptedFileContentViewStateEnum{
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
	encryptionPassword = '';
	hint = '';
	currentEditorText = '';
	// end state
	
	elActionIconLockNote : HTMLElement;
	elActionChangePassword : HTMLElement;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);

		//console.debug('EncryptedFileContentView.constructor', {leaf});

		this.elActionIconLockNote = this.addAction( 'lock', 'Lock', () => this.actionLockFile() );
		this.elActionChangePassword = this.addAction( 'key', 'Change Password', () => this.actionChangePassword() );
		this.elActionIconLockNote.hide();
		this.elActionChangePassword.hide();
		
		this.contentEl.style.display = 'flex';
		this.contentEl.style.flexDirection = 'column';
		this.contentEl.style.alignItems = 'center';

	}

	private actionLockFile(){
		this.encryptionPassword = '';
		SessionPasswordService.clearForFile( this.file );
		this.refreshView(EncryptedFileContentViewStateEnum.decryptNote);
	}

	private actionChangePassword(){
		this.refreshView(EncryptedFileContentViewStateEnum.changePassword);
	}

	override onPaneMenu(menu: Menu, source: string): void {
		//console.debug( {menu, source, 'view': this.currentView});
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

	private addTitle( title:string ) : HTMLElement{
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

	private addNewNoteView() {
		
		this.addTitle('This note will be encrypted');

		//console.debug('createDecryptNoteView', { "hint": this.hint} );
		const container = this.addInputContainer();

		new Setting(container)
			.setDesc('Please provide a password and hint to start editing this note.')
		;

		const submit = async (password: string, confirm: string, hint:string) => {
			const validPw = this.validatePassword(password);
			const validCpw = this.validateConfirm(password, confirm);
			sPassword.setDesc( validPw );
			sConfirm.setDesc( validCpw );

			if ( validPw.length === 0 && validCpw.length === 0 ){
				
				//set password and hint and open note
				this.encryptionPassword = password;
				this.hint = hint;
				this.currentEditorText = this.file.basename;

				await this.encodeAndSave();
				
				SessionPasswordService.put( { password: password, hint: hint }, this.file );

				this.refreshView(EncryptedFileContentViewStateEnum.editNote);

			}
		}

		const bestGuessPassAndHint = SessionPasswordService.get( this.file );
		let password = bestGuessPassAndHint.password;
		let confirm = '';
		let hint = bestGuessPassAndHint.hint;

		const sPassword = UiHelper.buildPasswordSetting({
			container,
			name:'Password:',
			autoFocus : true,
			initialValue: password,
			onChangeCallback: (value) => {
				password = value;
				sPassword.setDesc( this.validatePassword(password) );
				sConfirm.setDesc( this.validateConfirm(password, confirm) );
			},
			onEnterCallback: (value)=>{
				password = value;
				if (password.length > 0){
					sConfirm.controlEl.querySelector('input')?.focus();
				}
			}
		});

		const sConfirm = UiHelper.buildPasswordSetting({
			container,
			name:'Confirm:',
			autoFocus : false,
			onChangeCallback: (value) => {
				confirm = value;
				sPassword.setDesc( this.validatePassword(password) );
				sConfirm.setDesc( this.validateConfirm(password, confirm) );
			},
			onEnterCallback: (value) =>{
				confirm = value;
				const passwordMatch = password === confirm;
				if (passwordMatch){
					sHint.controlEl.querySelector('input')?.focus();
				}
			}
		});

		const sHint = new Setting(container)
			.setName("Hint:")
			.addText((tc) =>{
				tc.setValue(hint);
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

	}

	private addDecryptNoteView() {
		
		this.addTitle('This note is encrypted');

		const container = this.addInputContainer();
		
		new Setting(container)
			.setDesc('Please provide a password to unlock this note.')
		;

		UiHelper.buildPasswordSetting({
			container,
			name:'Password:',
			autoFocus : true,
			placeholder: this.formatHint(this.hint),
			onChangeCallback: (value) => {
				this.encryptionPassword = value;
			},
			onEnterCallback: async () => await this.handleDecryptButtonClick()
		});

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

		// try to decode and go to edit mode if password is known
		const bestGuessPassAndHint = SessionPasswordService.get( this.file );
		this.encryptionPassword = bestGuessPassAndHint.password;
		
		this.decryptWithPassword( bestGuessPassAndHint.password )
			.then( decryptedText => {
				if ( decryptedText != null ){
					this.currentEditorText = decryptedText;
					this.refreshView( EncryptedFileContentViewStateEnum.editNote );
					new Notice('Decrypted using remembered password', 2000);
				}
			})
		;


	}

	private async encodeAndSave( ){
		try{

			//console.debug('encodeAndSave');
			
			const fileData = await FileDataHelper.encode(
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

	private addEditorView() {

		this.elActionIconLockNote.show();
		this.elActionChangePassword.show();

		this.addTitle('This note is encrypted');

		const container = this.contentEl.createDiv();
		container.contentEditable = 'true';
		container.style.flexGrow = '1';
		container.style.alignSelf = 'stretch';

		container.innerText = this.currentEditorText;
		container.focus();

		container.on('input', '*', async (ev, target) =>{
			this.currentEditorText = container.innerText;
			await this.encodeAndSave();
		});
	}

	private addInputContainer() : HTMLElement{
		return this.contentEl.createDiv( {
			'attr': {
				'style': 'width:100%; max-width:400px;'
			}
		} );
	}

	private addChangePasswordView() {

		this.addTitle('Change encrypted note password');

		const container = this.addInputContainer();

		let newPassword = '';
		let confirm = '';
		let newHint = '';

		const submit = async (newPassword: string, confirm: string, newHint:string) => {
			const validPw = this.validatePassword(newPassword);
			const validCpw = this.validateConfirm(newPassword, confirm);
			sNewPassword.setDesc( validPw );
			sConfirm.setDesc( validCpw );

			if ( validPw.length === 0 && validCpw.length === 0 ){
				//set password and hint and open note
				//console.debug('createChangePasswordView submit');
				this.encryptionPassword = newPassword;
				this.hint = newHint;

				this.encodeAndSave();
				this.refreshView( EncryptedFileContentViewStateEnum.editNote );

				SessionPasswordService.put( {password: newPassword, hint: newHint}, this.file );

				new Notice('Password and Hint were changed');
			}
		}

		const sNewPassword = UiHelper.buildPasswordSetting({
			container,
			name: 'New Password:',
			autoFocus: true,
			onChangeCallback: (value) =>{
				newPassword = value;
				sNewPassword.setDesc( this.validatePassword(newPassword) );
				sConfirm.setDesc( this.validateConfirm(newPassword, confirm) );
			},
			onEnterCallback: (value) =>{
				newPassword = value;
				if (newPassword.length > 0){
					sConfirm.controlEl.querySelector('input')?.focus();
				}
			}
		});

		const sConfirm = UiHelper.buildPasswordSetting({
			container,
			name: 'Confirm:',
			onChangeCallback: (value) =>{
				confirm = value;
				sNewPassword.setDesc( this.validatePassword(newPassword) );
				sConfirm.setDesc( this.validateConfirm(newPassword, confirm) );
			},
			onEnterCallback: (value) =>{
				confirm = value;
				// validate confirm
				const passwordMatch = newPassword === confirm;
				if (passwordMatch){
					sHint.controlEl.querySelector('input')?.focus();
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
		
		//console.debug('refreshView',{'currentView':this.currentView, newView});

		this.elActionIconLockNote.hide();
		this.elActionChangePassword.hide();

		// clear view
		this.contentEl.empty();

		this.currentView = newView;

		switch (this.currentView) {
			case EncryptedFileContentViewStateEnum.newNote:
				this.addNewNoteView();
			break;

			case EncryptedFileContentViewStateEnum.decryptNote:
				this.addDecryptNoteView();
			break;
			
			case EncryptedFileContentViewStateEnum.editNote:
				this.addEditorView();
			break;

			case EncryptedFileContentViewStateEnum.changePassword:
				this.addChangePasswordView();
			break;
		}

	}

	async decryptWithPassword( pw: string ) : Promise<string | null>{
		if ( pw.length == 0 ){
			return null;
		}
		const fileData = JsonFileEncoding.decode( this.data );
		const decryptedText = await FileDataHelper.decrypt( fileData, pw );
		return decryptedText;
	}

	async handleDecryptButtonClick() {
		const decryptedText = await this.decryptWithPassword( this.encryptionPassword );

		if (decryptedText === null){
			new Notice('Decryption failed');
		}else{
			SessionPasswordService.put( {password: this.encryptionPassword, hint: this.hint }, this.file );
			this.currentEditorText = decryptedText;
			this.refreshView( EncryptedFileContentViewStateEnum.editNote);
		}

	}

	// important
	canAcceptExtension(extension: string): boolean {
		//console.debug('EncryptedFileContentView.canAcceptExtension', {extension});
		return extension == 'encrypted';
	}

	// important
	getViewType() {
		return VIEW_TYPE_ENCRYPTED_FILE_CONTENT;
	}

	// the data to show on the view
	override setViewData(data: string, clear: boolean): void {
		// console.debug('EncryptedFileContentView.setViewData', {
		// 	data,
		// 	clear,
		// 	'pass':this.encryptionPassword,
		// 	//'mode':this.getMode(),
		// 	//'mode-data':this.currentMode.get(),
		// 	//'preview-mode-data':this.previewMode.get()
		// });

		if (clear){

			let newView : EncryptedFileContentViewStateEnum;
			if (data === ''){
				// blank new file
				newView = EncryptedFileContentViewStateEnum.newNote;
			}else{
				newView = EncryptedFileContentViewStateEnum.decryptNote;
			}
			
			// new file, we don't know what the password is yet
			this.encryptionPassword = '';

			// json decode file data to get the Hint
			const fileData = JsonFileEncoding.decode(this.data);
			
			this.hint = fileData.hint;
			
			this.refreshView( newView );

		}else{
			this.leaf.detach();
			new Notice('Multiple views of the same encrypted note isn\'t supported');
		}
		
	}

	// the data to save to disk
	override getViewData(): string {
		// console.debug('EncryptedFileContentView.getViewData', {
		// 	'this':this,
		// 	'data':this.data,
		// });
		
		return this.data;
	}

	override clear(): void {
		//console.debug('EncryptedFileContentView.clear');
	}


}

class FileData{
	
	public version = "1.0";
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

	public static async decrypt( data: FileData, pass:string ) : Promise<string|null>{
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
		//console.debug('JsonFileEncoding.decode',{encodedText});
		if (encodedText === ''){
			return new FileData( "", "" );
		}
		return JSON.parse(encodedText) as FileData;
	}
}