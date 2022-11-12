import { Plugin } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab';
import { MeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings';
import FeatureSelectionEncrypt from './features/feature-selection-encrypt/FeatureSelectionEncrypt';
import FeatureWholeNoteEncrypt from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt';
import { IMeldEncryptPluginFeature } from './features/IMeldEncryptPluginFeature';

export default class MeldEncrypt extends Plugin {

	private settings: MeldEncryptPluginSettings;

	private enabledFeatures : IMeldEncryptPluginFeature[] = [];

	async onload() {

		// Settings
		await this.loadSettings();

		this.enabledFeatures.push(
			new FeatureWholeNoteEncrypt(),
			new FeatureSelectionEncrypt()
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
		const DEFAULT_SETTINGS: MeldEncryptPluginSettings = {
			addRibbonIconToCreateNote: true,
			
			// FeatureSelectionEncrypt below
			expandToWholeLines: false,
			confirmPassword: true,
			showCopyButton: true,
			rememberPassword: true,
			rememberPasswordTimeout: 30
			// FeatureSelectionEncrypt above
		}

		this.settings = Object.assign(
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

}