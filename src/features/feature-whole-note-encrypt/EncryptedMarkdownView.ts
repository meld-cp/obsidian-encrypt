import { MarkdownView, Notice, TFile, ViewStateResult } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { ENCRYPTED_FILE_EXTENSIONS } from "../../services/Constants.ts";

export class EncryptedMarkdownView extends MarkdownView {

	static VIEW_TYPE = 'meld-encrypted-view';

	passwordAndHint : PasswordAndHint | null = null;
	encryptedData : FileData | null = null;
	cachedUnencryptedData : string = '';
	dataWasChangedSinceLastSave = false;
	
	isSavingEnabled = false;
	isLoadingFileInProgress = false;
	isSavingInProgress = false;
	
	override allowNoFile = false;

	origFile:TFile | null; // used resync password cache when renaming the file
	
	override getViewType(): string {
		return EncryptedMarkdownView.VIEW_TYPE;
	}

	override canAcceptExtension(extension: string): boolean {
		return ENCRYPTED_FILE_EXTENSIONS.includes( extension );
	}

	protected override async onOpen(): Promise<void> {
		await super.onOpen();

		// add view actions
		this.addAction(
			'key-round',
			'Change password',
			() => this.changePassword(),
		)

		this.addAction(
			'lock',
			'Lock & Close',
			() => { this.lockAndClose(); },
		)
	}

	override async onLoadFile(file: TFile): Promise<void> {
		//console.debug('onLoadFile', {file});
		this.setViewBusy( true );
		try{

			this.setUnencryptedViewData('', true);

			if (!this.app.workspace.layoutReady ){
				this.leaf.detach();
				return;
			};

			const fileContents = await this.app.vault.read( file );
			this.encryptedData = JsonFileEncoding.decode( fileContents );

			this.passwordAndHint = await SessionPasswordService.getByFile( file );
			this.passwordAndHint.hint = this.encryptedData.hint;

			// try to decrypt the file content
			let decryptedText: string|null = null;

			if ( this.passwordAndHint.password.length > 0 ) {
				decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
			}
			while( decryptedText == null ){
				// prompt for password
				this.passwordAndHint = await new PluginPasswordModal(
					this.app,
					`Decrypting "${file.basename}"`,
					false,
					false,
					{ password: '', hint: this.encryptedData.hint }
				).open2Async();

				if ( this.passwordAndHint == null ) {
					// user cancelled
					this.leaf.detach();
					return;
				}

				decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
				if ( decryptedText == null ) {
					new Notice('Decryption failed');
				}
			}

			SessionPasswordService.putByFile( this.passwordAndHint, file );

			this.setUnencryptedViewData( decryptedText, false );
			
			this.isLoadingFileInProgress = true;
			try{
				this.origFile = file;
				await super.onLoadFile(file);
			}finally{
				this.isLoadingFileInProgress = false;
				this.isSavingEnabled = true; // allow saving after the file is loaded with a password
			}

		}finally{
			//console.debug('onLoadFile done');
			this.setViewBusy( false );
		}

	}

	private setViewBusy( busy: boolean ) {
		if ( busy ) {
			this.contentEl.style.cursor = 'wait';
		} else {
			this.contentEl.style.cursor = 'auto';
		}
	}

	public detachSafely(){
		this
			.save()
			.then( () => {
				this.isSavingEnabled = false;
				this.leaf.detach();
			})
			.catch( (reason:unknown) => {
				console.error('Failed to save the file before detaching the view', reason);
				new Notice('Failed to save the file before detaching the view');
			})
		;
	}

	override async onUnloadFile(file: TFile): Promise<void> {
		
		if ( this.passwordAndHint == null || this.encryptedData == null ) {
			return;
		}
		
		if (this.isSavingInProgress){
			console.debug( 'Saving is in progress, but forcing another save because the file is being unloaded' );
			this.isSavingInProgress = false;
			this.dataWasChangedSinceLastSave = true;
		}
		await super.onUnloadFile(file);
	}
	
	override async onRename(file: TFile): Promise<void> {
		//console.debug('onRename', { newfile: file, oldfile:this.file});
		if (this.origFile){
			SessionPasswordService.clearForFile( this.origFile );
		}

		if (this.passwordAndHint!=null){
			SessionPasswordService.putByFile( this.passwordAndHint, file );
		}
		await super.onRename(file);    
	}


	private getUnencryptedViewData(): string {
		return super.getViewData();
	}

	override getViewData(): string {
		// something is reading the data.. maybe to save it

		if (this.isSavingInProgress) {
			if ( this.encryptedData == null ) {
				throw new Error('encryptedData is unexpectedly null');
			}
			// return the encrypted data which should have just been updated in the save method
			return JsonFileEncoding.encode( this.encryptedData );
		}
		
		// not saving, so return the unencrypted view data
		return this.getUnencryptedViewData();
	}

	private setUnencryptedViewData(data: string, clear: boolean): void {
		//console.debug('setUnencryptedViewData', {data, clear});
		this.cachedUnencryptedData = data;
		super.setViewData(data, false);
	}

