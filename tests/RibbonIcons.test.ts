import { beforeEach, expect, it, vi } from 'vitest';
import type { App, PluginManifest } from 'obsidian';
import MeldEncrypt from '../src/main.ts';
import { RIBBON_ICON_TITLES } from '../src/settings/RibbonIcons.ts';

const state = vi.hoisted(() => ({ saved: null as Record<string, unknown> | null }));
vi.mock('obsidian', () => ({
	Plugin: class {
		app = { vault: { adapter: {} }, secretStorage: {} };
		loadData = async () => state.saved;
		saveData = vi.fn(async (settings: Record<string, unknown>) => {
			state.saved = JSON.parse(JSON.stringify(settings));
		});
		addRibbonIcon(_icon: string, _title: string, callback: unknown) {
			const classes = new Set<string>();
			return { callback, classes, toggleClass: (name: string, enabled: boolean) => {
				if (enabled) classes.add(name);
				else classes.delete(name);
			} };
		}
	},
	PluginSettingTab: class {}, MarkdownView: class {}, Modal: class {},
}));
vi.mock('../src/services/SessionPasswordService.ts', () => ({
	SessionPasswordService: {
		LevelVault: 'vault', setKeychain() {}, setActive() {}, setAutoExpire() {}, setLevel() {}, setExternalFilePaths() {},
	},
}));

beforeEach(() => { state.saved = null; });

async function plugin() {
	const plugin = new MeldEncrypt({} as App, {} as PluginManifest);
	await plugin.loadSettings();
	return plugin;
}
function register(plugin: MeldEncrypt, title: string) {
	const callback = vi.fn();
	const element = plugin.addRibbonIcon('lock', title, callback) as unknown as {
		classes: Set<string>; callback: () => void;
	};
	return { element, callback };
}
const hidden = (element: { classes: Set<string> }) => element.classes.has('meld-encrypt-ribbon-hidden');

it('keeps all existing ribbon icons visible by default and preserves callbacks', async () => {
	state.saved = { confirmPassword: false };
	const instance = await plugin();
	for (const title of RIBBON_ICON_TITLES) {
		const { element, callback } = register(instance, title);
		expect(hidden(element)).toBe(false);
		element.callback();
		expect(callback).toHaveBeenCalledOnce();
	}
});

it('persists independent visibility across reloads and late registration', async () => {
	let instance = await plugin();
	const first = register(instance, RIBBON_ICON_TITLES[0]);
	const second = register(instance, RIBBON_ICON_TITLES[1]);
	await instance.setRibbonIconVisible(RIBBON_ICON_TITLES[0], false);
	await instance.setRibbonIconVisible(RIBBON_ICON_TITLES[0], false);
	expect(hidden(first.element)).toBe(true);
	expect(hidden(second.element)).toBe(false);
	expect(state.saved?.hiddenRibbonIcons).toEqual([RIBBON_ICON_TITLES[0]]);
	instance = await plugin();
	expect(hidden(register(instance, RIBBON_ICON_TITLES[0]).element)).toBe(true);
	expect(hidden(register(instance, RIBBON_ICON_TITLES[1]).element)).toBe(false);
	await instance.setRibbonIconVisible(RIBBON_ICON_TITLES[0], true);
	expect(state.saved?.hiddenRibbonIcons).toEqual([]);
	instance = await plugin();
	expect(hidden(register(instance, RIBBON_ICON_TITLES[0]).element)).toBe(false);
});

it('can hide all icons and restore just one without clearing unrelated preferences', async () => {
	const instance = await plugin();
	for (const title of RIBBON_ICON_TITLES) await instance.setRibbonIconVisible(title, false);
	for (const title of RIBBON_ICON_TITLES) expect(hidden(register(instance, title).element)).toBe(true);
	await instance.setRibbonIconVisible(RIBBON_ICON_TITLES[2], true);
	expect(state.saved?.hiddenRibbonIcons).toEqual(RIBBON_ICON_TITLES.filter((_, index) => index !== 2));
});
