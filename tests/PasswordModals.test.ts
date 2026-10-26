import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { App } from 'obsidian';
import PluginPasswordModal from '../src/PluginPasswordModal.ts';
import PasswordModal from '../src/features/feature-inplace-encrypt/PasswordModal.ts';

type Input = {
	value: string;
	inputEl: { type: string };
	change(value: string): void;
	enter(): void;
};
type Row = {
	name: string;
	description: string;
	visible: boolean;
	input?: Input;
	toggle?: { change(value: boolean): void };
	buttons: { label: string; click(): void }[];
};
const ui = vi.hoisted(() => ({ rows: [] as Row[], focused: null as Input | null, closed: 0 }));

vi.mock('obsidian', () => {
	class TextInput {
		value = '';
		changeHandler = (_value: string) => {};
		keypress?: (event: { key: string; preventDefault(): void }, target: { value: string; instanceOf(): boolean }) => void;
		inputEl = {
			type: '', tabIndex: 0, placeholder: '', rows: 0, style: { width: '' },
			focus: () => { ui.focused = this; },
			onkeydown: undefined as ((event: { key: string; preventDefault(): void }) => void) | undefined,
			on: (_event: string, _selector: string, callback: TextInput['keypress']) => { this.keypress = callback; },
		};
		setValue(value: string) { this.value = value; return this; }
		getValue() { return this.value; }
		setPlaceholder(value: string) { this.inputEl.placeholder = value; return this; }
		onChange(callback: (value: string) => void) { this.changeHandler = callback; return this; }
		change(value: string) { this.value = value; this.changeHandler(value); }
		enter() {
			const event = { key: 'Enter', preventDefault() {} };
			this.inputEl.onkeydown?.(event);
			this.keypress?.(event, { value: this.value, instanceOf: () => true });
		}
	}
	class Button {
		label = '';
		buttonEl = { tabIndex: 0 };
		click = () => {};
		setIcon(_icon: string) { return this; }
		setButtonText(value: string) { this.label = value; return this; }
		onClick(callback: () => void) { this.click = callback; return this; }
	}
	class Toggle {
		setValue(_value: boolean) { return this; }
		change = (_value: boolean) => {};
		onChange(callback: (value: boolean) => void) { this.change = callback; return this; }
	}
	return {
		TextComponent: TextInput,
		Modal: class {
			setTitle(_title: string) { return this; }
			modalEl = { classList: { add() {} } };
			contentEl = { empty: () => { ui.rows = []; }, classList: { add() {} } };
			onOpen() {}
			onClose() {}
			open() { this.onOpen(); }
			close() { ui.closed++; this.onClose(); }
		},
		Setting: class {
			name = '';
			description = '';
			visible = true;
			components: TextInput[] = [];
			input?: TextInput;
			toggle?: Toggle;
			buttons: Button[] = [];
			settingEl = { hide: () => { this.visible = false; }, isShown: () => this.visible };
			constructor(_container: unknown) { ui.rows.push(this); }
			setHeading() { return this; }
			setName(value: string) { this.name = value; return this; }
			setDesc(value: string) { this.description = value; return this; }
			addText(callback: (input: TextInput) => void) {
				this.input = new TextInput();
				this.components.push(this.input);
				callback(this.input);
				return this;
			}
			addTextArea(callback: (input: TextInput) => void) { return this.addText(callback); }
			addButton(callback: (button: Button) => void) {
				const button = new Button(); this.buttons.push(button); callback(button); return this;
			}
			addToggle(callback: (toggle: Toggle) => void) {
				this.toggle = new Toggle(); callback(this.toggle); return this;
			}
		},
	};
});

function row(name: string) { return ui.rows.find(item => item.name.toLowerCase() === name.toLowerCase())!; }
function input(name: string) { return row(name).input!; }
function confirm() { ui.rows.flatMap(item => item.buttons).find(button => ['Encrypt', 'Decrypt'].includes(button.label))!.click(); }

beforeEach(() => {
	ui.rows = []; ui.focused = null; ui.closed = 0;
	vi.useFakeTimers();
	vi.stubGlobal('window', { setTimeout });
	vi.stubGlobal('HTMLInputElement', class {});
});
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

