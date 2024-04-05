import MeldEncrypt from "src/main";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
//import { IMeldEncryptPluginSettings } from "src/settings/MeldEncryptPluginSettings";
import { EncryptedMarkdownView } from "./EncryptedMarkdownView";
import { MarkdownView, TFile } from "obsidian";

export default class FeatureWholeNoteEncryptV2 implements IMeldEncryptPluginFeature {

	plugin: MeldEncrypt;

	private statusIndicator: HTMLElement;

	async onload( plugin: MeldEncrypt ) {
		this.plugin = plugin;
		//this.settings = settings.featureWholeNoteEncrypt;
		
		// this.plugin.addRibbonIcon( 'file-lock-2', 'New encrypted note', (ev)=>{
		// 	this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() );
		// });

		// this.plugin.addCommand({
		// 	id: 'meld-encrypt-create-new-note',
		// 	name: 'Create new encrypted note',
		// 	icon: 'file-lock-2',
		// 	callback: () => this.processCreateNewEncryptedNoteCommand( this.getDefaultFileFolder() ),
		// });

		// this.plugin.addCommand({
		// 	id: 'meld-encrypt-toggle-reading-view',
		// 	name: 'Toggle Reading View',
		// 	icon: 'edit',
		// 	callback: () => this.processToggleReadingViewCommand(),
		// });
		
		// this.plugin.registerEvent(
		// 	this.plugin.app.workspace.on( 'file-menu', (menu, file) => {
		// 		if (file instanceof TFolder){
		// 			menu.addItem( (item) => {
		// 				item
		// 					.setTitle('New encrypted note')
		// 					.setIcon('file-lock-2')
		// 					.onClick( () => this.processCreateNewEncryptedNoteCommand( file ) );
		// 				}
		// 			);
		// 		}
		// 	})
		// );

		this.statusIndicator = this.plugin.addStatusBarItem();
		this.statusIndicator.hide();
		this.statusIndicator.setText('🔐');

		this.plugin.registerEvent( this.plugin.app.workspace.on('editor-menu', (menu, editor, info) => {
			if( info.file == null || !EncryptedMarkdownView.EXTENSIONS.includes( info.file.extension ) ){
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
			
		this.plugin.registerExtensions( EncryptedMarkdownView.EXTENSIONS, EncryptedMarkdownView.VIEW_TYPE );

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
					
					if ( EncryptedMarkdownView.EXTENSIONS.includes( file.extension ) ){
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

	onunload() {
		this.plugin.app.workspace.detachLeavesOfType(EncryptedMarkdownView.VIEW_TYPE);
	}

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void {
		//throw new Error("Method not implemented.");
	}

}
