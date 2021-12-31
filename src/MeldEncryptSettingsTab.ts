import { App, PluginSettingTab, Setting } from "obsidian";
import MeldEncrypt from "./main";

export default class MeldEncryptSettingsTab extends PluginSettingTab {
	plugin: MeldEncrypt;

	pwTimeoutSetting:Setting;

	constructor(app: App, plugin: MeldEncrypt) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let { containerEl } = this;

		containerEl.empty();
		
		containerEl.createEl('h2', {text: 'Settings for Meld Encrypt'});


		new Setting(containerEl)
			.setName('Expand selection to whole line?')
			.setDesc('Partial selections will get expanded to the whole line.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.plugin.settings.expandToWholeLines)
					.onChange( async value =>{
						this.plugin.settings.expandToWholeLines = value;
						await this.plugin.saveSettings();
						//this.updateSettingsUi();
					})
			})
		;

		new Setting(containerEl)
			.setName('Confirm password?')
			.setDesc('Confirm password when encrypting.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.plugin.settings.confirmPassword)
					.onChange( async value =>{
						this.plugin.settings.confirmPassword = value;
						await this.plugin.saveSettings();
						this.updateSettingsUi();
					})
			})
		;

		new Setting(containerEl)
			.setName('Copy button?')
			.setDesc('Show a button to copy decrypted text.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.plugin.settings.showButton)
					.onChange( async value =>{
						this.plugin.settings.showButton = value;
						await this.plugin.saveSettings();
						this.updateSettingsUi();
					})
			})
		;

		new Setting(containerEl)
			.setName('Remember password?')
			.setDesc('Remember the last used password for this session.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.plugin.settings.rememberPassword)
					.onChange( async value =>{
						this.plugin.settings.rememberPassword = value;
						await this.plugin.saveSettings();
						this.updateSettingsUi();
					})
			})
		;

		this.pwTimeoutSetting = new Setting(containerEl)
			.setName( this.buildPasswordTimeoutSettingName() )
			.setDesc('The number of minutes to remember the last used password.')
			.addSlider( slider => {
				slider
					.setLimits(0, 120, 5)
					.setValue(this.plugin.settings.rememberPasswordTimeout)
					.onChange( async value => {
						this.plugin.settings.rememberPasswordTimeout = value;
						await this.plugin.saveSettings();
						this.updateSettingsUi();
					})
				;
				
			})
		;

		this.updateSettingsUi();
	}

	updateSettingsUi():void{
		this.pwTimeoutSetting.setName(this.buildPasswordTimeoutSettingName());


		if ( this.plugin.settings.rememberPassword ){
			this.pwTimeoutSetting.settingEl.show();
		}else{
			this.pwTimeoutSetting.settingEl.hide();
		}
	}

	buildPasswordTimeoutSettingName():string{
		const value = this.plugin.settings.rememberPasswordTimeout;
		let timeoutString = `${value} minutes`;
		if(value == 0){
			timeoutString = 'Never forget';
		}
		return `Remember Password Timeout (${timeoutString})`;
	}
}