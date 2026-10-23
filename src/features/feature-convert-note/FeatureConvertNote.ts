import MeldEncrypt from "../../main.ts";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings.ts";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature.ts";
import { Notice, TFile, TextFileView, WorkspaceLeaf } from "obsidian";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import { FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { Utils } from "../../services/Utils.ts";
import { ENCRYPTED_FILE_EXTENSIONS, ENCRYPTED_FILE_EXTENSION_DEFAULT } from "../../services/Constants.ts";
import { EncryptedMarkdownView } from "../feature-whole-note-encrypt/EncryptedMarkdownView.ts";

export default class FeatureConvertNote implements IMeldEncryptPluginFeature {
	
	plugin: MeldEncrypt;
	private convertingFiles = new Set<TFile>();
	
	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings) {
		this.plugin = plugin;

		this.plugin.addCommand({
			id: 'convert-to-or-from-encrypted-note',
			name: 'Convert to or from an encrypted note',
			icon: 'file-lock-2',
			checkCallback: (checking) => this.processCommandConvertActiveNote( checking ),
		});

		this.plugin.addRibbonIcon(
			'file-lock-2',
			'Convert to or from an encrypted note',
			(_) => this.processCommandConvertActiveNote( false )
		);


		this.plugin.registerEvent(
			this.plugin.app.workspace.on( 'file-menu', (menu, file) => {
				if (file instanceof TFile){
					if ( file.extension == 'md' ){
						menu.addItem( (item) => {
							item
								.setTitle('Encrypt note')
								.setIcon('file-lock-2')
								.onClick( () => { this.processCommandEncryptNote( file ); } );
							}
						);
					}
					if ( ENCRYPTED_FILE_EXTENSIONS.includes( file.extension ) ){
						menu.addItem( (item) => {
							item
								.setTitle('Decrypt note')
								.setIcon('file')
								.onClick( () => { this.processCommandDecryptNote( file ); } );
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
		return ENCRYPTED_FILE_EXTENSIONS.includes( file.extension );
	}

	private processCommandEncryptNote( file:TFile ){
		this.getPasswordAndEncryptFile( file ).catch( (reason:unknown) => {
			if ( typeof(reason) == 'string' ){
				new Notice(reason, 10000);
			}
		});
	}

	private processCommandDecryptNote( file:TFile ){
		this.getPasswordAndDecryptFile( file ).catch( (reason:unknown) => {
			if ( typeof(reason) == 'string' ){
				new Notice(reason, 10000);
			}
		});
	}

	private processCommandConvertActiveNote( checking: boolean ) : boolean {
		const file = this.plugin.app.workspace.getActiveFile();
		
		if (checking){
			return this.checkCanEncryptFile(file)
				|| this.checkCanDecryptFile(file)
			;
		}

		if ( file?.extension == 'md' ){
			this.getPasswordAndEncryptFile( file ).catch( (reason:unknown) => {
				if ( typeof(reason) == 'string' ){
					new Notice(reason, 10000);
				}
			});
		}

		if ( file && ENCRYPTED_FILE_EXTENSIONS.includes( file.extension ) ){
			this.getPasswordAndDecryptFile( file ).catch( (reason:unknown) => {
				if ( typeof(reason) == 'string' ){
					new Notice(reason, 10000);
				}
			});
		}
		
		return true;
	}

	private async getPasswordAndEncryptFile( file:TFile ) {
		if ( this.convertingFiles.has(file) ) return;

		if ( !this.checkCanEncryptFile(file) ) {
			throw new Error( 'Unable to encrypt file' );
		}

		this.convertingFiles.add(file);
		try{
			await this.saveOpenViews(file);

			// try to get password from session password service
			let password = await SessionPasswordService.getByFile( file );

			if ( password.password == '' ){
				// ask for password
				const pm = new PluginPasswordModal( this.plugin.app, 'Encrypt Note', true, true, password );
				password = await pm.openAsync();
			}
			await this.closeUpdateRememberPasswordThenReopen(
				file,
				ENCRYPTED_FILE_EXTENSION_DEFAULT,
				() => this.encryptFile(file, password),
				password
			);
			
			new Notice( '🔐 Note was encrypted 🔐' );

		}catch( error ){
			if ( error instanceof Error ){
				new Notice(error.message, 10000);
			}else if ( typeof(error) == 'string' ){
				new Notice(error, 10000);
			}
		}finally{
			this.convertingFiles.delete(file);
		}
	}

	private async getPasswordAndDecryptFile( file:TFile ) {
		if ( this.convertingFiles.has(file) ) return;
		if ( !this.checkCanDecryptFile(file) ) {
			throw new Error( 'Unable to decrypt file' );
		}

		this.convertingFiles.add(file);
		try{
			await this.saveOpenViews(file);
			let passwordAndHint = await SessionPasswordService.getByFile( file );
			const cachedContent = passwordAndHint.password != ''
				? await this.decryptFile( file, passwordAndHint.password )
				: null;

			if ( cachedContent == null ){
				const encryptedFileContent = await this.plugin.app.vault.read( file );
				const encryptedData = JsonFileEncoding.decode( encryptedFileContent );
				const pwm = new PluginPasswordModal(this.plugin.app, 'Decrypt Note', false, false, { password: '', hint: encryptedData.hint } );
				passwordAndHint = await pwm.openAsync();
				if (!pwm.resultConfirmed){
					return;
				}
				if ( await this.decryptFile( file, passwordAndHint.password ) == null ){
					throw new Error('Decryption failed');
				}
			}

			await this.closeUpdateRememberPasswordThenReopen(
				file, 'md', () => this.decryptFile( file, passwordAndHint.password ), passwordAndHint
			);
			new Notice( '🔓 Note was decrypted 🔓' );
		}catch(error){
			if ( error instanceof Error ){
				new Notice(error.message, 10000);
			}else if ( typeof(error) == 'string' ){
				new Notice(error, 10000);
			}
		}finally{
			this.convertingFiles.delete(file);
		}
	}

	private async saveOpenViews(file: TFile) {
		const openViews: { leaf: WorkspaceLeaf; view: TextFileView }[] = [];
		this.plugin.app.workspace.iterateAllLeaves( leaf => {
			if ( leaf.view instanceof TextFileView && leaf.view.file == file ){
				openViews.push({ leaf, view: leaf.view });
			}
		});

		// Finish every save before closing any views, so a failed save leaves them open.
		// Observe all running saves immediately, including failures in later views.
		await Promise.all(openViews.map(async ({ view }) => {
			if ( view instanceof EncryptedMarkdownView && view.isSavingInProgress ){
				await view.saveInProgress;
			}
		}));
		for ( const { view } of openViews ){
			if ( view instanceof EncryptedMarkdownView ){
				while ( view.isSavingInProgress ) await view.saveInProgress;
			}
			await view.save();
		}
		return openViews;
	}

	private async closeUpdateRememberPasswordThenReopen(
		file: TFile,
		newFileExtension: string,
		convertContent: () => Promise<string | null>,
		pw: PasswordAndHint
	) {
		// The user may have edited the note while entering its password.
		const openViews = await this.saveOpenViews(file);
		let closedCount = 0;
		try{
			for ( const { leaf } of openViews ){
				// detach() is not awaitable. Switching views waits for unload-time saves.
				await leaf.setViewState({ type: 'empty' });
				closedCount++;
				leaf.detach();
			}

			// Read only after unloading: the final save may contain additional edits.
			const content = await convertContent();
			if ( content == null ){
				throw new Error('Decryption failed');
			}
			const newFilepath = Utils.getFilePathWithNewExtension(file, newFileExtension);
			await this.plugin.app.fileManager.renameFile( file, newFilepath );
			await this.plugin.app.vault.modify( file, content );
			SessionPasswordService.putByFile( pw, file );
		}finally{
			if( closedCount > 0 ){
				await this.plugin.app.workspace.getLeaf( true ).openFile(file);
			}
		}
	}

	private async encryptFile(file: TFile, passwordAndHint:PasswordAndHint ) : Promise<string> {
		const content = await this.plugin.app.vault.read( file );
		const encryptedData = await FileDataHelper.encrypt( passwordAndHint.password, passwordAndHint.hint, content );
		return JsonFileEncoding.encode( encryptedData );
	}

	private async decryptFile(file: TFile, password:string) : Promise<string | null> {
		const encryptedFileContent = await this.plugin.app.vault.read( file );
		const encryptedData = JsonFileEncoding.decode( encryptedFileContent );
		return await FileDataHelper.decrypt(encryptedData, password );
	}
}
