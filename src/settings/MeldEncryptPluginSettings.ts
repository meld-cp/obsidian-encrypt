import { IFeatureInplaceEncryptSettings } from "../features/feature-inplace-encrypt/IFeatureInplaceEncryptSettings.ts";
import { IFeatureWholeNoteEncryptSettings } from "../features/feature-whole-note-encrypt/IFeatureWholeNoteEncryptSettings.ts";

export interface IMeldEncryptPluginSettings {
	/** Ribbon titles are also Obsidian's persisted ribbon identifiers; keep them stable. */
	hiddenRibbonIcons?: string[];
	confirmPassword: boolean;
	keychainSecretId: string;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
	rememberPasswordLevel: string;
	rememberPasswordExternalFilePaths: string[];

	featureWholeNoteEncrypt : IFeatureWholeNoteEncryptSettings;
	featureInplaceEncrypt : IFeatureInplaceEncryptSettings;
}

