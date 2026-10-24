import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { App, Editor, EditorPosition } from 'obsidian';
import { Notice } from 'obsidian';
import type MeldEncrypt from '../../../src/main.ts';
import PasswordModal from '../../../src/features/feature-inplace-encrypt/PasswordModal.ts';
import DecryptModal from '../../../src/features/feature-inplace-encrypt/DecryptModal.ts';
import FeatureInplaceEncrypt from '../../../src/features/feature-inplace-encrypt/FeatureInplaceEncrypt.ts';
import type { Decryptable } from '../../../src/features/feature-inplace-encrypt/Decryptable.ts';
import { FeatureInplaceTextAnalysis } from '../../../src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';
import { CryptoHelperFactory } from '../../../src/services/CryptoHelperFactory.ts';
import { SessionPasswordService } from '../../../src/services/SessionPasswordService.ts';

type Row = {
	name: string;
	description: string;
	input?: { change(value: string): void; enter(): void };
	button?: { label: string; click(): void };
};
type PasswordField = { container: HTMLElement; name: string; desc?: string };
const ui = vi.hoisted(() => ({
	rows: [] as Row[],
	closed: 0,
	closeResult: Promise.resolve() as Promise<unknown>,
	modal: null as PasswordModal | null,
}));

vi.mock('obsidian', () => {
	class TextInput {
		value = '';
		changeHandler = (_value: string) => {};
		keypress?: (event: { key: string; preventDefault(): void }, target: { value: string; instanceOf(): boolean }) => void;
		inputEl = {
			placeholder: '', rows: 0, style: { width: '' },
			on: (_event: string, _selector: string, callback: TextInput['keypress']) => { this.keypress = callback; },
		};
		setValue(value: string) { this.value = value; return this; }
		onChange(callback: (value: string) => void) { this.changeHandler = callback; return this; }
		change(value: string) { this.value = value; this.changeHandler(value); }
		enter() { this.keypress?.({ key: 'Enter', preventDefault() {} }, { value: this.value, instanceOf: () => true }); }
	}
	class Button {
		label = '';
		click = () => {};
		setButtonText(label: string) { this.label = label; return this; }
		onClick(callback: () => void) { this.click = callback; return this; }
	}
	class Setting {
		name = '';
		description = '';
		input?: TextInput;
		button?: Button;
		components = [];
		visible = true;
		settingEl = { hide: () => { this.visible = false; }, isShown: () => this.visible };
		constructor(_container: unknown) { ui.rows.push(this); }
		setHeading() { return this; }
		setName(name: string) { this.name = name; return this; }
		setDesc(desc: string) { this.description = desc; return this; }
		addText(callback: (input: TextInput) => void) { this.input = new TextInput(); callback(this.input); return this; }
		addTextArea(callback: (input: TextInput) => void) { return this.addText(callback); }
		addButton(callback: (button: Button) => void) { this.button = new Button(); callback(this.button); return this; }
		addToggle(callback: (toggle: { setValue(value: boolean): unknown; onChange(fn: (value: boolean) => void): unknown }) => void) {
			callback({ setValue() { return this; }, onChange() { return this; } });
			return this;
		}
	}
	return {
		Setting,
		TextComponent: TextInput,
		MarkdownView: class {},
		Notice: vi.fn(),
		Modal: class {
			contentEl = { empty: () => { ui.rows = []; }, classList: { add() {} } };
			titleEl = { setText() {} };
			onOpen() {}
			onClose() {}
			open() { ui.modal = this as unknown as PasswordModal; this.onOpen(); }
			close() { ui.closed++; ui.closeResult = Promise.resolve(this.onClose()); }
		},
	};
});

vi.mock('../../../src/services/UiHelper.ts', async () => {
	const { Setting } = await import('obsidian');
	return { UiHelper: {
		buildPasswordSetting: (params: PasswordField) => new Setting(params.container).setName(params.name).setDesc(params.desc ?? ''),
	} };
});

type InlineActions = {
	processSelection(checking: boolean, editor: Editor, text: string, start: EditorPosition, end: EditorPosition, mode: 'encrypt'): boolean;
	encryptSelection(editor: Editor, value: { text: string; hint: string }, password: string, start: EditorPosition, end: EditorPosition, visible: boolean): Promise<boolean>;
	decryptSelection(editor: Editor, value: Decryptable, password: string, start: EditorPosition, end: EditorPosition): Promise<boolean>;
};

