import { MarkdownView, Notice } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "./services/FileDataHelper";
import { IPasswordAndHint, SessionPasswordService } from "./services/SessionPasswordService";
import PluginPasswordModal from "./PluginPasswordModal";

export class EncryptedMarkdownView extends MarkdownView {

    static VIEW_TYPE = 'meld-encrypted-view';

    passwordAndHint : IPasswordAndHint | null = null;

    encryptedData : FileData | null = null;

    // constructor(leaf: WorkspaceLeaf) {
    //     console.debug('EncryptedMarkdownView.constructor', {leaf});
    //     super(leaf);
    //     super.setViewData('', false);
    // }
    override getViewType(): string {
        return EncryptedMarkdownView.VIEW_TYPE;
    }

    override canAcceptExtension(extension: string): boolean {
        return extension == 'mymd';    
    }
    
    override setViewData(data: string, clear: boolean): void {
        super.setViewData('', false);
        // something is setting the view data, perhaps from reading from the file
        //console.debug('setViewData', {data, clear});
        if (this.file == null) {
            super.setViewData(data, clear);
            return;
        }

        // try to decode data
        if ( JsonFileEncoding.isEncoded(data) ){
            
            this.encryptedData = JsonFileEncoding.decode( data );
            
            this.passwordAndHint = SessionPasswordService.getByFile( this.file );
            this.passwordAndHint.hint = this.encryptedData.hint;

            // kick off decryption task
            //console.debug( 'Decrypting file content' );
            this.tryDecryptingFileContent();

        }else{
            //console.debug('setting plain view data', {data});
            super.setViewData(data, clear);
        }
        

    }

    async tryDecryptingFileContent() : Promise<void> {
        // console.time( 'tryDecryptingFileContent' );
        try{
            if (this.encryptedData == null) {
                new Notice('encryptedData == null');
                return;
            }

            if (this.passwordAndHint == null) {
                new Notice('passwordAndHint == null');
                return;
            }

            if (this.file == null) {
                new Notice('file == null');
                return;
            }

            // try to decrypt the file content
            const decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
            //console.debug('decryptedText', decryptedText);
            
            if ( decryptedText == null) {
                // decryption failed, try to prompt user for password
                const pwm = new PluginPasswordModal(
                    this.app,
                    'Decrypt Note',
                    false,
                    false,
                    this.passwordAndHint!
                );
                this.passwordAndHint = await pwm.openAsync();

                await this.tryDecryptingFileContent();
                
                return;
            }else{
                // decryption succeeded
                
                // save the password in the cache
                SessionPasswordService.putByFile( this.passwordAndHint, this.file );
                
                // set the view data
                super.setViewData( decryptedText, false );

                //console.debug( 'file content decrypted' );

                return;
            }
        }finally{
            //console.timeEnd( 'tryDecryptingFileContent' );
        }
    }
    
    override getViewData(): string {
        // something is reading the data.. maybe to save it
        return JsonFileEncoding.encode( this.encryptedData! );
    }
   
    override async save(clear?: boolean | undefined): Promise<void> {
        if (!this.file){
            return;
        }
        // console.debug('save', {
        //     mode: this.getMode(),
        //     file:this.file,
        //     viewdata: super.getViewData(),
        // });

        const dataToSave = super.getViewData();

        if ( JsonFileEncoding.isEncoded( dataToSave ) ){
            //console.debug( 'view data already encoded' );
            return;
        }

        // build up-to-date encrypted dataS
        this.encryptedData = await FileDataHelper.encrypt(
            this.passwordAndHint!.password,
            this.passwordAndHint!.hint,
            dataToSave
        );

        //console.debug( 'file content encrypted, calling save' );

        // call the real save.. which will call getViewData
        await super.save(clear);
        
    }

}