	override setViewData(data: string, clear: boolean): void {
		// something is setting the view data, perhaps from reading from the
		// file... or some other plugin is adding some markdown

		//console.debug('setViewData', {data, clear});

		if ( this.file == null ) {
			console.debug( 'View data will not be set because file is null' )
			return;
		}

		if ( this.isLoadingFileInProgress ){
			return;
		}

		try{
			console.debug( 'View is being set with encoded FileData, trying to decode', {data} );
			if (this.passwordAndHint == null){
				console.error('passwordAndHint == null');
				return;
			}
			const newEncoded = JsonFileEncoding.decode(data);
			
			FileDataHelper.decrypt( newEncoded, this.passwordAndHint.password ).then( decryptedText => {
				if ( decryptedText == null ){
					console.debug('View was being set with encoded data but the decryption failed, closing view');
					this.isSavingEnabled = false; // don't overwrite the data when we detach
					this.leaf.detach();
					return;
				}
				this.setUnencryptedViewData(decryptedText, clear);
			}).catch( (reason:unknown) => {
				console.error('Failed to decrypt the data that was set to the view', reason);
				new Notice('Failed to decrypt the data that was set to the view');
			});
		}catch{
			this.dataWasChangedSinceLastSave = true;
			this.setUnencryptedViewData(data, clear);
			return;
		}

	}

	override async setState(state: unknown, result: ViewStateResult): Promise<void> {
		//console.debug('setState', state, result, this.cachedUnencryptedData);
		if ( typeof state === 'object' && state != null && 'mode' in state && state.mode == 'preview' ){
			await this.save(); // save before preview
		}
		this.isSavingEnabled = false;
		try{
			await super.setState(state, result);
			super.setViewData(this.cachedUnencryptedData, false);
		}finally{
			this.isSavingEnabled = true;
		}
		//console.debug('setState done');
	}

	override async save(clear?: boolean): Promise<void> {
		console.debug('save', { clear });
		if ( this.isSavingInProgress ) {
			console.debug('Saving was prevented because another save is in progress, Obsidian will try again later if the content changed.');
			return;
		}

		this.isSavingInProgress = true;
		this.setViewBusy( true );
		try{
			
			if (this.file == null){
				console.debug('Saving was prevented beacuse there is no file loaded in the view yet');
				return;
			}

			if ( !ENCRYPTED_FILE_EXTENSIONS.includes( this.file.extension ) ){
				console.debug('Saving was prevented because the file is not an encrypted file');
				return;
			}

			if (!this.isSavingEnabled){
				if (this.passwordAndHint == null){
					console.debug('Saving was prevented because the file was not yet loaded with a password');
				}else{
					console.debug('Saving was prevented because it was explicitly disabled');
				}
				return;
			}

			if (this.passwordAndHint == null){
				console.debug('Saving was prevented beacuse there is no password set');
				return;
			}
			
			const unencryptedDataToSave = this.getUnencryptedViewData();
			// If the file was opened from an older encryption format, rewrite it as v3 on the next save.
			const needsVersionUpgrade = this.encryptedData != null && this.encryptedData.version !== FileDataHelper.DEFAULT_VERSION;
			
			if (
				!needsVersionUpgrade
				&& !this.dataWasChangedSinceLastSave
				&& this.cachedUnencryptedData.length == unencryptedDataToSave.length
				&& this.cachedUnencryptedData == unencryptedDataToSave
			){
				console.debug('Saving was prevented because the data was not changed');
				return;
			}

			this.setUnencryptedViewData(unencryptedDataToSave, false);

			// build up-to-date encrypted data
			this.encryptedData = await FileDataHelper.encrypt(
				this.passwordAndHint.password,
				this.passwordAndHint.hint,
				unencryptedDataToSave
			);

			// call the real save.. which will call getViewData... getViewData will
			// decide whether to return encrypted or unencrypted data (encrypted
			// in this case becase this.isSavingInProgress is true)
			await super.save(clear);

			this.dataWasChangedSinceLastSave = false;

		} finally{
			this.isSavingInProgress = false;
			this.setViewBusy( false );
		}
		
	}

	lockAndClose() {
		this.detachSafely();
		if ( this.file != null ){
			SessionPasswordService.clearForFile( this.file );
		}
	}

	async changePassword(): Promise<void> {
		if (this.file == null){
			console.debug('Unable to change password beacuse there is no file loaded in the view yet');
			return;
		}

		// fetch password
		const pwm = new PluginPasswordModal(
			this.app,
			`Change password for "${this.file.basename}"`,
			true,
			true,
			await SessionPasswordService.getByFile( this.file )
		);
			
		try{
			const newPwh = await pwm.openAsync();

			this.passwordAndHint = newPwh;
		
			SessionPasswordService.putByFile( newPwh, this.file );

			this.dataWasChangedSinceLastSave = true;
			await this.save();

			new Notice( 'Password changed' );
		} catch {
			new Notice( 'Password wasn\'t changed' );
		}
	}


}
