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
		let { containerEl } = this;

		containerEl.empty();
		
		containerEl.createEl('h1', {text: 'Settings for Meld Encrypt'});

		// build common settings
		new Setting(containerEl)
			.setHeading()
			.setName('Common Settings')
		;

		new Setting(containerEl)
			.setName('Confirm password?')
			.setDesc('Confirm password when encrypting.')
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
				return;
			}
			
			pwTimeoutSetting.settingEl.show();

			const rememberPasswordTimeout = this.settings.rememberPasswordTimeout;

			let timeoutString = `${rememberPasswordTimeout} minutes`;
			if( rememberPasswordTimeout == 0 ){
				timeoutString = 'Never forget';
			}

			pwTimeoutSetting.setName( `Remember Password Timeout (${timeoutString})` )
		
		}

		new Setting(containerEl)
			.setName('Remember password?')
			.setDesc('Remember the last used passwords when encrypting or decrypting.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.rememberPassword)
					.onChange( async value =>{
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
		
		updateRememberPasswordSettingsUi();

		// build feature settings
		this.features.forEach(f => {
			f.buildSettingsUi( containerEl, async () => await this.plugin.saveSettings() );
		});
		
	}

}