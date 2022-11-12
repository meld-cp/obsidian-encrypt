import { App, PluginSettingTab, Setting } from "obsidian";
import MeldEncrypt from "../main";
import { MeldEncryptPluginSettings } from "./MeldEncryptPluginSettings";


export default class MeldEncryptSettingsTab extends PluginSettingTab {
	plugin: MeldEncrypt;
	settings: MeldEncryptPluginSettings;

	pwTimeoutSetting:Setting;

	constructor(app: App, plugin: MeldEncrypt, settings:MeldEncryptPluginSettings) {
		super(app, plugin);
		this.plugin = plugin;
		this.settings = settings;
	}

	display(): void {
		let { containerEl } = this;

		containerEl.empty();
		
		containerEl.createEl('h1', {text: 'Settings for Meld Encrypt'});


		new Setting(containerEl)
			.setName('Add ribbon icon to create note')
			.setDesc('Adds a ribbon icon to the left bar to create an encrypted note.')
			.addToggle( toggle =>{
				toggle.setValue(this.settings.addRibbonIconToCreateNote)
				.onChange( async value =>{
					this.settings.addRibbonIconToCreateNote = value;
					await this.plugin.saveSettings();
				})
			})
		;
		
		containerEl.createEl('hr');
		containerEl.createEl('h2', {text: 'Deprecated Settings'});

		// DEPRECATED below
		new Setting(containerEl)
			.setName('Expand selection to whole line?')
			.setDesc('Partial selections will get expanded to the whole line.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.settings.expandToWholeLines)
					.onChange( async value =>{
						this.settings.expandToWholeLines = value;
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
					.setValue(this.settings.confirmPassword)
					.onChange( async value =>{
						this.settings.confirmPassword = value;
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
					.setValue(this.settings.showCopyButton)
					.onChange( async value =>{
						this.settings.showCopyButton = value;
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
					.setValue(this.settings.rememberPassword)
					.onChange( async value =>{
						this.settings.rememberPassword = value;
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
					.setValue(this.settings.rememberPasswordTimeout)
					.onChange( async value => {
						this.settings.rememberPasswordTimeout = value;
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


		if ( this.settings.rememberPassword ){
			this.pwTimeoutSetting.settingEl.show();
		}else{
			this.pwTimeoutSetting.settingEl.hide();
		}
	}

	buildPasswordTimeoutSettingName():string{
		const value = this.settings.rememberPasswordTimeout;
		let timeoutString = `${value} minutes`;
		if(value == 0){
			timeoutString = 'Never forget';
		}
		return `Remember Password Timeout (${timeoutString})`;
	}
}