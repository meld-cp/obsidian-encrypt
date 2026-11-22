import { Notice, Plugin, getLanguage, type IconName } from 'obsidian';
import MeldEncryptSettingsTab from './settings/MeldEncryptSettingsTab.ts';
import { IMeldEncryptPluginSettings } from './settings/MeldEncryptPluginSettings.ts';
import { IMeldEncryptPluginFeature } from './features/IMeldEncryptPluginFeature.ts';
import { SessionPasswordService } from './services/SessionPasswordService.ts';
import FeatureInplaceEncrypt from './features/feature-inplace-encrypt/FeatureInplaceEncrypt.ts';
import FeatureConvertNote from './features/feature-convert-note/FeatureConvertNote.ts';
import FeatureWholeNoteEncryptV2 from './features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt.ts';
import { setLocale, t } from './i18n/i18n.ts';
import { getRibbonIconLabel } from './settings/RibbonIcons.ts';

export default class MeldEncrypt extends Plugin {

	private pluginSettings: IMeldEncryptPluginSettings;

	private ribbonIcons = new Map<string, HTMLElement>();

	private enabledFeatures : IMeldEncryptPluginFeature[] = [];

	async onload() {
		
		// Must run before any UI text is created.
		setLocale(getLanguage());

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
			name: t('command.clearSessionCache'),
			icon: 'shield-ellipsis',
			callback: () => {
				const itemsCleared = SessionPasswordService.clear();
				new Notice( t('notice.itemsCleared', { count: itemsCleared }) );
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

	// `title` is the stable English identifier from RIBBON_ICON_TITLES. It keys the
	// saved visibility preference; only the label shown to the user is translated.
	// Obsidian keys its own ribbon order by the displayed label, so that order is
	// per language for non-English users.
	override addRibbonIcon(icon: IconName, title: string, callback: (evt: MouseEvent) => unknown): HTMLElement {
		const element = super.addRibbonIcon(icon, getRibbonIconLabel(title), callback);
		this.ribbonIcons.set(title, element);
		element.toggleClass('meld-encrypt-ribbon-hidden', this.pluginSettings.hiddenRibbonIcons?.includes(title) ?? false);
		return element;
	}

	async setRibbonIconVisible(title: string, visible: boolean): Promise<void> {
		const hidden = new Set(this.pluginSettings.hiddenRibbonIcons ?? []);
		if (visible) hidden.delete(title);
		else hidden.add(title);
		this.pluginSettings.hiddenRibbonIcons = [...hidden];
		this.ribbonIcons.get(title)?.toggleClass('meld-encrypt-ribbon-hidden', !visible);
		await this.saveSettings();
	}

	async loadSettings() {
		
		const DEFAULT_SETTINGS: IMeldEncryptPluginSettings = {
			hiddenRibbonIcons: [],
			confirmPassword: true,
			keychainSecretId: '',
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

		SessionPasswordService.setKeychain(this.pluginSettings.keychainSecretId, this.app.secretStorage);

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
