import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MarkdownView } from 'obsidian';
import { FileData, FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';

vi.mock('obsidian', () => ({
	MarkdownView: class {
		public contentEl = { classList: { toggle: vi.fn() } };
		public leaf: { detach: () => void };
		public app: any;
		public file: any = null;
		private viewData = '';
		public savedData: string | undefined;

		constructor(leaf?: { detach: () => void; app?: any }) {
			this.leaf = leaf ?? { detach: vi.fn() };
			this.app = leaf?.app ?? {};
		}

		getViewType(): string {
			return 'mock';
		}

		canAcceptExtension(): boolean {
			return true;
		}

		async onOpen(): Promise<void> {}

		async onLoadFile(): Promise<void> {}

		async onUnloadFile(): Promise<void> {}

		async onRename(): Promise<void> {}

		async setState(): Promise<void> {}

		async save(): Promise<void> {
			this.savedData = this.getViewData();
		}

		addAction(): void {}

		getViewData(): string {
			return this.viewData;
		}

		setViewData(data: string): void {
			this.viewData = data;
		}
	},
	Notice: vi.fn(),
	TFile: class {},
	ViewStateResult: class {},
	DataAdapter: class {},
	Modal: class {},
	Setting: class {
		constructor() {}
		setHeading() { return this; }
		setName() { return this; }
		setDesc() { return this; }
		addToggle() { return this; }
		addText() { return this; }
		addButton() { return this; }
		hide() { return this; }
		show() { return this; }
		isShown() { return false; }
	},
	TextComponent: class {},
	App: class {},
}));

import { EncryptedMarkdownView } from '../../../src/features/feature-whole-note-encrypt/EncryptedMarkdownView.ts';

describe('EncryptedMarkdownView save upgrades versions', () => {
	let view: EncryptedMarkdownView;

	beforeEach(() => {
		view = new EncryptedMarkdownView({ detach: vi.fn(), app: {} } as any);
		view.file = { extension: 'mdenc', basename: 'note', path: '/note.mdenc' } as any;
		view.isSavingEnabled = true;
		view.passwordAndHint = { password: 'pw', hint: 'hint' };
		view.encryptedData = new FileData('2.0', 'hint', 'old-cipher');
		view.setViewData('plain text', false);
		view.dataWasChangedSinceLastSave = false;
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should re-encrypt old whole-note data as v3 when saving unchanged plaintext', async () => {
		await view.save();

		expect(view.encryptedData?.version).toBe('3.0');
		expect(view.encryptedData?.hint).toBe('hint');
		expect((view as any).savedData).toBeDefined();

		const saved = JsonFileEncoding.decode((view as any).savedData!);
		expect(saved.version).toBe('3.0');
		expect(saved.hint).toBe('hint');
		const decrypted = await FileDataHelper.decrypt(saved, 'pw');
		expect(decrypted).toBe('plain text');
	});

	it('should mark edited plaintext as changed and upgrade it to v3 on save', async () => {
		view.setViewData('edited plain text', false);

		expect(view.dataWasChangedSinceLastSave).toBe(true);

		await view.save();

		expect(view.encryptedData?.version).toBe('3.0');
		const saved = JsonFileEncoding.decode((view as any).savedData!);
		expect(saved.version).toBe('3.0');
		const decrypted = await FileDataHelper.decrypt(saved, 'pw');
		expect(decrypted).toBe('edited plain text');
	});

	it('should upgrade old encrypted note even when edited plaintext looks like JSON', async () => {
		const jsonLikePlaintext = JSON.stringify({ title: 'json looking note', nested: { key: 'value' } });

		view.setViewData(jsonLikePlaintext, false);

		expect(view.dataWasChangedSinceLastSave).toBe(true);
		expect(view.leaf.detach).not.toHaveBeenCalled();

		await view.save();

		expect(view.encryptedData?.version).toBe('3.0');
		const saved = JsonFileEncoding.decode((view as any).savedData!);
		expect(saved.version).toBe('3.0');
		const decrypted = await FileDataHelper.decrypt(saved, 'pw');
		expect(decrypted).toBe(jsonLikePlaintext);
	});

	it('retries edited v3 plaintext after a failed write without requiring another edit', async () => {
		await view.save();
		const savedEnvelope = view.encryptedData;
		// Normal editor typing does not call the encrypted file reader.
		MarkdownView.prototype.setViewData.call(view, 'unsaved edits', false);
		const write = vi.spyOn(MarkdownView.prototype, 'save').mockRejectedValueOnce(new Error('Disk full'));

		await expect(view.save()).rejects.toThrow('Disk full');

		expect(view.encryptedData).toBe(savedEnvelope);
		expect(view.cachedUnencryptedData).toBe('plain text');
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		expect(view.isSavingInProgress).toBe(false);
		expect(view.getViewData()).toBe('unsaved edits');

		await view.save();

		expect(write).toHaveBeenCalledTimes(2);
		const saved = JsonFileEncoding.decode((view as any).savedData);
		expect(await FileDataHelper.decrypt(saved, 'pw')).toBe('unsaved edits');
		expect(view.cachedUnencryptedData).toBe('unsaved edits');
		expect(view.dataWasChangedSinceLastSave).toBe(false);
	});

	it('retries an unchanged legacy upgrade after a failed disk write', async () => {
		const legacyEnvelope = view.encryptedData;
		const write = vi.spyOn(MarkdownView.prototype, 'save').mockRejectedValueOnce(new Error('Write failed'));

		await expect(view.save()).rejects.toThrow('Write failed');

		expect(view.encryptedData).toBe(legacyEnvelope);
		expect(view.encryptedData?.version).toBe('2.0');
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		await view.save();

		expect(write).toHaveBeenCalledTimes(2);
		const saved = JsonFileEncoding.decode((view as any).savedData);
		expect(saved.version).toBe('3.0');
		expect(await FileDataHelper.decrypt(saved, 'pw')).toBe('plain text');
	});

	it('keeps the note dirty when encryption fails and retries successfully', async () => {
		await view.save();
		const savedEnvelope = view.encryptedData;
		MarkdownView.prototype.setViewData.call(view, 'edits before encryption failed', false);
		vi.spyOn(FileDataHelper, 'encrypt').mockRejectedValueOnce(new Error('Encryption failed'));
		const write = vi.spyOn(MarkdownView.prototype, 'save');

		await expect(view.save()).rejects.toThrow('Encryption failed');

		expect(write).not.toHaveBeenCalled();
		expect(view.encryptedData).toBe(savedEnvelope);
		expect(view.cachedUnencryptedData).toBe('plain text');
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		expect(view.isSavingInProgress).toBe(false);
		await view.save();

		const saved = JsonFileEncoding.decode((view as any).savedData);
		expect(await FileDataHelper.decrypt(saved, 'pw')).toBe('edits before encryption failed');
	});

	it('keeps new edits made during a disk write for a subsequent save', async () => {
		await view.save();
		const savedEnvelope = view.encryptedData;
		MarkdownView.prototype.setViewData.call(view, 'first edits', false);
		const originalSave = MarkdownView.prototype.save;
		let release!: () => void;
		const pendingWrite = new Promise<void>(resolve => { release = resolve; });
		let started!: () => void;
		const writeStarted = new Promise<void>(resolve => { started = resolve; });
		vi.spyOn(MarkdownView.prototype, 'save').mockImplementationOnce(async function (this: MarkdownView) {
			started();
			await pendingWrite;
			await originalSave.call(this);
		});
		const saving = view.save();
		await writeStarted;
		expect(view.encryptedData).toBe(savedEnvelope);
		expect(view.cachedUnencryptedData).toBe('plain text');
		MarkdownView.prototype.setViewData.call(view, 'edits during write', false);
		release();
		await saving;

		const firstSaved = JsonFileEncoding.decode((view as any).savedData);
		expect(await FileDataHelper.decrypt(firstSaved, 'pw')).toBe('first edits');
		expect(view.cachedUnencryptedData).toBe('first edits');
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		expect(view.getViewData()).toBe('edits during write');
		await view.save();

		const latestSaved = JsonFileEncoding.decode((view as any).savedData);
		expect(await FileDataHelper.decrypt(latestSaved, 'pw')).toBe('edits during write');
		expect(view.dataWasChangedSinceLastSave).toBe(false);
	});

	it('does not rewrite unchanged v3 data after a successful save', async () => {
		await view.save();
		const write = vi.spyOn(MarkdownView.prototype, 'save');
		const encrypt = vi.spyOn(FileDataHelper, 'encrypt');

		await view.save();

		expect(write).not.toHaveBeenCalled();
		expect(encrypt).not.toHaveBeenCalled();
	});
});
