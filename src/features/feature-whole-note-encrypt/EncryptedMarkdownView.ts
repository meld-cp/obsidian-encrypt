import { MarkdownView, Notice, TFile, ViewStateResult, setIcon } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { ENCRYPTED_FILE_EXTENSIONS } from "../../services/Constants.ts";
import {
	getReferencingNotePaths, imageFileToMarkdown, imageVaultFileToMarkdown, isImagePath, replaceImageReferences,
} from "../feature-canvas-encrypt/CanvasEmbeddedContent.ts";
import { CanvasConfirmationModal } from "../feature-canvas-encrypt/CanvasConfirmationModal.ts";

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
		this.registerDomEvent(this.contentEl, 'paste', event => { void this.handleImagePaste(event); }, true);
		const observer = new MutationObserver(() => this.decorateExternalImages());
		observer.observe(this.contentEl, { childList: true, subtree: true });
		this.register(() => observer.disconnect());

		// add view actions
		this.addAction(
			'key-round',
			'Change password',
			() => this.changePassword(),
		)

		this.addAction(
			'lock',
			'Lock & Close',
			() => this.lockAndClose(),
		)
	}

	private async handleImagePaste(event: ClipboardEvent): Promise<void> {
		const image = Array.from(event.clipboardData?.files ?? []).find(file => file.type.startsWith('image/'));
		if (image === undefined || !this.isSavingEnabled) return;
		event.preventDefault();
		event.stopImmediatePropagation();
		this.editor.replaceSelection(await imageFileToMarkdown(image));
		this.dataWasChangedSinceLastSave = true;
		await this.save();
	}

	private decorateExternalImages(): void {
		for (const image of Array.from(this.contentEl.querySelectorAll<HTMLImageElement>('img'))) {
			if (image.src.startsWith('data:') || image.dataset.meldImageDecorated === 'true') continue;
			const file = this.resolveRenderedImage(image);
			if (file === null) continue;
			image.dataset.meldImageDecorated = 'true';
			const container = image.parentElement;
			if (container === null) continue;
			container.classList.add('meld-unencrypted-image');
			const badge = container.createEl('span', { cls: 'meld-unencrypted-image-badge', text: 'UNENCRYPTED' });
			badge.setAttribute('aria-label', 'This image is stored unencrypted');
			const button = container.createEl('button', { cls: 'meld-image-encrypt-button' });
			setIcon(button, 'lock');
			button.setAttribute('aria-label', 'Encrypt and embed this image');
			button.addEventListener('click', (event: MouseEvent) => {
				event.preventDefault();
				event.stopPropagation();
				void this.encryptReferencedImage(file);
			});
		}
	}

	private resolveRenderedImage(image: HTMLImageElement): TFile | null {
		const resource = image.src.split('?')[0];
		for (const file of this.app.vault.getFiles()) {
			if (isImagePath(file.path) && this.app.vault.getResourcePath(file).split('?')[0] === resource) return file;
		}
		return null;
	}

	private async encryptReferencedImage(imageFile: TFile): Promise<void> {
		if (this.file === null) return;
		const references = getReferencingNotePaths(this.app, imageFile, this.file.path);
		const referenceWarning = references.length === 0
			? 'The original image file will be moved to the system trash after it is embedded.'
			: `The original image is also referenced by ${references.length} other note(s):\n\n${references.join('\n')}\n\nThose references will stop working.`;
		const confirmed = await new CanvasConfirmationModal(
			this.app, `Encrypt image "${imageFile.name}"?`, referenceWarning, 'Encrypt image',
		).openAsync();
		if (!confirmed || this.file === null) return;
		try {
			const replacement = await imageVaultFileToMarkdown(this.app, imageFile);
			const updated = replaceImageReferences(this.app, this.getUnencryptedViewData(), this.file.path, imageFile, replacement);
			if (updated.replacements === 0) throw new Error('Image reference was not found in the note');
			this.setUnencryptedViewData(updated.markdown, false);
			this.dataWasChangedSinceLastSave = true;
			await this.save();
			await this.app.vault.delete(imageFile, true);
			new Notice('Image encrypted and embedded');
		} catch (error) {
			console.error('Encrypted note image encryption failed', { path: imageFile.path, error });
			new Notice('Image was not encrypted');
		}
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

			if ( decryptedText == null ) {
				this.leaf.detach();
				return;
			}

			if ( this.passwordAndHint != null ) {
				SessionPasswordService.putByFile( this.passwordAndHint, file );
			}

			this.setUnencryptedViewData( decryptedText, false );
			queueMicrotask(() => this.decorateExternalImages());
			
			
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
		this.save();
		this.isSavingEnabled = false;
		this.leaf.detach();
	}

	override async onUnloadFile(file: TFile): Promise<void> {
		
		if ( this.passwordAndHint == null || this.encryptedData == null ) {
			return;
		}
		
		if (this.isSavingInProgress){
			console.info( 'Saving is in progress, but forcing another save because the file is being unloaded' );
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
			console.info( 'View data will not be set because file is null' )
			return;
		}

		if ( this.isLoadingFileInProgress ){
			return;
		}

		if ( !JsonFileEncoding.isEncoded(data) ){
			this.setUnencryptedViewData(data, clear);
			return;
		}

		console.info( 'View is being set with already encoded data, trying to decode', {data} );
		if (this.passwordAndHint == null){
			console.error('passwordAndHint == null');
			return;
		}
		const newEncoded = JsonFileEncoding.decode(data);
		
		FileDataHelper.decrypt( newEncoded, this.passwordAndHint.password ).then( decryptedText => {
			if ( decryptedText == null ){
				console.info('View was being set with already encoceded data but the decryption failed, closing view');
				this.isSavingEnabled = false; // don't overwrite the data when we detach
				this.leaf.detach();
				return;
			}
			this.setUnencryptedViewData(decryptedText, clear);
		});
		
	}

	override async setState(state: any, result: ViewStateResult): Promise<void> {
		//console.debug('setState', state, result, this.cachedUnencryptedData);
		if ( state.mode == 'preview' ){
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

	override async save(clear?: boolean | undefined): Promise<void> {
		console.debug('save', { clear });
		if ( this.isSavingInProgress ) {
			console.info('Saving was prevented because another save is in progress, Obsidian will try again later if the content changed.');
			return;
		}

		this.isSavingInProgress = true;
		this.setViewBusy( true );
		try{
			
			if (this.file == null){
				console.info('Saving was prevented beacuse there is no file loaded in the view yet');
				return;
			}

			if ( !ENCRYPTED_FILE_EXTENSIONS.includes( this.file.extension ) ){
				console.info('Saving was prevented because the file is not an encrypted file');
				return;
			}

			if (!this.isSavingEnabled){
				if (this.passwordAndHint == null){
					console.info('Saving was prevented because the file was not yet loaded with a password');
				}else{
					console.info('Saving was prevented because it was explicitly disabled');
				}
				return;
			}

			if (this.passwordAndHint == null){
				console.info('Saving was prevented beacuse there is no password set');
				return;
			}
			
			const unencryptedDataToSave = this.getUnencryptedViewData();
			
			if ( JsonFileEncoding.isEncoded( unencryptedDataToSave ) ){
				// data is already encrypted, protect it from being overwritten
				console.info('Saving was prevented beacuse the data was already encoded but it was expected to not be');
				return;
			}

			if (
				!this.dataWasChangedSinceLastSave
				&& this.cachedUnencryptedData.length == unencryptedDataToSave.length
				&& this.cachedUnencryptedData == unencryptedDataToSave
			){
				console.info('Saving was prevented because the data was not changed');
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
			console.info('Unable to change password beacuse there is no file loaded in the view yet');
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
		}catch(error){
			new Notice( 'Password wasn\'t changed' );
		}
	}


}
