import type { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings.ts";
import MeldEncrypt from "../../main.ts";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature.ts";
import { EncryptedMarkdownView } from "./EncryptedMarkdownView.ts";
import { MarkdownView, Notice, TFolder, normalizePath, TFile } from "obsidian";
import type { Menu } from 'obsidian';
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import { FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { ENCRYPTED_FILE_EXTENSIONS, ENCRYPTED_FILE_EXTENSION_DEFAULT } from "../../services/Constants.ts";

export default class FeatureWholeNoteEncryptV2 implements IMeldEncryptPluginFeature {

	plugin: MeldEncrypt;

	private statusIndicator: HTMLElement;

	private settings?: IMeldEncryptPluginSettings;

	async onload( plugin: MeldEncrypt, settings?: IMeldEncryptPluginSettings ) {
		this.settings = settings;
		this.plugin = plugin;
		//this.settings = settings.featureWholeNoteEncrypt;
		
		this.plugin.addRibbonIcon( 'file-lock-2', 'New encrypted note', async (ev)=>{
			await this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() );
		});

		this.plugin.addRibbonIcon( 'book-lock', 'Lock and close all open encrypted notes', async (ev)=>{
			await this.processLockAndCloseAllEncryptedNotesCommand();
		});

		this.plugin.addCommand({
			id: 'create-new-note',
			name: 'Create new encrypted note',
			icon: 'file-lock-2',
			callback: async () => { await this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() ); },
		});

		this.plugin.addCommand({
			id: 'close-and-forget',
			name: 'Lock and close all open encrypted notes',
			icon: 'book-lock',
			callback: async () => { await this.processLockAndCloseAllEncryptedNotesCommand(); },
		});
		
		this.plugin.registerEvent(
			this.plugin.app.workspace.on( 'file-menu', (menu, file) => {
				if (file instanceof TFolder){
					menu.addItem( (item) => {
						item
							.setTitle('New encrypted note')
							.setIcon('file-lock-2')
							.onClick( () => this.processCreateNewEncryptedNoteCommand( file ) );
						}
					);
				}
			})
		);

		// configure status indicator
		this.statusIndicator = this.plugin.addStatusBarItem();
		this.statusIndicator.hide();
		this.statusIndicator.setText('🔐');

		// editor context menu
		this.plugin.registerEvent( this.plugin.app.workspace.on('editor-menu', (menu, editor, view) => {
			if( view.file == null || !ENCRYPTED_FILE_EXTENSIONS.includes( view.file.extension ) ){
				return;
			}
			if (view instanceof EncryptedMarkdownView){
				this.addEncryptedNoteMenuItems(menu, view);
			}
		}));

		this.plugin.registerEvent( this.plugin.app.workspace.on('file-menu', (menu, file) => {
			if ( !(file instanceof TFile) ){
				return
			}
			if( !ENCRYPTED_FILE_EXTENSIONS.includes( file.extension ) ){
				return;
			}

			const view = this.plugin.app.workspace.getActiveViewOfType( EncryptedMarkdownView );
			if (view == null || view.file != file){
				return;
			}

			this.addEncryptedNoteMenuItems(menu, view);
		}))


		// register view
		this.plugin.registerView( EncryptedMarkdownView.VIEW_TYPE, (leaf) => new EncryptedMarkdownView(leaf) );
		this.plugin.registerExtensions( ENCRYPTED_FILE_EXTENSIONS, EncryptedMarkdownView.VIEW_TYPE );

		// show status indicator for encrypted files, hide for others
		this.plugin.registerEvent( this.plugin.app.workspace.on('active-leaf-change', () => {
			const view = this.plugin.app.workspace.getActiveViewOfType(EncryptedMarkdownView);
			if (view == null){
				this.statusIndicator.hide();
				return;
			}
			this.statusIndicator.show();
		}));

		// make sure the view is the right type
		this.plugin.registerEvent(

            this.plugin.app.workspace.on('active-leaf-change', async (leaf) => {
				if ( leaf == null ){
					return;
				}
				
				if ( leaf.view instanceof EncryptedMarkdownView ){
					// correct view already active
					return;
				}

				if ( leaf.view instanceof MarkdownView ){

					const file = leaf.view.file;
					if ( file == null ){
						return;
					}
					
					if ( ENCRYPTED_FILE_EXTENSIONS.includes( file.extension ) ){
						// file is encrypted but has the wrong view type
						const viewState = leaf.getViewState();
						viewState.type = EncryptedMarkdownView.VIEW_TYPE;
						
						await leaf.setViewState( viewState );

						return;
					}

				}

			} )
		);

	}

	private addEncryptedNoteMenuItems(menu: Menu, view: EncryptedMarkdownView): void {
		menu.addItem(item => {
			item
				.setTitle('Change password')
				.setIcon('key-round')
				.onClick(async () => { await view.changePassword(); });
		});
		menu.addItem(item => {
			item
				.setTitle('Lock & close')
				.setIcon('lock')
				.onClick(() => { view.lockAndClose(); });
		});
	}

	private async processLockAndCloseAllEncryptedNotesCommand(): Promise<void> {
		// loop through all open leaves
		const leaves = this.plugin.app.workspace.getLeavesOfType( EncryptedMarkdownView.VIEW_TYPE );
		for ( const leaf of leaves ) {
			if ( leaf.view instanceof EncryptedMarkdownView ){
				leaf.view.lockAndClose();
			}
		}
	}

	private getDefaultFileFolder() : TFolder {
		const activeFile = this.plugin.app.workspace.getActiveFile();

		if (activeFile != null){
			return this.plugin.app.fileManager.getNewFileParent(activeFile.path);
		}else{
			return this.plugin.app.fileManager.getNewFileParent('');
		}
	}

	private async processCreateNewEncryptedNoteCommand( parentFolder: TFolder ) : Promise<void> {
		
		const newFilename = window.moment().format( `[Untitled] YYYYMMDD hhmmss[.${ENCRYPTED_FILE_EXTENSION_DEFAULT}]`);
		const newFilepath = normalizePath( parentFolder.path + "/" + newFilename );
		
		const pwm = new PluginPasswordModal(
			this.plugin.app, 'Encrypt note', true, this.settings?.confirmPassword ?? true,
			await SessionPasswordService.getByPathAsync(newFilepath)
		);
		let pwh: PasswordAndHint;
		try { pwh = await pwm.openAsync(); } catch { return; }

		if ( !pwh.password.length ){
			new Notice('A password is required to create an encrypted note');
			return;
		}

		// create the new file
		const fileData = await FileDataHelper.encrypt( pwh.password, pwh.hint, '' )
		const fileContents = JsonFileEncoding.encode( fileData );
		const file = await this.plugin.app.vault.create( newFilepath, fileContents );
		
		// cache the password
		SessionPasswordService.putByFile( pwh, file );

		// open the file
		const leaf = this.plugin.app.workspace.getLeaf( true );
		await leaf.openFile( file );

	}

	onunload() {}

	getSettingDefinitions(): import("obsidian").SettingDefinitionItem[] { return []; }

}
