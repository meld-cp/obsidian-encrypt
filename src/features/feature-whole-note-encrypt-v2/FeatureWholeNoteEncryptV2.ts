import MeldEncrypt from "src/main";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import { EncryptedMarkdownView } from "./EncryptedMarkdownView";
import { MarkdownView, TFolder, normalizePath, moment } from "obsidian";
import PluginPasswordModal from "src/PluginPasswordModal";
import { IPasswordAndHint, SessionPasswordService } from "src/services/SessionPasswordService";
import { FileDataHelper, JsonFileEncoding } from "src/services/FileDataHelper";
import { ENCRYPTED_FILE_EXTENSIONS, ENCRYPTED_FILE_EXTENSION_DEFAULT } from "src/services/Constants";

export default class FeatureWholeNoteEncryptV2 implements IMeldEncryptPluginFeature {

	plugin: MeldEncrypt;

	private statusIndicator: HTMLElement;

	async onload( plugin: MeldEncrypt ) {
		this.plugin = plugin;
		//this.settings = settings.featureWholeNoteEncrypt;
		
		this.plugin.addRibbonIcon( 'file-lock-2', 'New encrypted note', async (ev)=>{
			await this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() );
		});

		this.plugin.addCommand({
			id: 'meld-encrypt-create-new-note',
			name: 'Create new encrypted note',
			icon: 'file-lock-2',
			callback: async () => await this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() ),
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

		this.statusIndicator = this.plugin.addStatusBarItem();
		this.statusIndicator.hide();
		this.statusIndicator.setText('🔐');

		this.plugin.registerEvent( this.plugin.app.workspace.on('editor-menu', (menu, editor, info) => {
			if( info.file == null || !ENCRYPTED_FILE_EXTENSIONS.includes( info.file.extension ) ){
				return;
			}
			if (info instanceof EncryptedMarkdownView){
				menu.addItem( (item) => {
					item
						.setTitle('Change Password')
						.setIcon('lock')
						.onClick( async () => await info.changePassword() );
					}
				);
			}
		}));


		this.plugin.registerView( EncryptedMarkdownView.VIEW_TYPE, (leaf) => new EncryptedMarkdownView(leaf) );
			
		this.plugin.registerExtensions( ENCRYPTED_FILE_EXTENSIONS, EncryptedMarkdownView.VIEW_TYPE );

		this.plugin.registerEvent( this.plugin.app.workspace.on('layout-change', () => {
			const view = this.plugin.app.workspace.getActiveViewOfType(EncryptedMarkdownView);
			if (view == null){
				this.statusIndicator.hide();
				return;
			}
			this.statusIndicator.show();
		}));

		this.plugin.registerEvent(

            this.plugin.app.workspace.on('active-leaf-change', async (leaf) => {
				if ( leaf == null ){
					return;
				}
				
				if ( leaf.view instanceof EncryptedMarkdownView ){
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
        )

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
		
		const newFilename = moment().format( `[Untitled] YYYYMMDD hhmmss[.${ENCRYPTED_FILE_EXTENSION_DEFAULT}]`);
		const newFilepath = normalizePath( parentFolder.path + "/" + newFilename );
		
		// prompt for password
		const pwm = new PluginPasswordModal(
			this.plugin.app,
			'Please provide a password for encryption',
			true,
			true,
			SessionPasswordService.getByPath( newFilepath )
		);
		
		let pwh : IPasswordAndHint;
		try{
			pwh = await pwm.openAsync();
		}catch(e){
			return; // cancelled
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

	onunload() {
		this.plugin.app.workspace.detachLeavesOfType(EncryptedMarkdownView.VIEW_TYPE);
	}

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void {
		//throw new Error("Method not implemented.");
	}

}
