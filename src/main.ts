import { MarkdownView, Notice, Plugin } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab';
import { IMeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings';
import { IMeldEncryptPluginFeature } from './features/IMeldEncryptPluginFeature';
import { SessionPasswordService } from './services/SessionPasswordService';
import FeatureInplaceEncrypt from './features/feature-inplace-encrypt/FeatureInplaceEncrypt';
import FeatureWholeNoteEncrypt from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt';
import { EditViewEnum } from './features/feature-whole-note-encrypt/EncryptedFileContentView';
import FeatureConvertNote from './features/feature-convert-note/FeatureConvertNote';
import { EncryptedMarkdownView } from './EncryptedMarkdownView';

export default class MeldEncrypt extends Plugin {

	private settings: IMeldEncryptPluginSettings;

	private enabledFeatures : IMeldEncryptPluginFeature[] = [];

	private statusIndicator: HTMLElement;

	async onload() {
		
		// Settings
		await this.loadSettings();

		this.enabledFeatures.push(
			new FeatureWholeNoteEncrypt(),
			new FeatureConvertNote(),
			new FeatureInplaceEncrypt(),
		);

		this.addSettingTab(
			new MeldEncryptSettingsTab(
				this.app,
				this,
				this.settings,
				this.enabledFeatures
			)
		);
		// End Settings

		this.addCommand({
			id: 'meld-encrypt-clear-password-cache',
			name: 'Clear Session Password Cache',
			icon: 'file-lock',
			callback: () => {
				const itemsCleared = SessionPasswordService.clear();
				new Notice( `Items cleared: ${itemsCleared}` );
			},
		});

		// load features
		this.enabledFeatures.forEach(async f => {
			await f.onload( this, this.settings );
		});

		this.registerView(
			EncryptedMarkdownView.VIEW_TYPE,
			(leaf) => new EncryptedMarkdownView(leaf)
		);
			
		this.registerExtensions( ['mymd'], EncryptedMarkdownView.VIEW_TYPE );

		this.statusIndicator = this.addStatusBarItem();
		this.statusIndicator.hide();
		this.statusIndicator.setText('🔐');


		this.registerEvent(

            this.app.workspace.on('active-leaf-change', async (leaf) => {
				if ( leaf == null ){
					this.statusIndicator.hide();
					return;
				}
				const viewState = leaf.getViewState();
				
				// console.debug('active-leaf-change', {
				// 	leaf,
				// 	viewState
				// } );

				if ( leaf.view instanceof MarkdownView){
					const file = leaf.view.file;
					if (file == null){
						this.statusIndicator.hide();
						return;
					}
					
					if (leaf.view instanceof EncryptedMarkdownView){
						this.statusIndicator.show();
						return;
					}

					if ( file.extension == 'mymd' ){
						// file is encrypted but has the wrong view type
						
						this.statusIndicator.show();
						
						//console.debug( 'do something here with', {viewState} )
						viewState.type = EncryptedMarkdownView.VIEW_TYPE;
						
						await leaf.setViewState( viewState );

						return;
					}

					this.statusIndicator.hide();
				}
			} )
        )

	}
	
	override onunload() {
		this.app.workspace.detachLeavesOfType(EncryptedMarkdownView.VIEW_TYPE);
		this.enabledFeatures.forEach(async f => {
			f.onunload();
		});
	}

	async loadSettings() {
		
		const DEFAULT_SETTINGS: IMeldEncryptPluginSettings = {
			confirmPassword: true,
			rememberPassword: true,
			rememberPasswordTimeout: 30,
			rememberPasswordLevel: SessionPasswordService.LevelVault,

			featureWholeNoteEncrypt: {
				defaultView: EditViewEnum.source.toString()
			},
			
			featureInplaceEncrypt:{
				expandToWholeLines: false,
				showMarkerWhenReadingDefault: true
			}
		}

		this.settings = Object.assign(
			DEFAULT_SETTINGS,
			await this.loadData()
		);

		// apply settings
		SessionPasswordService.setActive( this.settings.rememberPassword );
		SessionPasswordService.setAutoExpire(
			this.settings.rememberPasswordTimeout == 0
			? null
			: this.settings.rememberPasswordTimeout
		);
		SessionPasswordService.setLevel( this.settings.rememberPasswordLevel );
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

}