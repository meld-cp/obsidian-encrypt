import { App, SecretComponent, Notice, PluginSettingTab, type SettingDefinitionItem } from "obsidian";
import { IMeldEncryptPluginFeature } from "../features/IMeldEncryptPluginFeature.ts";
import { SessionPasswordService } from "../services/SessionPasswordService.ts";
import MeldEncrypt from "../main.ts";
import { IMeldEncryptPluginSettings } from "./MeldEncryptPluginSettings.ts";

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

	getSettingDefinitions(): SettingDefinitionItem[] {
		const settings = this.settings;
		const keychain = () => settings.rememberPasswordLevel === SessionPasswordService.LevelKeychain;
		const external = () => settings.rememberPasswordLevel === SessionPasswordService.LevelExternalFile;
		return [
			{
				name: 'Confirm password?', desc: 'Confirm password when encrypting. (Recommended)',
				render: row => { row.addToggle(toggle => toggle.setValue(settings.confirmPassword).onChange(async value => {
					settings.confirmPassword = value;
					await this.plugin.saveSettings();
				})); },
			},
			{
				name: 'Remember password?', desc: 'Reuse passwords from the session cache or the selected password provider.',
				render: row => { row.addToggle(toggle => toggle.setValue(settings.rememberPassword).onChange(async value => {
					settings.rememberPassword = value;
					SessionPasswordService.setActive(value);
					await this.plugin.saveSettings();
					this.refreshDomState();
				})); },
			},
			{
				name: 'Remember passwords by:', desc: this.buildRememberPasswordDescription(),
				visible: () => settings.rememberPassword,
				render: row => { row.addDropdown(dropdown => dropdown
					.addOption(SessionPasswordService.LevelVault, 'Vault')
					.addOption(SessionPasswordService.LevelParentPath, 'Folder')
					.addOption(SessionPasswordService.LevelFilename, 'File')
					.addOption(SessionPasswordService.LevelExternalFile, 'External file')
					.addOption(SessionPasswordService.LevelKeychain, 'Obsidian keychain')
					.setValue(settings.rememberPasswordLevel).onChange(async value => {
						settings.rememberPasswordLevel = value;
						SessionPasswordService.setLevel(value);
						await this.plugin.saveSettings();
						this.refreshDomState();
					})); },
			},
			{
				name: 'Remember password timeout', desc: 'Minutes to remember passwords. Zero means until Obsidian is closed.',
				visible: () => settings.rememberPassword && !external() && !keychain(),
				render: row => { row.addSlider(slider => slider.setLimits(0, 120, 5)
					.setValue(settings.rememberPasswordTimeout).onChange(async value => {
						settings.rememberPasswordTimeout = value;
						SessionPasswordService.setAutoExpire(value);
						await this.plugin.saveSettings();
					})); },
			},
			{
				name: 'Keychain secret',
				desc: SessionPasswordService.keychainSettingsExplanation + ' Manage secrets in Obsidian Settings → Keychain. Configure the secret on each device. Clearing the session cache does not remove it.',
				visible: () => settings.rememberPassword && keychain(),
				render: row => { row.addComponent(el => new SecretComponent(this.app, el)
					.setValue(settings.keychainSecretId).onChange(async value => {
						settings.keychainSecretId = value ?? '';
						SessionPasswordService.setKeychain(settings.keychainSecretId, this.app.secretStorage);
						await this.plugin.saveSettings();
					})); },
			},

			{
				name: 'External file paths',
				desc: 'One path per line, relative to the vault (including ../). Desktop also supports absolute paths. Access depends on platform permissions.',
				visible: () => settings.rememberPassword && external(),
				render: row => {
					row.addTextArea(text => {
						text.setValue(settings.rememberPasswordExternalFilePaths.join('\n')).onChange(async value => {
							settings.rememberPasswordExternalFilePaths = value.trim().split('\n').filter(path => path.length > 0);
							SessionPasswordService.setExternalFilePaths(settings.rememberPasswordExternalFilePaths);
							await this.plugin.saveSettings();
						});
						text.inputEl.placeholder = 'Enter one path per line';
						text.inputEl.classList.add('meld-encrypt-external-paths');
						text.inputEl.rows = 4;
					}).addButton(button => button.setIcon('check').setTooltip('Check paths').onClick(async () => {
						for (const path of settings.rememberPasswordExternalFilePaths) {
							new Notice(`${await SessionPasswordService.canFetchContents(path) ? '✔️' : '❌'} ${path}`);
						}
					}));
					row.controlEl.classList.add('meld-encrypt-external-paths-control');
				},
			},
			...this.features.flatMap(feature => feature.getSettingDefinitions(() => this.plugin.saveSettings())),
		];
	}

	private buildRememberPasswordDescription( ) : DocumentFragment {
		const f = new DocumentFragment();

		const tbody = f.createEl( 'table' ).createTBody();

		
		let tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'Vault:', attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: 'Reuse the last password across the vault.' });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'Folder:', attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: 'Remember a separate password for each folder.' });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'File:', attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: 'Remember a separate password for each file.' });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: 'External file:', attr: { 'align': 'right', 'style': 'width:12em;'} });
		tr.createEl( 'td', { text: 'Read the password from the first readable, nonempty file.' });

		tr = tbody.createEl('tr');
		tr.createEl('th', { text: 'Obsidian keychain:' });
		tr.createEl('td', { text: 'Read the password from the selected secret.' });

		return f;
	}

}