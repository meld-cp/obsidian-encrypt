import { MarkdownRenderer, Menu, Notice, Setting, TextFileView } from 'obsidian';
import { WorkspaceLeaf } from "obsidian";
import { SessionPasswordService } from 'src/services/SessionPasswordService';
import { UiHelper } from 'src/services/UiHelper';
import { CryptoHelper } from '../../services/CryptoHelper';
import { IFeatureWholeNoteEncryptSettings } from './IFeatureWholeNoteEncryptSettings';

enum EncryptedFileContentViewStateEnum{
	init,
	decryptNote,
	editNote,
	changePassword,
	newNote
}

export enum EditViewEnum{
	source = 'Source',
	reading = 'Reading',
}

export const VIEW_TYPE_ENCRYPTED_FILE_CONTENT = "meld-encrypted-file-content-view";
export class EncryptedFileContentView extends TextFileView {
	
	private iconReadingView = 'book-open';
	private iconSourceView = 'code';
	private iconToggleEditView = 'edit';
	private iconLockFile = 'lock';
	private iconChangePassword = 'key';

	// State
	currentView : EncryptedFileContentViewStateEnum = EncryptedFileContentViewStateEnum.init;
	encryptionPassword = '';
	hint = '';
	currentEditorSourceText = '';
	defaultEditNoteView : EditViewEnum;
	currentEditNoteMode : EditViewEnum; 
	// end state
	
	elActionIconLockNote : HTMLElement;
	elActionChangePassword : HTMLElement;
	elActionEditView : HTMLElement;
	elActionReadingView : HTMLElement;

	constructor( leaf: WorkspaceLeaf, settings:IFeatureWholeNoteEncryptSettings ) {
		super(leaf);

		this.defaultEditNoteView = ( settings.defaultView as EditViewEnum ) ?? EditViewEnum.source;
		this.currentEditNoteMode = this.defaultEditNoteView;

		this.elActionEditView = this.addAction( this.iconSourceView, 'Source', () => this.actionToggleEditMode() );
		this.elActionReadingView = this.addAction( this.iconReadingView, 'Reading', () => this.actionToggleEditMode() );
		this.elActionIconLockNote = this.addAction( this.iconLockFile, 'Lock', () => this.actionLockFile() );
		this.elActionChangePassword = this.addAction( this.iconChangePassword, 'Change Password', () => this.actionChangePassword() );
		
		this.elActionEditView.hide();
		this.elActionReadingView.hide();
		this.elActionIconLockNote.hide();
		this.elActionChangePassword.hide();
	}

	private actionToggleEditMode(){
		if ( this.currentView != EncryptedFileContentViewStateEnum.editNote ){
			return;
		}

		if ( this.currentEditNoteMode == EditViewEnum.reading ){
			this.currentEditNoteMode = EditViewEnum.source;
		}else if ( this.currentEditNoteMode == EditViewEnum.source ){
			this.currentEditNoteMode = EditViewEnum.reading;
		}

		this.refreshView(EncryptedFileContentViewStateEnum.editNote);	
	}

	private actionLockFile(){
		this.encryptionPassword = '';
		SessionPasswordService.clearForPath( this.file.path );
		this.refreshView(EncryptedFileContentViewStateEnum.decryptNote);
	}

	private actionChangePassword(){
		this.refreshView(EncryptedFileContentViewStateEnum.changePassword);
	}

	override onPaneMenu(menu: Menu, source: string): void {
		//console.debug( {menu, source, 'view': this.currentView});
		if (
			source == 'tab-header'
			&& this.currentView == EncryptedFileContentViewStateEnum.editNote
		){
			menu.addItem( m =>{
				m
					.setSection('action')
					.setIcon( this.iconToggleEditView )
					.setTitle('Toggle Editing/Reading')
					.onClick( () => this.actionToggleEditMode() )
				;
			});
			menu.addItem( m =>{
				m
					.setSection('action')
					.setIcon( this.iconLockFile )
					.setTitle('Lock')
					.onClick( () => this.actionLockFile() )
				;
			});
			menu.addItem( m =>{
				m
					.setSection('action')
					.setIcon( this.iconChangePassword )
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
				// initial content of new note
				this.currentEditorSourceText = `# ${this.file.basename}`;

				await this.encodeAndSave();
				
				SessionPasswordService.putByPath( { password: password, hint: hint }, this.file.path );

				this.currentEditNoteMode = EditViewEnum.source;
				this.refreshView(EncryptedFileContentViewStateEnum.editNote);

			}
		}

		const bestGuessPassAndHint = SessionPasswordService.getByPath( this.file.path );
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
		const bestGuessPassAndHint = SessionPasswordService.getByPath( this.file.path );
		this.encryptionPassword = bestGuessPassAndHint.password;
		
		this.decryptWithPassword( bestGuessPassAndHint.password )
			.then( decryptedText => {
				if ( decryptedText != null ){
					this.currentEditorSourceText = decryptedText;
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
				this.currentEditorSourceText
			);
			
			this.data = JsonFileEncoding.encode(fileData);
			
			this.requestSave();
		} catch(e){
			console.error(e);
			new Notice(e, 10000);
		}
	}

	private addEditorSourceView() {

		this.elActionReadingView.show();
		this.elActionIconLockNote.show();
		this.elActionChangePassword.show();

		this.addTitle('Editing an encrypted note');

		// build source view
		const container = this.contentEl.createDiv( { cls:'editor-source-view' } );
		container.contentEditable = 'true';
		container.innerText = this.currentEditorSourceText;

		container.focus();

		container.on('input', '*', async (ev, target) =>{
			console.debug({container});
			this.currentEditorSourceText = container.innerText;
			await this.encodeAndSave();
		});
	
	}

	private addEditorReadingView() {

		this.elActionEditView.show();
		this.elActionIconLockNote.show();
		this.elActionChangePassword.show();

		this.addTitle('Reading an encrypted note');

		const container = this.contentEl.createDiv({cls:'editor-reading-view'});

		// build reading view
		MarkdownRenderer.renderMarkdown(
			this.currentEditorSourceText,
			container,
			this.file.path,
			this
		);
		
	}

	private addInputContainer() : HTMLElement{
		return this.contentEl.createDiv();
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

				SessionPasswordService.putByPath( {password: newPassword, hint: newHint}, this.file.path );

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
		this.elActionEditView.hide();
		this.elActionReadingView.hide();
		this.elActionIconLockNote.hide();
		this.elActionChangePassword.hide();

		// clear view
		this.contentEl.empty();
		this.contentEl.classList.add('meld-encrypt-encrypted-note-view');
		//TODO: add is-readable-line-width class if needed

		this.currentView = newView;

		switch (this.currentView) {
			case EncryptedFileContentViewStateEnum.newNote:
				this.addNewNoteView();
			break;

			case EncryptedFileContentViewStateEnum.decryptNote:
				this.addDecryptNoteView();
			break;
			
			case EncryptedFileContentViewStateEnum.editNote:
				if ( this.currentEditNoteMode == EditViewEnum.source ){
					this.addEditorSourceView();
				} else{
					// default to reading
					this.addEditorReadingView();
				}
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
			SessionPasswordService.putByPath( {password: this.encryptionPassword, hint: this.hint }, this.file.path );
			this.currentEditorSourceText = decryptedText;
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