describe('inline password hint validation', () => {
	const start = { line: 0, ch: 0 };
	const end = { line: 0, ch: 6 };
	const invalidHints = ['a 💡 hint', 'key🔐ring', '%%🔐γ marker', 'suffix 🔐%%'];
	let feature: FeatureInplaceEncrypt;
	let actions: InlineActions;
	let payload: string;
	const replaceSelection = vi.fn((value: string) => { payload = value; });
	const setSelection = vi.fn();
	const editor = { replaceSelection, setSelection, focus: vi.fn() } as unknown as Editor;

	beforeEach(() => {
		vi.clearAllMocks();
		ui.closed = 0;
		ui.rows = [];
		payload = '';
		vi.stubGlobal('HTMLInputElement', class {});
		feature = new FeatureInplaceEncrypt();
		feature.plugin = { app: { workspace: { getActiveFile: () => ({ path: 'note.md' }) } } } as unknown as MeldEncrypt;
		feature.pluginSettings = { rememberPassword: false, confirmPassword: false } as FeatureInplaceEncrypt['pluginSettings'];
		feature.featureSettings = { showMarkerWhenReadingDefault: true, expandToWholeLines: false, markerSearchLimit: 10000 };
		actions = feature as unknown as InlineActions;
	});

	afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });

	function hintRow() { return ui.rows.find(row => row.name === 'Optional password hint')!; }
	function confirm() { ui.rows.find(row => row.button?.label === 'Confirm')!.button!.click(); }

	it.each(invalidHints)('rejects hint %j without changing the selection or cached password', async hint => {
		const cache = vi.spyOn(SessionPasswordService, 'putByPath');
		actions.processSelection(false, editor, 'secret', start, end, 'encrypt');
		hintRow().input!.change(hint);
		confirm();

		expect(ui.closed).toBe(0);
		expect(ui.modal?.resultConfirmed).toBe(false);
		expect(hintRow().description).toContain('cannot contain 💡 or 🔐');
		ui.modal!.close();
		await ui.closeResult;
		expect(setSelection).not.toHaveBeenCalled();
		expect(replaceSelection).not.toHaveBeenCalled();
		expect(cache).not.toHaveBeenCalled();
	});

	it('also validates hints submitted with Enter', () => {
		new PasswordModal({} as App, true, false, true, 'pw').open();
		hintRow().input!.change('invalid 💡 hint');
		hintRow().input!.enter();

		expect(ui.closed).toBe(0);
		expect(ui.modal?.resultConfirmed).toBe(false);
		expect(hintRow().description).toContain('cannot contain');
	});

	it('shows an invalid remembered hint immediately and accepts its correction', () => {
		new PasswordModal({} as App, true, false, true, 'pw', 'bad 💡 hint').open();
		expect(hintRow().description).toContain('cannot contain');
		confirm();
		expect(ui.closed).toBe(0);
		hintRow().input!.change('corrected café hint');
		expect(hintRow().description).toBe('');
		confirm();

		expect(ui.closed).toBe(1);
		expect(ui.modal?.resultConfirmed).toBe(true);
		expect(ui.modal?.resultHint).toBe('corrected café hint');
	});

	it('does not block decryption because of an existing hint', () => {
		new PasswordModal({} as App, false, false, true, 'pw', 'old 🔐 hint').open();
		confirm();

		expect(ui.closed).toBe(1);
		expect(ui.modal?.resultConfirmed).toBe(true);
	});

	it.each(invalidHints)('guards the encryption writer against hint %j bypassing the dialog', async hint => {
		const encrypt = vi.spyOn(CryptoHelperFactory.BuildDefault(), 'encryptToBase64');
		expect(await actions.encryptSelection(editor, { text: 'secret', hint }, 'pw', start, end, true)).toBe(false);

		expect(encrypt).not.toHaveBeenCalled();
		expect(setSelection).not.toHaveBeenCalled();
		expect(replaceSelection).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith(expect.stringContaining('cannot contain 💡 or 🔐'));
	});

	it.each([
		{ hint: '', visible: true }, { hint: '', visible: false },
		{ hint: 'clé 🥑 50% $&', visible: true }, { hint: 'clé 🥑 50% $&', visible: false },
	])('round-trips an ordinary hint with visibility $visible: $hint', async ({ hint, visible }) => {
		expect(await actions.encryptSelection(editor, { text: 'secret', hint }, 'pw', start, end, visible)).toBe(true);
		const parsed = new FeatureInplaceTextAnalysis(payload).decryptable!;

		expect(parsed.hint ?? '').toBe(hint);
		expect(parsed.showInReadingView).toBe(visible);
		expect(await CryptoHelperFactory.BuildFromDecryptableOrThrow(parsed).decryptFromBase64(parsed.base64CipherText, 'pw')).toBe('secret');
	});

	it('does not re-save decrypted text with a reserved hint', async () => {
		let dialog: DecryptModal | undefined;
		vi.spyOn(DecryptModal.prototype, 'open').mockImplementation(function (this: DecryptModal) { dialog = this; });
		const ciphertext = await CryptoHelperFactory.BuildDefault().encryptToBase64('secret', 'pw');
		await actions.decryptSelection(editor, { version: 3, base64CipherText: ciphertext, hint: 'old 🔐 hint', showInReadingView: true }, 'pw', start, end);
		dialog!.save = true;
		dialog!.text = 'edited secret';
		await dialog!.onClose();

		expect(replaceSelection).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith(expect.stringContaining('cannot contain 💡 or 🔐'));
	});

	it('can re-save existing inline text without a hint', async () => {
		let dialog: DecryptModal | undefined;
		vi.spyOn(DecryptModal.prototype, 'open').mockImplementation(function (this: DecryptModal) { dialog = this; });
		const ciphertext = await CryptoHelperFactory.BuildDefault().encryptToBase64('secret', 'pw');
		const parsed = new FeatureInplaceTextAnalysis(`🔐γ ${ciphertext} 🔐`).decryptable!;
		await actions.decryptSelection(editor, parsed, 'pw', start, end);
		dialog!.save = true;
		dialog!.text = 'edited secret';
		await dialog!.onClose();

		await vi.waitFor(() => expect(replaceSelection).toHaveBeenCalled());
		const saved = new FeatureInplaceTextAnalysis(payload).decryptable!;
		expect(await CryptoHelperFactory.BuildFromDecryptableOrThrow(saved).decryptFromBase64(saved.base64CipherText, 'pw')).toBe('edited secret');
	});
});
