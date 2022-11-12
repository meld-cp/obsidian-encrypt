import { App, PluginSettingTab } from "obsidian";
import { IMeldEncryptPluginFeature } from "src/features/IMeldEncryptPluginFeature";
import MeldEncrypt from "../main";
import { MeldEncryptPluginSettings } from "./MeldEncryptPluginSettings";


export default class MeldEncryptSettingsTab extends PluginSettingTab {
	plugin: MeldEncrypt;
	settings: MeldEncryptPluginSettings;

	features:IMeldEncryptPluginFeature[];

	constructor(
		app: App,
		plugin: MeldEncrypt,
		settings:MeldEncryptPluginSettings,
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

		this.features.forEach(f => {
			f.buildSettingsUi( containerEl, this.settings, async () => await this.plugin.saveSettings() );
		});

	}
	
}