describe.each(['whole-note', 'inline'] as const)('%s password dialog', kind => {
	function modal(isEncrypting = true, confirmPassword = true, password = '', hint = '') {
		return kind === 'whole-note'
			? new PluginPasswordModal({} as App, 'Password', isEncrypting, confirmPassword, { password, hint })
			: new PasswordModal({} as App, isEncrypting, confirmPassword, true, password, hint);
	}

	it('rejects mismatched confirmation and accepts corrected credentials', () => {
		const dialog = modal(); dialog.open();
		input('Password').change('secret');
		input('Confirm password').change('different');
		confirm();
		expect(dialog.resultConfirmed).toBe(false);
		expect(ui.closed).toBe(0);
		expect(row('Confirm password').description).toBe("Passwords don't match");
		input('Confirm password').change('secret');
		input('Optional password hint').change('current hint');
		confirm();
		expect(ui.closed).toBe(1);
		expect(dialog.resultConfirmed).toBe(true);
		if (dialog instanceof PluginPasswordModal) {
			expect(dialog.resultPassword).toEqual({ password: 'secret', hint: 'current hint' });
		} else {
			expect(dialog.resultPassword).toBe('secret');
			expect(dialog.resultHint).toBe('current hint');
		}
	});

	it('moves through fields with Enter without confirming a cancelled dialog', () => {
		const dialog = modal(); dialog.open();
		input('Password').change('secret'); input('Password').enter();
		expect(ui.focused).toBe(input('Confirm password'));
		input('Confirm password').change('secret'); input('Confirm password').enter();
		expect(ui.focused).toBe(input('Optional password hint'));
		expect(dialog.resultConfirmed).toBe(false);
		dialog.close();
		expect(dialog.resultConfirmed).toBe(false);
	});

	it.each(['', 'hint'])('submits hint %j with Enter', hint => {
		const dialog = modal(true, false, 'secret'); dialog.open();
		input('Password').enter();
		expect(ui.focused).toBe(input('Optional password hint'));
		input('Optional password hint').change(hint); input('Optional password hint').enter();
		expect(dialog.resultConfirmed).toBe(true);
		expect(ui.closed).toBe(1);
		if (dialog instanceof PluginPasswordModal) {
			expect(dialog.resultPassword).toEqual({ password: 'secret', hint });
		} else {
			expect(dialog.resultPassword).toBe('secret');
			expect(dialog.resultHint).toBe(hint);
		}
	});

	it('rejects mismatched passwords when submitting an empty hint with Enter', () => {
		const dialog = modal(); dialog.open();
		input('Password').change('secret');
		input('Confirm password').change('different');
		input('Optional password hint').enter();
		expect(dialog.resultConfirmed).toBe(false);
		expect(ui.closed).toBe(0);
		expect(row('Confirm password').description).toBe("Passwords don't match");
		input('Confirm password').change('secret'); input('Confirm password').enter();
		expect(ui.focused).toBe(input('Optional password hint'));
		expect(dialog.resultConfirmed).toBe(false);
		input('Optional password hint').enter();
		expect(dialog.resultConfirmed).toBe(true);
		expect(ui.closed).toBe(1);
	});

	it('decrypts with Enter while confirmation and hint editing are hidden', () => {
		const dialog = modal(false, false, '', 'existing 🔐 hint'); dialog.open();
		expect(row('Confirm password').visible).toBe(false);
		expect(row('Optional password hint').visible).toBe(false);
		input('Password').change('secret'); input('Password').enter();
		expect(dialog.resultConfirmed).toBe(true);
		expect(ui.closed).toBe(1);
	});

	it.each(['', 'remembered'])('preserves initial focus for password %j', password => {
		modal(true, true, password).open(); vi.runAllTimers();
		expect(ui.focused).toBe(input(kind === 'whole-note' && password ? 'Confirm password' : 'Password'));
	});

	it('focuses a visible password field when confirmation is disabled', () => {
		modal(false, false, 'remembered').open(); vi.runAllTimers();
		expect(ui.focused).toBe(input('Password'));
	});
});

it('allows reserved marker characters in whole-note hints', () => {
	const dialog = new PluginPasswordModal({} as App, 'Password', true, false, { password: 'secret', hint: '🔐💡 hint' });
	dialog.open(); confirm();
	expect(dialog.resultPassword.hint).toBe('🔐💡 hint');
	expect(dialog.resultConfirmed).toBe(true);
});

it.each(['🔐', '💡'])('rejects reserved inline hint marker %s when submitting with Enter', marker => {
	const dialog = new PasswordModal({} as App, true, false, true, 'secret', '');
	dialog.open();
	input('Optional password hint').change(`hint ${marker}`);
	input('Optional password hint').enter();
	expect(dialog.resultConfirmed).toBe(false);
	expect(ui.closed).toBe(0);
	expect(row('Optional password hint').description).not.toBe('');
	input('Optional password hint').change('');
	input('Optional password hint').enter();
	expect(dialog.resultConfirmed).toBe(true);
	expect(dialog.resultHint).toBe('');
	expect(ui.closed).toBe(1);
});

it('returns the inline visibility and text controls on submission', () => {
	const dialog = new PasswordModal({} as App, true, false, true, 'secret', '', true);
	dialog.open();
	row('Show encrypted marker in reading view').toggle!.change(false);
	input('Text to encrypt').change('secret text');
	confirm();
	expect(dialog.resultShowInReadingView).toBe(false);
	expect(dialog.resultTextToEncrypt).toBe('secret text');
});

it('resolves the nullable whole-note API to null when cancelled after keyboard navigation', async () => {
	const dialog = new PluginPasswordModal({} as App, 'Password', true, true, null);
	const result = dialog.open2Async();
	input('Password').change('secret');
	input('Confirm password').change('secret'); input('Confirm password').enter();
	dialog.close();
	expect(await result).toBeNull();
});

it('preserves the rejecting whole-note API and resets results when reopened', async () => {
	const dialog = new PluginPasswordModal({} as App, 'Password', true, false, { password: 'secret', hint: '' });
	const accepted = dialog.openAsync(); confirm();
	expect(await accepted).toEqual({ password: 'secret', hint: '' });
	const cancelled = expect(dialog.openAsync()).rejects.toBeUndefined();
	dialog.close();
	await cancelled;
	expect(dialog.resultConfirmed).toBe(false);
});
