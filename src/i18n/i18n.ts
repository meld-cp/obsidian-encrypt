import { en } from './locales/en.ts';
import { ko } from './locales/ko.ts';

export type TranslationKey = keyof typeof en;

/** A complete translation. Use this type for a locale to have missing keys reported at compile time. */
export type Translation = Record<TranslationKey, string>;

type TranslationValues = Record<string, string | number>;

// Keys are Obsidian language codes, as returned by getLanguage().
// To add a language: create ./locales/<code>.ts and register it here.
export const locales: Readonly<Record<string, Partial<Translation>>> = {
	en,
	ko,
};

let activeLocale: Partial<Translation> = en;

/**
 * Selects the locale used by t(). Unknown languages fall back to English,
 * and regional variants (e.g. pt-BR) fall back to their base language first.
 */
export function setLocale(language: string | null | undefined): void {
	const code = (language ?? '').toLowerCase();
	const match = Object.keys(locales).find(key => key.toLowerCase() === code)
		?? Object.keys(locales).find(key => key.toLowerCase() === code.split('-')[0]);
	activeLocale = match ? locales[match] : en;
}

/** Returns the UI string for a key, replacing {placeholder} tokens with the given values. */
export function t(key: TranslationKey, values?: TranslationValues): string {
	const template: string = activeLocale[key] ?? en[key];
	if (!values) return template;
	return template.replace(/\{(\w+)\}/g, (token, name: string) =>
		Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : token
	);
}
