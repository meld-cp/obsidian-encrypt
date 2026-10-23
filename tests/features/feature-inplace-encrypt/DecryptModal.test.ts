import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Editor, EditorPosition } from 'obsidian';
import type MeldEncrypt from '../../../src/main.ts';
import DecryptModal from '../../../src/features/feature-inplace-encrypt/DecryptModal.ts';
import FeatureInplaceEncrypt from '../../../src/features/feature-inplace-encrypt/FeatureInplaceEncrypt.ts';
import type { Decryptable } from '../../../src/features/feature-inplace-encrypt/Decryptable.ts';
import { FeatureInplaceTextAnalysis } from '../../../src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';
import { CryptoHelperFactory } from '../../../src/services/CryptoHelperFactory.ts';

const ui = vi.hoisted(() => ({
	modal: null as DecryptModal | null,
	textarea: null as { value: string; inputEl: { readOnly: boolean } } | null,
	buttons: [] as { label: string; click(): unknown }[],
	closed: 0,
	closeResult: Promise.resolve() as Promise<unknown>,
}));

vi.mock('obsidian', () => {
	class TextArea {
		value = '';
		inputEl = { readOnly: false, rows: 0, setSelectionRange() {} };
		setValue(value: string) { this.value = value; return this; }
		getValue() { return this.value; }
	}
	class Button {
		label = '';
		click: () => unknown = () => {};
		setButtonText(label: string) { this.label = label; return this; }
		setWarning() { return this; }
		onClick(callback: () => unknown) { this.click = callback; return this; }
	}
	return {
		Notice: vi.fn(),
		MarkdownView: class {},
		Modal: class {
			contentEl = { empty() {}, classList: { add() {} } };
			titleEl = { setText() {} };
			onOpen() {}
			onClose() {}
			open() { ui.modal = this as unknown as DecryptModal; this.onOpen(); }
			close() { ui.closed++; ui.closeResult = Promise.resolve(this.onClose()); }
		},
		Setting: class {
			settingEl = { querySelector: () => null };
			constructor(_container: unknown) {}
			addTextArea(callback: (textarea: TextArea) => void) {
				const textarea = new TextArea();
				ui.textarea = textarea;
				callback(textarea);
				return this;
			}
			addButton(callback: (button: Button) => void) {
				const button = new Button();
				ui.buttons.push(button);
				callback(button);
				return this;
			}
		},
	};
});

type InlineActions = {
	showDecryptedResultForPassword(value: Decryptable, password: string): Promise<boolean>;
	decryptSelection(editor: Editor, value: Decryptable, password: string, start: EditorPosition, end: EditorPosition): Promise<boolean>;
};

describe('decrypted text popup modes', () => {
	const text = 'secret café 🥑\nsecond line';
	let actions: InlineActions;
	let encrypted: Decryptable;
	let payload: string;
	const writeText = vi.fn();
	const modify = vi.fn();
	const replaceSelection = vi.fn((value: string) => { payload = value; });
	const editor = { replaceSelection, setSelection: vi.fn(), focus: vi.fn() } as unknown as Editor;
	const start = { line: 0, ch: 0 };
	const end = { line: 0, ch: 100 };

	beforeEach(async () => {
		vi.clearAllMocks();
		ui.modal = null;
		ui.textarea = null;
		ui.buttons = [];
		ui.closed = 0;
		payload = '';
		vi.stubGlobal('navigator', { clipboard: { writeText } });
		const feature = new FeatureInplaceEncrypt();
		feature.plugin = { app: { vault: { modify } } } as unknown as MeldEncrypt;
		actions = feature as unknown as InlineActions;
		encrypted = {
			version: 3,
			base64CipherText: await CryptoHelperFactory.BuildDefault().encryptToBase64(text, 'pw'),
			hint: 'ordinary hint',
			showInReadingView: true,
		};
	});

	afterEach(() => { vi.unstubAllGlobals(); });

	function click(label: string) { return ui.buttons.find(button => button.label === label)!.click(); }

	it('shows reading-view plaintext as read-only with Copy as its only action', async () => {
		const reading = actions.showDecryptedResultForPassword(encrypted, 'pw');
		await vi.waitFor(() => expect(ui.modal).not.toBeNull());

		expect(ui.textarea?.value).toBe(text);
		expect(ui.textarea?.inputEl.readOnly).toBe(true);
		expect(ui.buttons.map(button => button.label)).toEqual(['Copy']);
		ui.modal!.close();
		expect(await reading).toBe(true);
		expect(ui.modal?.save).toBe(false);
		expect(ui.modal?.decryptInPlace).toBe(false);
		expect(modify).not.toHaveBeenCalled();
		expect(replaceSelection).not.toHaveBeenCalled();
	});

	it('copies the exact plaintext from reading view without closing or saving', async () => {
		const reading = actions.showDecryptedResultForPassword(encrypted, 'pw');
		await vi.waitFor(() => expect(ui.modal).not.toBeNull());
		await click('Copy');

		expect(writeText).toHaveBeenCalledWith(text);
		expect(ui.closed).toBe(0);
		expect(modify).not.toHaveBeenCalled();
		ui.modal!.close();
		await reading;
	});

	it.each([true, false])('preserves the hint and marker visibility when saving edits (visible: %s)', async visible => {
		encrypted.showInReadingView = visible;
		await actions.decryptSelection(editor, encrypted, 'pw', start, end);

		expect(ui.textarea?.inputEl.readOnly).toBe(false);
		expect(ui.buttons.map(button => button.label)).toEqual(['Save', 'Copy', 'Decrypt in-place']);
		const editedText = 'edited café 🥑\nsecond line';
		ui.textarea!.value = editedText;
		click('Save');
		await ui.closeResult;

		const saved = new FeatureInplaceTextAnalysis(payload).decryptable!;
		expect(saved.hint).toBe(encrypted.hint);
		expect(saved.showInReadingView).toBe(visible);
		expect(await CryptoHelperFactory.BuildFromDecryptableOrThrow(saved).decryptFromBase64(saved.base64CipherText, 'pw')).toBe(editedText);
		expect(editor.setSelection).toHaveBeenCalledWith(start, end);
	});

	it('keeps decrypt-in-place available from the editor', async () => {
		await actions.decryptSelection(editor, encrypted, 'pw', start, end);
		click('Decrypt in-place');
		await ui.closeResult;

		expect(replaceSelection).toHaveBeenCalledWith(text);
		expect(ui.modal?.decryptInPlace).toBe(true);
	});
});
