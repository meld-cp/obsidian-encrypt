import { App, SecretComponent, Notice, PluginSettingTab, type SettingDefinitionItem } from "obsidian";
import { IMeldEncryptPluginFeature } from "../features/IMeldEncryptPluginFeature.ts";
import { SessionPasswordService } from "../services/SessionPasswordService.ts";
import MeldEncrypt from "../main.ts";
import { IMeldEncryptPluginSettings } from "./MeldEncryptPluginSettings.ts";
import { RIBBON_ICON_TITLES, getRibbonIconLabel } from './RibbonIcons.ts';
import { t, type TranslationKey } from '../i18n/i18n.ts';

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
				name: t('settings.confirmPassword.name'), desc: t('settings.confirmPassword.desc'),
				render: row => { row.addToggle(toggle => toggle.setValue(settings.confirmPassword).onChange(async value => {
					settings.confirmPassword = value;
					await this.plugin.saveSettings();
				})); },
			},
			{
				name: t('settings.rememberPassword.name'), desc: t('settings.rememberPassword.desc'),
				render: row => { row.addToggle(toggle => toggle.setValue(settings.rememberPassword).onChange(async value => {
					settings.rememberPassword = value;
					SessionPasswordService.setActive(value);
					await this.plugin.saveSettings();
					this.refreshDomState();
				})); },
			},
			{
				name: t('settings.rememberBy.name'), desc: this.buildRememberPasswordDescription(),
				visible: () => settings.rememberPassword,
				render: row => { row.addDropdown(dropdown => dropdown
					.addOption(SessionPasswordService.LevelVault, t('settings.rememberBy.vault'))
					.addOption(SessionPasswordService.LevelParentPath, t('settings.rememberBy.folder'))
					.addOption(SessionPasswordService.LevelFilename, t('settings.rememberBy.file'))
					.addOption(SessionPasswordService.LevelExternalFile, t('settings.rememberBy.externalFile'))
					.addOption(SessionPasswordService.LevelKeychain, t('settings.rememberBy.keychain'))
					.setValue(settings.rememberPasswordLevel).onChange(async value => {
						settings.rememberPasswordLevel = value;
						SessionPasswordService.setLevel(value);
						await this.plugin.saveSettings();
						this.refreshDomState();
					})); },
			},
			{
				name: t('settings.rememberTimeout.name'), desc: t('settings.rememberTimeout.desc'),
				visible: () => settings.rememberPassword && !external() && !keychain(),
				render: row => { row.addSlider(slider => slider.setLimits(0, 120, 5)
					.setValue(settings.rememberPasswordTimeout).onChange(async value => {
						settings.rememberPasswordTimeout = value;
						SessionPasswordService.setAutoExpire(value);
						await this.plugin.saveSettings();
					})); },
			},
			{
				name: t('settings.keychainSecret.name'),
				desc: t('keychain.settingsExplanation') + ' ' + t('settings.keychainSecret.manageDesc'),
				visible: () => settings.rememberPassword && keychain(),
				render: row => { row.addComponent(el => new SecretComponent(this.app, el)
					.setValue(settings.keychainSecretId).onChange(async value => {
						settings.keychainSecretId = value ?? '';
						SessionPasswordService.setKeychain(settings.keychainSecretId, this.app.secretStorage);
						await this.plugin.saveSettings();
					})); },
			},

			{
				name: t('settings.externalFilePaths.name'),
				desc: t('settings.externalFilePaths.desc'),
				visible: () => settings.rememberPassword && external(),
				render: row => {
					row.addTextArea(text => {
						text.setValue(settings.rememberPasswordExternalFilePaths.join('\n')).onChange(async value => {
							settings.rememberPasswordExternalFilePaths = value.trim().split('\n').filter(path => path.length > 0);
							SessionPasswordService.setExternalFilePaths(settings.rememberPasswordExternalFilePaths);
							await this.plugin.saveSettings();
						});
						text.inputEl.placeholder = t('settings.externalFilePaths.placeholder');
						text.inputEl.classList.add('meld-encrypt-external-paths');
						text.inputEl.rows = 4;
					}).addButton(button => button.setIcon('check').setTooltip(t('settings.externalFilePaths.checkTooltip')).onClick(async () => {
						for (const path of settings.rememberPasswordExternalFilePaths) {
							new Notice(`${await SessionPasswordService.canFetchContents(path) ? '✔️' : '❌'} ${path}`);
						}
					}));
					row.controlEl.classList.add('meld-encrypt-external-paths-control');
				},
			},
			...this.features.flatMap(feature => feature.getSettingDefinitions(() => this.plugin.saveSettings())),
			{
				type: 'group',
				heading: t('settings.ribbonIcons.heading'),
				items: RIBBON_ICON_TITLES.map(title => ({
					name: getRibbonIconLabel(title),
					desc: t('settings.ribbonIcons.desc'),
					render: row => { row.addToggle(toggle => toggle
						.setValue(!settings.hiddenRibbonIcons?.includes(title))
						.onChange(value => this.plugin.setRibbonIconVisible(title, value))); },
				})),
			},
		];
	}

	private buildRememberPasswordDescription( ) : DocumentFragment {
		const f = new DocumentFragment();
		const optionLabel = (key: TranslationKey) => t('settings.rememberBy.optionLabel', { option: t(key) });

		const tbody = f.createEl( 'table' ).createTBody();

		
		let tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: optionLabel('settings.rememberBy.vault'), attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: t('settings.rememberBy.vaultDesc') });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: optionLabel('settings.rememberBy.folder'), attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: t('settings.rememberBy.folderDesc') });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: optionLabel('settings.rememberBy.file'), attr: { 'align': 'right'} });
		tr.createEl( 'td', { text: t('settings.rememberBy.fileDesc') });
		
		tr = tbody.createEl( 'tr' );
		tr.createEl( 'th', { text: optionLabel('settings.rememberBy.externalFile'), attr: { 'align': 'right', 'style': 'width:12em;'} });
		tr.createEl( 'td', { text: t('settings.rememberBy.externalFileDesc') });

		tr = tbody.createEl('tr');
		tr.createEl('th', { text: optionLabel('settings.rememberBy.keychain') });
		tr.createEl('td', { text: t('settings.rememberBy.keychainDesc') });

		return f;
	}

}
