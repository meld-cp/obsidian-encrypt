import { t, type TranslationKey } from '../i18n/i18n.ts';

// Keep titles identical to addRibbonIcon calls. They are stable identifiers:
// hidden icons are saved by these titles, so they must not be translated.
export const RIBBON_ICON_TITLES = [
	'New encrypted note',
	'Lock and close all open encrypted notes',
	'Convert to or from an encrypted note',
	'Encrypt selection',
	'Decrypt at Cursor',
] as const;

const RIBBON_ICON_LABEL_KEYS: Record<typeof RIBBON_ICON_TITLES[number], TranslationKey> = {
	'New encrypted note': 'ribbon.newEncryptedNote',
	'Lock and close all open encrypted notes': 'ribbon.lockAndCloseAll',
	'Convert to or from an encrypted note': 'ribbon.convertNote',
	'Encrypt selection': 'ribbon.encryptSelection',
	'Decrypt at Cursor': 'ribbon.decryptAtCursor',
};

/** Returns the translated label for a ribbon icon title, or the title itself if it is unknown. */
export function getRibbonIconLabel(title: string): string {
	if (!Object.prototype.hasOwnProperty.call(RIBBON_ICON_LABEL_KEYS, title)) return title;
	return t(RIBBON_ICON_LABEL_KEYS[title as typeof RIBBON_ICON_TITLES[number]]);
}
