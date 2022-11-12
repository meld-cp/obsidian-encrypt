import { Plugin } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab';
import { MeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings';
import FeatureSelectionEncrypt from './features/feature-selection-encrypt/FeatureSelectionEncrypt';
import FeatureWholeNoteEncrypt from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt';

export default class MeldEncrypt extends Plugin {

	private settings: MeldEncryptPluginSettings;

	private featureEncryptBySelection = new FeatureSelectionEncrypt();
	private featureWholeNoteEncrypt = new FeatureWholeNoteEncrypt();

	async onload() {

		// Settings
		await this.loadSettings();
		this.addSettingTab(new MeldEncryptSettingsTab(this.app, this, this.settings));
		// End Settings

		// Encrypt whole note feature
		await this.featureWholeNoteEncrypt.onload( this, this.settings );

		// Encrypt by selection feature
		await this.featureEncryptBySelection.onload( this, this.settings );

	}
	
	onunload() {
		this.featureWholeNoteEncrypt.onunload();
		this.featureEncryptBySelection.onunload();
	}

	async loadSettings() {
		const DEFAULT_SETTINGS: MeldEncryptPluginSettings = {
			addRibbonIconToCreateNote: true,
			
			// FeatureSelectionEncrypt below
			expandToWholeLines: true,
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
		this.featureWholeNoteEncrypt.applySettings( this.settings );
		this.featureEncryptBySelection.applySettings( this.settings );
	}

}