import { afterEach, describe, expect, it } from 'vitest';
import { locales, setLocale, t, type TranslationKey } from '../../src/i18n/i18n.ts';
import { en } from '../../src/i18n/locales/en.ts';
import { RIBBON_ICON_TITLES, getRibbonIconLabel } from '../../src/settings/RibbonIcons.ts';

const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort();
const englishKeys = Object.keys(en) as TranslationKey[];

afterEach(() => setLocale('en'));

describe('t', () => {
	it('uses English by default', () => {
		expect(t('command.decrypt')).toBe('Decrypt');
	});

	it('replaces placeholders and leaves unknown tokens untouched', () => {
		expect(t('notice.itemsCleared', { count: 3 })).toBe('Items cleared: 3');
		expect(t('modal.decryptFile.title', { name: 'Diary' })).toBe('Decrypt "Diary"');
		expect(t('modal.decryptFile.title', {})).toBe('Decrypt "{name}"');
		// Values are inserted literally, never re-scanned for placeholders.
		expect(t('modal.decryptFile.title', { name: '{name} $& {hint}' })).toBe('Decrypt "{name} $& {hint}"');
	});
});

describe('setLocale', () => {
	it('selects a registered language', () => {
		setLocale('ko');
		expect(t('command.decrypt')).toBe('복호화');
		expect(t('notice.itemsCleared', { count: 3 })).toBe('지운 항목: 3개');
	});

	it('falls back from a regional variant to its base language', () => {
		setLocale('ko-KR');
		expect(t('form.password')).toBe('비밀번호');
		setLocale('KO');
		expect(t('form.password')).toBe('비밀번호');
	});

	it.each(['xx', 'xx-YY', '', null, undefined])('falls back to English for %j', language => {
		setLocale('ko');
		setLocale(language);
		expect(t('form.password')).toBe('Password');
	});
});

describe.each(Object.entries(locales))('locale %s', (_code, locale) => {
	it('only defines known keys with non-empty text', () => {
		for (const [key, text] of Object.entries(locale)) {
			expect(englishKeys, key).toContain(key);
			expect(text.trim(), key).not.toBe('');
		}
	});

	it('keeps the same placeholders as English', () => {
		for (const [key, text] of Object.entries(locale)) {
			expect(placeholders(text), key).toEqual(placeholders(en[key as TranslationKey]));
		}
	});
});

describe('Korean', () => {
	it('translates every key', () => {
		expect(Object.keys(locales.ko).sort()).toEqual([...englishKeys].sort());
	});
});

describe('ribbon icon labels', () => {
	it('match the stable titles in English, so existing users see no change', () => {
		for (const title of RIBBON_ICON_TITLES) expect(getRibbonIconLabel(title)).toBe(title);
	});

	it('are translated in other languages and pass unknown titles through', () => {
		setLocale('ko');
		for (const title of RIBBON_ICON_TITLES) expect(getRibbonIconLabel(title)).not.toBe(title);
		expect(getRibbonIconLabel('Some other icon')).toBe('Some other icon');
		expect(getRibbonIconLabel('constructor')).toBe('constructor');
	});
});
