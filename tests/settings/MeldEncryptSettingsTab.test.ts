import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Notice } from 'obsidian';
import type { App, Setting, SettingDefinitionItem, SettingDefinitionRender } from 'obsidian';
import type MeldEncrypt from '../../src/main.ts';
import type { IMeldEncryptPluginSettings } from '../../src/settings/MeldEncryptPluginSettings.ts';
import MeldEncryptSettingsTab from '../../src/settings/MeldEncryptSettingsTab.ts';
import FeatureInplaceEncrypt from '../../src/features/feature-inplace-encrypt/FeatureInplaceEncrypt.ts';

const service = vi.hoisted(() => ({
	LevelVault: 'vault', LevelParentPath: 'parent', LevelFilename: 'file', LevelExternalFile: 'externalFile',
	setActive: vi.fn(), setLevel: vi.fn(), setAutoExpire: vi.fn(), setExternalFilePaths: vi.fn(),
	canFetchContents: vi.fn().mockResolvedValue(true),
}));
vi.mock('../../src/services/SessionPasswordService.ts', () => ({ SessionPasswordService: service }));
vi.mock('obsidian', () => ({
	Notice: vi.fn(), MarkdownView: class {}, Modal: class {},
	PluginSettingTab: class { refreshDomState = vi.fn(); },
}));

describe('searchable settings', () => {
	let tab: MeldEncryptSettingsTab;
	let settings: IMeldEncryptPluginSettings;
	const saveSettings = vi.fn().mockResolvedValue(undefined);
	beforeEach(() => {
		vi.clearAllMocks();
		const fragment = { createEl: () => fragment, createTBody: () => fragment };
		vi.stubGlobal('DocumentFragment', class { createEl = fragment.createEl; });
		settings = {
			confirmPassword: true, rememberPassword: true, rememberPasswordTimeout: 10,
			rememberPasswordLevel: 'vault', rememberPasswordExternalFilePaths: [],
			featureWholeNoteEncrypt: {},
			featureInplaceEncrypt: { expandToWholeLines: true, markerSearchLimit: 1000, showMarkerWhenReadingDefault: false },
		};
		tab = new MeldEncryptSettingsTab({} as App, { saveSettings } as unknown as MeldEncrypt, settings, []);
	});
	afterEach(() => vi.unstubAllGlobals());

	function row(name: string): SettingDefinitionRender {
		return tab.getSettingDefinitions().find(item => 'name' in item && item.name === name) as SettingDefinitionRender;
	}
	function changeHandler(definition: SettingDefinitionRender) {
		let change: (value: never) => Promise<void> = async () => {};
		const control = {
			setValue: () => control, addOption: () => control, setLimits: () => control,
			onChange: (callback: typeof change) => { change = callback; return control; },
		};
		const setting = {
			addToggle: (callback: (value: typeof control) => void) => callback(control),
			addDropdown: (callback: (value: typeof control) => void) => callback(control),
			addSlider: (callback: (value: typeof control) => void) => callback(control),
		};
		definition.render(setting as unknown as Setting, {} as never);
		return (value: unknown) => change(value as never);
	}

	it('indexes all settings and preserves conditional visibility', () => {
		expect(tab.getSettingDefinitions().map(item => 'name' in item ? item.name : item.heading)).toEqual([
			'Confirm password?', 'Remember password?', 'Remember passwords by:', 'Remember password timeout', 'External file paths',
		]);
		const visible = (name: string) => (row(name).visible as () => boolean)();
		expect(visible('Remember password timeout')).toBe(true);
		expect(visible('External file paths')).toBe(false);
		settings.rememberPasswordLevel = 'externalFile';
		expect(visible('Remember password timeout')).toBe(false);
		expect(visible('External file paths')).toBe(true);
		settings.rememberPassword = false;
		expect(visible('External file paths')).toBe(false);
		expect(visible('Remember passwords by:')).toBe(false);
	});

	it('persists controls and applies password service changes', async () => {
		await changeHandler(row('Confirm password?'))(false);
		await changeHandler(row('Remember password?'))(false);
		await changeHandler(row('Remember passwords by:'))('externalFile');
		await changeHandler(row('Remember password timeout'))(0);
		expect(settings.confirmPassword).toBe(false);
		expect(service.setActive).toHaveBeenCalledWith(false);
		expect(service.setLevel).toHaveBeenCalledWith('externalFile');
		expect(service.setAutoExpire).toHaveBeenCalledWith(0);
		expect(saveSettings).toHaveBeenCalledTimes(4);
		expect(tab.refreshDomState).toHaveBeenCalledTimes(2);
	});

	it('persists parent paths and checks each configured path', async () => {
		let change: (value: string) => Promise<void> = async () => {};
		let click: () => Promise<void> = async () => {};
		const text = {
			setValue: () => text,
			onChange: (callback: typeof change) => { change = callback; return text; },
			inputEl: { placeholder: '', rows: 0, classList: { add() {} } },
		};
		const button = {
			setIcon: () => button, setTooltip: () => button,
			onClick: (callback: typeof click) => { click = callback; return button; },
		};
		const setting = {
			addTextArea: (callback: (value: typeof text) => void) => { callback(text); return setting; },
			addButton: (callback: (value: typeof button) => void) => { callback(button); return setting; },
			controlEl: { classList: { add() {} } },
		};
		row('External file paths').render(setting as unknown as Setting, {} as never);
		await change('../secrets/password.txt\n/absolute/password.txt');
		expect(settings.rememberPasswordExternalFilePaths).toEqual(['../secrets/password.txt', '/absolute/password.txt']);
		expect(service.setExternalFilePaths).toHaveBeenCalledWith(settings.rememberPasswordExternalFilePaths);
		expect(saveSettings).toHaveBeenCalledOnce();
		service.canFetchContents.mockResolvedValueOnce(false).mockResolvedValueOnce(true);
		await click();
		expect(service.canFetchContents.mock.calls).toEqual([['../secrets/password.txt'], ['/absolute/password.txt']]);
		expect(Notice).toHaveBeenCalledWith('❌ ../secrets/password.txt');
		expect(Notice).toHaveBeenCalledWith('✔️ /absolute/password.txt');
	});

	it('includes searchable inline feature settings and persists edits', async () => {
		const feature = new FeatureInplaceEncrypt();
		Object.assign(feature, { featureSettings: settings.featureInplaceEncrypt });
		tab.features = [feature];
		const definitions = tab.getSettingDefinitions().slice(5);
		const group = definitions[0] as { heading: string; items: SettingDefinitionItem[] };
		expect(group.heading).toBe('In-place encryption');
		expect(group.items).toHaveLength(3);
		await changeHandler(group.items[0] as SettingDefinitionRender)(false);
		expect(settings.featureInplaceEncrypt.expandToWholeLines).toBe(false);
		expect(saveSettings).toHaveBeenCalledOnce();
	});
});
