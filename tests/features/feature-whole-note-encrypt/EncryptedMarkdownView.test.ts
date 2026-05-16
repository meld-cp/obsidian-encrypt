import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FileData, FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';

vi.mock('obsidian', () => ({
	MarkdownView: class {
		public contentEl = { style: {} as Record<string, string> };
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
});
