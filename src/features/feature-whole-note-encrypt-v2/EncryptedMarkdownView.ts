import { MarkdownView, Notice, TFile, WorkspaceLeaf } from "obsidian";
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

    origFile:TFile | null;
    
    override async onLoadFile(file: TFile): Promise<void> {
        console.debug('onLoadFile', {file});
        this.isLoadingFileInProgress = true;
        try{
            this.origFile = file;
            await super.onLoadFile(file);
        }finally{
            this.isLoadingFileInProgress = false;
        }
        console.debug('onLoadFile done');
    }

    override getViewType(): string {
        return EncryptedMarkdownView.VIEW_TYPE;
    }

    override canAcceptExtension(extension: string): boolean {
        return EncryptedMarkdownView.EXTENSIONS.includes( extension );    
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

    private getViewDataFinal(): string {
        return super.getViewData();
    }

    override getViewData(): string {
        // something is reading the data.. maybe to save it
        const isSavingInProgress = this.isSavingInProgress;
        const unencryptedViewData = super.getViewData();
        const encryptedData = this.encryptedData;
        console.debug('EncryptedMarkdownView.getViewData', {
            isSavingInProgress,
            unencryptedViewData,
            encryptedData
        })

        if (isSavingInProgress) {
            return JsonFileEncoding.encode( this.encryptedData! );
        }
        
        return unencryptedViewData;
    }

    private setViewDataFinal(data: string, clear: boolean): void {
        super.setViewData(data, clear);
    }

    override setViewData(data: string, clear: boolean): void {
        // something is setting the view data, perhaps from reading from the
        // file... or some other plugin is adding some markdown

        console.debug('setViewData', {isLoadingFile:this.isLoadingFileInProgress, data, clear});

        if (this.file == null) {
            //this.setViewDataFinal(data, clear);
            return;
        }

        if ( this.isLoadingFileInProgress ){

            // data should be encoded
            if ( !JsonFileEncoding.isEncoded(data) ){
                new Notice('Expected the file data to be encoded, but it is not');
                this.leaf.detach();
                return;
            }

            this.passwordAndHint = null;
            this.encryptedData = JsonFileEncoding.decode( data );

            // kick off decryption task
            this.fetchPasswordAndHint( this.encryptedData.hint ).then( async passwordAndHint => {
                await this.tryDecryptingFileContent(passwordAndHint, true );
            }).catch( err => {
                new Notice(err ?? 'Failed to decrypt file');
                this.leaf.detach();
            });

            return;
        }

        this.setViewDataFinal(data, clear);

    }

    async fetchPasswordAndHint( hint: string ) : Promise<IPasswordAndHint> {
        if (this.file == null) {
            throw new Error('file == null');
        }
        
        if (this.passwordAndHint != null) {
            return this.passwordAndHint;
        }

        const cpwh = SessionPasswordService.getByFileOrNull( this.file );
        if ( cpwh != null ) {
            return cpwh;
        }

        // prompt for password
        const pwm = new PluginPasswordModal(
             this.app,
             'Please provide a password',
             false,
             false,
             { password: '', hint }
         );

         return await pwm.openAsync();
        
    }

    // async fetchNewPasswordAndHint() : Promise<IPasswordAndHint> {
    //     if (this.file == null) {
    //         throw new Error('file == null');
    //     }
        
    //     // prompt for password
    //     const pwm = new PluginPasswordModal(
    //          this.app,
    //          'Please provide a password',
    //          true,
    //          true,
    //          null
    //      );

    //      return await pwm.openAsync();
        
    // }

    async tryDecryptingFileContent( pwh:IPasswordAndHint, reprompt: boolean ) : Promise<void> {
        this.isSavingEnabled = false;

        if (this.encryptedData == null) {
            throw new Error('encryptedData == null');
        }
        
        if (this.file == null) {
            throw new Error('file == null');
        }

        
        // try to decrypt the file content
        const decryptedText = await FileDataHelper.decrypt( this.encryptedData, pwh.password );
        
        if ( decryptedText == null) {
            
            if ( !reprompt ) {
                throw new Error('Decryption failed');
            }
            const pwm = new PluginPasswordModal(
                this.app,
                'Please provide a password to decrypt',
                false,
                false,
                { password: '', hint: this.encryptedData.hint }
            );
   
            const rpwh = await pwm.openAsync();
            rpwh.hint = this.encryptedData.hint;

            await this.tryDecryptingFileContent( rpwh, true );

            return;
        }


        // decryption succeeded
        pwh.hint = this.encryptedData.hint; // always use the hint encoded in the file
        this.passwordAndHint = pwh;
        
        // save the password in the cache
        SessionPasswordService.putByFile( this.passwordAndHint, this.file );
        
        // set the view data
        this.setViewDataFinal( decryptedText, false );

        this.isSavingEnabled = true;

    }
    
    
   
    override async save(clear?: boolean | undefined): Promise<void> {
        this.isSavingInProgress = true;
        try{

            if (!this.isSavingEnabled){
                new Notice('Unable to save, saving is disabled');
                return;
            }
            
            if (this.file == null){
                return;
            }
            if (this.passwordAndHint == null){
                new Notice('Unable to save, no password set');
                return;
            }
            
            const dataToSave = this.getViewDataFinal();
            
            if ( JsonFileEncoding.isEncoded( dataToSave ) ){
                // data is already encrypted, protect it from being overwritten
                return;
            }
            
            // build up-to-date encrypted dataS
            this.encryptedData = await FileDataHelper.encrypt(
                this.passwordAndHint.password,
                this.passwordAndHint.hint,
                dataToSave
            );

            // call the real save.. which will call getViewData
            await super.save(clear);

        } finally{
            this.isSavingInProgress = false;
        }
        
    }

    async changePassword(): Promise<void> {
        if (this.file == null) {
            throw new Error('file == null');
        }

		// fetch password
        const pwm = new PluginPasswordModal(
            this.app,
            'Please provide a password',
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
