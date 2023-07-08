import { Plugin } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab';
import { IMeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings';
import FeatureInplaceEncrypt from './features/feature-inplace-encrypt/FeatureInplaceEncrypt';
import FeatureFolderEncrypt from './features/feature-inplace-encrypt/FeatureFolderEncrypt';
import FeatureWholeNoteEncrypt from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt';
import { IMeldEncryptPluginFeature } from './features/IMeldEncryptPluginFeature';
import { SessionPasswordService } from './services/SessionPasswordService';
import { EditViewEnum } from './features/feature-whole-note-encrypt/EncryptedFileContentView';

export default class MeldEncrypt extends Plugin {

	private settings: IMeldEncryptPluginSettings;

	private enabledFeatures : IMeldEncryptPluginFeature[] = [];

	async onload() {
		
		// Settings
		await this.loadSettings();

		this.enabledFeatures.push(
      new FeatureFolderEncrypt(),
			new FeatureWholeNoteEncrypt(),
			new FeatureInplaceEncrypt()
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

		// load features
		this.enabledFeatures.forEach(async f => {
			await f.onload( this, this.settings );
		});

	}
	
	onunload() {
		this.enabledFeatures.forEach(async f => {
			f.onunload();
		});
	}

	async loadSettings() {
		
		const DEFAULT_SETTINGS: IMeldEncryptPluginSettings = {
			confirmPassword: true,
			rememberPassword: true,
			rememberPasswordTimeout: 30,
			rememberPasswordLevel: SessionPasswordService.LevelFullPath,

			featureWholeNoteEncrypt: {
				addRibbonIconToCreateNote: true,
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
