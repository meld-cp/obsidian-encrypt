export interface MeldEncryptPluginSettings {
	// Common settings
	confirmPassword: boolean;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
	
	// Whole note encryption settings
	addRibbonIconToCreateNote: boolean;

	// Selection Encrypt feature settings
	expandToWholeLines: boolean;
	showCopyButton: boolean;
}
