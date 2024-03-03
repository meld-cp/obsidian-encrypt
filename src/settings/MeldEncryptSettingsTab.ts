import { App, PluginSettingTab, Setting } from "obsidian";
import { IMeldEncryptPluginFeature } from "src/features/IMeldEncryptPluginFeature";
import { SessionPasswordService } from "src/services/SessionPasswordService";
import MeldEncrypt from "../main";
import { IMeldEncryptPluginSettings } from "./MeldEncryptPluginSettings";

export default class MeldEncryptSettingsTab extends PluginSettingTab {
	plugin: MeldEncrypt;
	settings: IMeldEncryptPluginSettings;

	features:IMeldEncryptPluginFeature[];

	constructor(
		app: App,
		plugin: MeldEncrypt,
		settings:IMeldEncryptPluginSettings,
		features: IMeldEncryptPluginFeature[]
	) {
		super(app, plugin);
		this.plugin = plugin;
		this.settings = settings;
		this.features = features;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		
		new Setting(containerEl)
			.setName('Confirm password?')
			.setDesc('Confirm password when encrypting. (Recommended)')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.confirmPassword)
					.onChange( async value =>{
						this.settings.confirmPassword = value;
						await this.plugin.saveSettings();
					})
			})
		;

		const updateRememberPasswordSettingsUi = () => {
			
			if ( !this.settings.rememberPassword ){
				pwTimeoutSetting.settingEl.hide();
				rememberPasswordLevelSetting.settingEl.hide();
				return;
			}
			
			pwTimeoutSetting.settingEl.show();
			rememberPasswordLevelSetting.settingEl.show();

			const rememberPasswordTimeout = this.settings.rememberPasswordTimeout;

			let timeoutString = `For ${rememberPasswordTimeout} minutes`;
			if( rememberPasswordTimeout == 0 ){
				timeoutString = 'Until Obsidian is closed';
			}

			pwTimeoutSetting.setName( `Remember Password (${timeoutString})` )
		
		}

		new Setting(containerEl)
			.setName('Remember password?')
			.setDesc('Remember the last used passwords when encrypting or decrypting.  Passwords are remembered until they timeout or Obsidian is closed')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.rememberPassword)
					.onChange( async value => {
						this.settings.rememberPassword = value;
						await this.plugin.saveSettings();
						SessionPasswordService.setActive( this.settings.rememberPassword );
						updateRememberPasswordSettingsUi();
					})
			})
		;

		const pwTimeoutSetting = new Setting(containerEl)
			.setDesc('The number of minutes to remember passwords.')
			.addSlider( slider => {
				slider
					.setLimits(0, 120, 5)
					.setValue(this.settings.rememberPasswordTimeout)
					.onChange( async value => {
						this.settings.rememberPasswordTimeout = value;
						await this.plugin.saveSettings();
						SessionPasswordService.setAutoExpire( this.settings.rememberPasswordTimeout );
						updateRememberPasswordSettingsUi();
					})
				;
				
			})
		;

		const rememberPasswordLevelSetting = new Setting(containerEl)
			.setName('Remember passwords by:')
			.setDesc( this.buildRememberPasswordDescription() )
			.addDropdown( cb =>{
				cb
					.addOption( SessionPasswordService.LevelVault, 'Vault')
					.addOption( SessionPasswordService.LevelParentPath, 'Folder')
					.addOption( SessionPasswordService.LevelFilename, 'File')
					.setValue( this.settings.rememberPasswordLevel )
					.onChange( async value => {
						this.settings.rememberPasswordLevel = value;
						await this.plugin.saveSettings();
						SessionPasswordService.setLevel( this.settings.rememberPasswordLevel );
						updateRememberPasswordSettingsUi();
					})
				;
			})
		;
		
		updateRememberPasswordSettingsUi();

		// build feature settings
		this.features.forEach(f => {
			f.buildSettingsUi( containerEl, async () => await this.plugin.saveSettings() );
		});
		
	}

	private buildRememberPasswordDescription( ) : DocumentFragment {
		const f = new DocumentFragment();

		const tbody = f.createEl( 'table' ).createTBody();
		
		let tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'Vault:', attr: { 'align': 'left'} });
		tr.createEl( 'td', { text: 'typically, you\'ll use the same password every time.' });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'Folder:', attr: { 'align': 'left'} });
		tr.createEl( 'td', { text: 'typically, you\'ll use the same password for each note within a folder.' });

		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'File:', attr: { 'align': 'left'} });
		tr.createEl( 'td', { text: 'typically, each note will have a unique password.' });

		return f;
	}

}