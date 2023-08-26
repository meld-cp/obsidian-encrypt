import MeldEncrypt from "src/main";
import { IMeldEncryptPluginSettings } from "src/settings/MeldEncryptPluginSettings";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import { MarkdownView, Notice, TFile, normalizePath } from "obsidian";
import PluginPasswordModal from "src/PluginPasswordModal";
import { IPasswordAndHint, SessionPasswordService } from "src/services/SessionPasswordService";
import { FileDataHelper, JsonFileEncoding } from "src/services/FileDataHelper";
import { EncryptedFileContentView } from "../feature-whole-note-encrypt/EncryptedFileContentView";

export default class FeatureConvertNote implements IMeldEncryptPluginFeature {
	
	plugin: MeldEncrypt;
	
	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings) {
		//console.debug(plugin);
		this.plugin = plugin;

		// this.plugin.addCommand({
		// 	id: 'meld-encrypt-convert-to-encrypted-note',
		// 	name: 'Convert to encrypted note',
		// 	icon: 'lock',
		// 	editorCheckCallback: (checking, editor, view) => this.processConvertToEncryptedNoteCommand( checking, view )
		// });
		
		// this.plugin.addCommand({
		// 	id: 'meld-encrypt-convert-from-encrypted-note',
		// 	name: 'Convert to standard note',
		// 	icon: 'unlock',
		// 	checkCallback: (checking) => this.processConvertFromEncryptedNoteCommand(checking),
		// });

		this.plugin.addCommand({
			id: 'meld-encrypt-convert-to-or-from-encrypted-note',
			name: 'Convert to or from an Encrypted note',
			icon: 'lock',
			checkCallback: (checking) => this.processConvertNoteCommand( checking ),
		});

		this.plugin.addRibbonIcon( 'lock', 'Convert to or from an Encrypted note', (ev)=> this.processConvertNoteCommand( false ) );

	}
	
	onunload(): void {
		//throw new Error("Method not implemented.");
	}

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void {
		//throw new Error("Method not implemented.");
	}


	private processConvertNoteCommand( checking: boolean ) : boolean | void {
		const file = this.plugin.app.workspace.getActiveFile();
		
		if ( file == null ){
			if (!checking){
				new Notice('No active file');
			}
			return false;
		}


		if ( file.extension == 'md' ){
			const view = app.workspace.getActiveViewOfType( MarkdownView );
			if (view == null){
				if (!checking){
					new Notice('Couldn\'t find active view');
				}
				return false;
			}
			return this.processConvertToEncryptedNoteCommand( checking, view );
		}

		if ( file.extension == 'encrypted' ){
			return this.processConvertFromEncryptedNoteCommand( checking );
		}
	}

	private processConvertToEncryptedNoteCommand(
		checking:boolean,
		view:MarkdownView
	) : boolean | void{
		
		const file = view.file;

		// check if can be converted
		if ( file.extension != 'md' ){
			return false;
		}
		
		if (checking){
			return true;
		}


		const defaultPw = SessionPasswordService.getByKey( this.getFilePathExcludingExtension( file ) );
		
		const pm = new PluginPasswordModal(app, 'Convert to Encrypted note', true, true, defaultPw );
		pm.openAsync()
			.then( pw =>{
				//console.debug('FeatureConvertNote', {pw});
				this.convertToEncryptedNote( view, pw )
					.then( () => new Notice( '🔐 Note was encrypted 🔐' ) )
					.catch(reason => new Notice(reason, 10000) )
				;
			})
			.catch( (reason) => {
				// user canceled
			} )
		;
		

	}

	private processConvertFromEncryptedNoteCommand(checking:boolean) : boolean | void{
		
		//console.debug('processConvertFromEncryptedNoteCommand', {'plugin': this.plugin})

		const file = this.plugin.app.workspace.getActiveFile();

		if (file == null){
			return false;
		}

		// check if can be converted
		if ( file.extension != 'encrypted' ){
			return false;
		}

		if (checking){
			return true;
		}

		this.convertFromEncryptedNote( file )
			.then( () => new Notice( '🔓 Note was decrypted 🔓' ) )
			.catch( reason => new Notice(reason, 10000) )
		;
		
	}

	private getFilePathWithNewExtension( file: TFile, newExtension : string ) : string {
		return normalizePath( file.parent.path + '/'  + file.basename + '.' + newExtension );
	}

	private getFilePathExcludingExtension( file: TFile ) : string {
		return normalizePath( file.parent.path + '/'  + file.basename );
	}

	private async convertToEncryptedNote(view: MarkdownView, passwordAndHint : IPasswordAndHint ) : Promise<void> {
		const file = view.file;

		if ( file.extension != 'md' ){
			throw Error('Can only convert .md files');
		}

		
		view.leaf.detach();
		
		try{
			const encryptedFileContent = await this.encryptFile( file, passwordAndHint );
			const newFilepath = await this.updateFile( file, 'encrypted', encryptedFileContent );
			SessionPasswordService.putByPath( passwordAndHint, newFilepath ); // for decoding by FeatureWholeNoteEncrypt
			SessionPasswordService.putByKey( passwordAndHint, this.getFilePathExcludingExtension(file) ); // used by this feature
		}finally{
			await app.workspace.getLeaf().openFile(file);
		}
	}
	

	private async convertFromEncryptedNote( file: TFile ) : Promise<void> {
		if ( file.extension != 'encrypted' ){
			throw Error('Can only convert .encrypted files');
		}

		const view = app.workspace.getActiveViewOfType<EncryptedFileContentView>( EncryptedFileContentView );
		if (view != null){
			view.leaf.detach();
		}

		try{

			let passwordAndHint = SessionPasswordService.getByKey( file.path );
			if ( passwordAndHint.password != '' ){
				// try to decrypt using saved password
				const decryptedContent = await this.decryptFile( file, passwordAndHint.password );
				if (decryptedContent != null){
					// update file
					await this.updateFile( file, 'md', decryptedContent );
					return;
				}
			}
			
			// fetch from user
			const pwm = new PluginPasswordModal(app, 'Convert from Encrypted note', false, false, null );
	
			passwordAndHint = await pwm.openAsync();
	
			if (!pwm.resultConfirmed){
				return;
			}
				

			const content = await this.decryptFile( file, passwordAndHint.password );
			if ( content == null ){
				throw new Error('Decryption failed');
			}
			await this.updateFile( file, 'md', content );

		}finally{
			await app.workspace.getLeaf().openFile(file);
		}

	}

	private async updateFile( file:TFile, newFileExtension: string, newContent: string ) : Promise<string> {
		const newFilepath = this.getFilePathWithNewExtension(file, newFileExtension);
		await app.vault.rename( file, newFilepath );
		await app.vault.modify( file, newContent );
		return newFilepath;
	}

	private async encryptFile(file: TFile, passwordAndHint:IPasswordAndHint ) : Promise<string> {
		const content = await app.vault.read( file );
		const encryptedData = await FileDataHelper.encode( passwordAndHint.password, passwordAndHint.hint, content );
		return JsonFileEncoding.encode( encryptedData );
	}

	private async decryptFile(file: TFile, password:string) : Promise<string | null> {
		const encryptedFileContent = await app.vault.read( file );
		const encryptedData = JsonFileEncoding.decode( encryptedFileContent );
		return await FileDataHelper.decrypt(encryptedData, password );
	}
}