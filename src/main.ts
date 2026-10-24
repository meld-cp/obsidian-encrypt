import { Notice, Plugin } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab.ts';
import { IMeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings.ts';
import { IMeldEncryptPluginFeature } from './features/IMeldEncryptPluginFeature.ts';
import { SessionPasswordService } from './services/SessionPasswordService.ts';
import FeatureInplaceEncrypt from './features/feature-inplace-encrypt/FeatureInplaceEncrypt.ts';
import FeatureConvertNote from './features/feature-convert-note/FeatureConvertNote.ts';
import FeatureWholeNoteEncryptV2 from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt.ts';

export default class MeldEncrypt extends Plugin {

	private pluginSettings: IMeldEncryptPluginSettings;

	private enabledFeatures : IMeldEncryptPluginFeature[] = [];

	async onload() {
		
		SessionPasswordService.init(this.app.vault.adapter);

		// Settings
		await this.loadSettings();

		this.enabledFeatures.push(
			new FeatureWholeNoteEncryptV2(),
			new FeatureConvertNote(),
			new FeatureInplaceEncrypt(),
		);

		this.addSettingTab(
			new MeldEncryptSettingsTab(
				this.app,
				this,
				this.pluginSettings,
				this.enabledFeatures
			)
		);
		// End Settings

		this.addCommand({
			id: 'clear-password-cache',
			name: 'Clear session password cache',
			icon: 'shield-ellipsis',
			callback: () => {
				const itemsCleared = SessionPasswordService.clear();
				new Notice( `Items cleared: ${itemsCleared}` );
			},
		});

		// load features
		for (const f of this.enabledFeatures) {
			await f.onload( this, this.pluginSettings );
		}

	}
	
	override onunload() {
		for (const f of this.enabledFeatures) {
			f.onunload();
		}
		super.onunload();
	}

	async loadSettings() {
		
		const DEFAULT_SETTINGS: IMeldEncryptPluginSettings = {
			confirmPassword: true,
			rememberPassword: true,
			rememberPasswordTimeout: 30,
			rememberPasswordLevel: SessionPasswordService.LevelVault,
			rememberPasswordExternalFilePaths: [],

			featureWholeNoteEncrypt: {
			},
			
			featureInplaceEncrypt:{
				expandToWholeLines: false,
				markerSearchLimit: 10000,
				showMarkerWhenReadingDefault: true
			}
		}

		const savedSettings = await this.loadData() as Partial<IMeldEncryptPluginSettings> | null;
		this.pluginSettings = Object.assign({}, DEFAULT_SETTINGS, savedSettings);

		// apply settings
		SessionPasswordService.setActive( this.pluginSettings.rememberPassword );
		SessionPasswordService.setAutoExpire(
			this.pluginSettings.rememberPasswordTimeout == 0
			? null
			: this.pluginSettings.rememberPasswordTimeout
		);
		SessionPasswordService.setLevel( this.pluginSettings.rememberPasswordLevel );
		SessionPasswordService.setExternalFilePaths( this.pluginSettings.rememberPasswordExternalFilePaths );
	}

	async saveSettings() {
		await this.saveData(this.pluginSettings);
	}

}
