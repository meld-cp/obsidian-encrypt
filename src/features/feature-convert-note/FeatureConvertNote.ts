import MeldEncrypt from "src/main";
import { IMeldEncryptPluginSettings } from "src/settings/MeldEncryptPluginSettings";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import { Notice, TFile, TextFileView } from "obsidian";
import PluginPasswordModal from "src/PluginPasswordModal";
import { IPasswordAndHint, SessionPasswordService } from "src/services/SessionPasswordService";
import { FileDataHelper, JsonFileEncoding } from "src/services/FileDataHelper";
import { Utils } from "src/services/Utils";
import { ENCRYPTED_FILE_EXTENSION } from "src/services/Constants";

export default class FeatureConvertNote implements IMeldEncryptPluginFeature {
	
	plugin: MeldEncrypt;
	
	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings) {
		this.plugin = plugin;

		this.plugin.addCommand({
			id: 'meld-encrypt-convert-to-or-from-encrypted-note',
			name: 'Convert to or from an Encrypted note',
			icon: 'file-lock',
			checkCallback: (checking) => this.processCommandConvertActiveNote( checking ),
		});

		this.plugin.addRibbonIcon(
			'file-lock',
			'Convert to or from an Encrypted note',
			(_) => this.processCommandConvertActiveNote( false )
		);


		this.plugin.registerEvent(
			this.plugin.app.workspace.on( 'file-menu', (menu, file) => {
				if (file instanceof TFile){
					if ( file.extension == 'md' ){
						menu.addItem( (item) => {
							item
								.setTitle('Encrypt note')
								.setIcon('file-lock')
								.onClick( () => this.processCommandEncryptNote( file ) );
							}
						);
					}
					if ( file.extension == ENCRYPTED_FILE_EXTENSION ){
						menu.addItem( (item) => {
							item
								.setTitle('Decrypt note')
								.setIcon('file')
								.onClick( () => this.processCommandDecryptNote( file ) );
							}
						);
					}
				}
			})
		);

	}
	
	onunload(): void { }

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void { }

	private checkCanEncryptFile( file:TFile | null ) : boolean {
		if ( file == null ){
			return false;
		}
		return file.extension == 'md';
	}

	private checkCanDecryptFile( file:TFile | null ) : boolean {
		if ( file == null ){
			return false;
		}
		return file.extension == ENCRYPTED_FILE_EXTENSION;
	}

	private processCommandEncryptNote( file:TFile ){
		this.getPasswordAndEncryptFile( file ).catch( reason => {
			if (reason){
				new Notice(reason, 10000);
			}
		});
	}

	private processCommandDecryptNote( file:TFile ){
		this.getPasswordAndDecryptFile( file ).catch( reason => {
			if (reason){
				new Notice(reason, 10000);
			}
		});
	}

	private processCommandConvertActiveNote( checking: boolean ) : boolean | void {
		const file = this.plugin.app.workspace.getActiveFile();
		
		if (checking){
			return this.checkCanEncryptFile(file)
				|| this.checkCanDecryptFile(file)
			;
		}

		if ( file?.extension == 'md' ){
			this.getPasswordAndEncryptFile( file ).catch( reason => {
				if (reason){
					new Notice(reason, 10000);
				}
			});
		}

		if ( file?.extension == ENCRYPTED_FILE_EXTENSION ){
			this.getPasswordAndDecryptFile( file ).catch( reason => {
				if (reason){
					new Notice(reason, 10000);
				}
			});
		}
	}

	private async getPasswordAndEncryptFile( file:TFile ) {

		if ( !this.checkCanEncryptFile(file) ) {
			throw new Error( 'Unable to encrypt file' );
		}

		const defaultPw = SessionPasswordService.getByFile( file );
		
		const pm = new PluginPasswordModal(app, 'Encrypt Note', true, true, defaultPw );
		try{
			const pw = await pm.openAsync();

			const encryptedFileContent = await this.encryptFile(file, pw);

			await this.closeUpdateAndReopen( file, ENCRYPTED_FILE_EXTENSION, encryptedFileContent);

			SessionPasswordService.putByFile( pw, file );
			
			new Notice( '🔐 Note was encrypted 🔐' );

		}catch( error ){
			if (error){
				new Notice(error, 10000);
			}
		}
	}

	private async getPasswordAndDecryptFile( file:TFile ) {
		if ( !this.checkCanDecryptFile(file) ) {
			throw new Error( 'Unable to decrypt file' );
		}

		let passwordAndHint = SessionPasswordService.getByFile( file );
		if ( passwordAndHint.password != '' ){
			// try to decrypt using saved password
			const decryptedContent = await this.decryptFile( file, passwordAndHint.password );
			if (decryptedContent != null){
				// update file
				await this.closeUpdateAndReopen( file, 'md', decryptedContent );
				return;
			}
		}
		
		// fetch from user
		const encryptedFileContent = await app.vault.read( file );
		const encryptedData = JsonFileEncoding.decode( encryptedFileContent );


		const pwm = new PluginPasswordModal(app, 'Decrypt Note', false, false, { password: '', hint: encryptedData.hint } );
		try{
			passwordAndHint = await pwm.openAsync();
			
			if (!pwm.resultConfirmed){
				return;
			}
			
			const content = await this.decryptFile( file, passwordAndHint.password );
			if ( content == null ){
				throw new Error('Decryption failed');
			}

			await this.closeUpdateAndReopen( file, 'md', content );

			new Notice( '🔓 Note was decrypted 🔓' );

		}catch(error){
			if (error){
				new Notice(error, 10000);
			}
		}
	}

	private async closeUpdateAndReopen( file:TFile, newFileExtension: string, content: string) {
		
		let didDetach = false;

		this.plugin.app.workspace.iterateAllLeaves( l=> {
			if ( l.view instanceof TextFileView && l.view.file == file ){
				l.detach();
				didDetach = true;
			}
		});

		try{
			//return await this.updateFile( file, newFileExtension, content );
			const newFilepath = Utils.getFilePathWithNewExtension(file, newFileExtension);
			await app.vault.rename( file, newFilepath );
			await app.vault.modify( file, content );
		}finally{
			if(didDetach){
				await app.workspace.getLeaf().openFile(file);
			}
		}
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