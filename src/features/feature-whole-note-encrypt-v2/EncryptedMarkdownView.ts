import { MarkdownView, Notice, TFile } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper";
import { IPasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService";
import PluginPasswordModal from "../../PluginPasswordModal";

export class EncryptedMarkdownView extends MarkdownView {

    static VIEW_TYPE = 'meld-encrypted-view';
    static EXTENSIONS = [ 'mdenc' ];

    passwordAndHint : IPasswordAndHint | null = null;
    encryptedData : FileData | null = null;
    
    isSavingEnabled = false;
    isLoadingFileInProgress = false;
    isSavingInProgress = false;
    
    override allowNoFile = false;

    origFile:TFile | null; // used resync password cache when renaming the file
    
    override getViewType(): string {
        return EncryptedMarkdownView.VIEW_TYPE;
    }

    override canAcceptExtension(extension: string): boolean {
        return EncryptedMarkdownView.EXTENSIONS.includes( extension );    
    }

    override async onLoadFile(file: TFile): Promise<void> {
        //console.debug('onLoadFile', {file});
        
        this.setUnencryptedViewData('', true);

        if (!this.app.workspace.layoutReady ){
            this.leaf.detach();
            return;
        };

        const fileContents = await this.app.vault.read( file );
        this.encryptedData = JsonFileEncoding.decode( fileContents );

        this.passwordAndHint = SessionPasswordService.getByFile( file );
        this.passwordAndHint.hint = this.encryptedData.hint;

        // try to decrypt the file content
        let decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
        while( decryptedText == null ){
            // prompt for password
            this.passwordAndHint = await new PluginPasswordModal(
                this.app,
                `Decypting "${file.basename}"`,
                false,
                false,
                this.passwordAndHint
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

        this.setUnencryptedViewData( decryptedText, true );
        
        this.isSavingEnabled = true; // allow saving after the file is loaded with a password

        this.isLoadingFileInProgress = true;
        try{
            this.origFile = file;
            await super.onLoadFile(file);
        }finally{
            this.isLoadingFileInProgress = false;
        }
        //console.debug('onLoadFile done');
    }



    override async onUnloadFile(file: TFile): Promise<void> {
        console.debug('onUnloadFile', {file});
        if ( this.passwordAndHint == null || this.encryptedData == null ) {
            return;
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
        super.setViewData(data, clear);
    }

    override setViewData(data: string, clear: boolean): void {
        // something is setting the view data, perhaps from reading from the
        // file... or some other plugin is adding some markdown

        if (this.file == null) {
            console.error('file == null');
            return;
        }

        if ( this.isLoadingFileInProgress ){
            return;
        }

        this.setUnencryptedViewData(data, clear);

    }

   
    override async save(clear?: boolean | undefined): Promise<void> {
        this.isSavingInProgress = true;
        try{
            
            if (this.file == null){
                console.debug('Saving was prevented beacuse there is no file loaded in the view yet');
                return;
            }

            if (!this.isSavingEnabled){
                console.debug('Saving was prevented because the file was not yet loaded with a password');
                return;
            }

            if (this.passwordAndHint == null){
                console.debug('Saving was prevented beacuse there is no password set');
                return;
            }
            
            const unencryptedDataToSave = this.getUnencryptedViewData();
            
            if ( JsonFileEncoding.isEncoded( unencryptedDataToSave ) ){
                // data is already encrypted, protect it from being overwritten
                console.debug('Saving was prevented beacuse the data was already encoded but it was expected to not be');
                return;
            }
            
            // build up-to-date encrypted dataS
            this.encryptedData = await FileDataHelper.encrypt(
                this.passwordAndHint.password,
                this.passwordAndHint.hint,
                unencryptedDataToSave
            );

            // call the real save.. which will call getViewData... getViewData will
            // decide whether to return encrypted or unencrypted data (encrypted
            // in this case becase this.isSavingInProgress is true)
            await super.save(clear);

        } finally{
            this.isSavingInProgress = false;
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
            SessionPasswordService.getByFile( this.file )
        );
            
        try{
            const newPwh = await pwm.openAsync();

            this.passwordAndHint = newPwh;
        
            SessionPasswordService.putByFile( newPwh, this.file );

            await this.save();

            new Notice( 'Password changed' );
        }catch(error){
            new Notice( 'Password wasn\'t changed' );
        }
	}


}
