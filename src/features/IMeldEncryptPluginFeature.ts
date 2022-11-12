import MeldEncrypt from "../main";
import { MeldEncryptPluginSettings } from "../settings/MeldEncryptPluginSettings";

export interface IMeldEncryptPluginFeature {
	onload(plugin: MeldEncrypt, settings: MeldEncryptPluginSettings): Promise<void>;
	onunload(): void;
	applySettings( settings: MeldEncryptPluginSettings ):void;
}
