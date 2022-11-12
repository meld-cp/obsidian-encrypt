import MeldEncrypt from "../main";
import { MeldEncryptPluginSettings } from "../settings/MeldEncryptPluginSettings";

export interface IMeldEncryptPluginFeature {
	onload(plugin: MeldEncrypt, settings: MeldEncryptPluginSettings): Promise<void>;
	onunload(): void;
	buildSettingsUi(
		containerEl: HTMLElement,
		settings:MeldEncryptPluginSettings,
		saveSettingCallback : () => Promise<void>
	) : void;
}
