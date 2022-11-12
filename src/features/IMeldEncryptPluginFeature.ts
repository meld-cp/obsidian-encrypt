import MeldEncrypt from "../main";
import { IMeldEncryptPluginSettings } from "../settings/MeldEncryptPluginSettings";

export interface IMeldEncryptPluginFeature {
	onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings): Promise<void>;
	onunload(): void;
	buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	) : void;
}
