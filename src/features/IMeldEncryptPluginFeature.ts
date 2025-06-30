import MeldEncrypt from "../main.ts";
import { IMeldEncryptPluginSettings } from "../settings/MeldEncryptPluginSettings.ts";

export interface IMeldEncryptPluginFeature {
	onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings): Promise<void>;
	onunload(): void;
	buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	) : void;
}
