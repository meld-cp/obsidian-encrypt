import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MarkdownView, resolveSubpath } from 'obsidian';
import { FileData, FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';
import { SessionPasswordService } from '../../../src/services/SessionPasswordService.ts';
import PluginPasswordModal from '../../../src/PluginPasswordModal.ts';

vi.mock('obsidian', () => ({
	resolveSubpath: vi.fn(),
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

		async onLoadFile(file: any): Promise<void> { this.file = file; }

		async onUnloadFile(): Promise<void> {}

		async onRename(): Promise<void> {}

		async setState(): Promise<void> {}

		getMode(): string { return 'source'; }

		getEphemeralState(): Record<string, unknown> { return {}; }

		setEphemeralState(_state: unknown): void {}

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

describe('mode-switch position preservation', () => {
	afterEach(() => vi.restoreAllMocks());

	it.each(['preview', 'source'])('restores cursor and scroll after reloading plaintext in %s', async mode => {
		const view = new EncryptedMarkdownView({ detach: vi.fn(), app: {} } as any);
		view.isSavingEnabled = true;
		const position = { cursor: { from: { line: 150, ch: 4 }, to: { line: 152, ch: 8 } }, scroll: 149.5 };
		Object.assign(view, { editor: { getCursor: (end: string) => end === 'anchor' ? position.cursor.from : position.cursor.to } });
		const order: string[] = [];
		vi.spyOn(view, 'getMode').mockReturnValue(mode === 'source' ? 'preview' : 'source');
		vi.spyOn(view, 'getEphemeralState').mockImplementation(() => {
			order.push('capture');
			return mode === 'source' ? { scroll: position.scroll } : position;
		});
		vi.spyOn(view, 'save').mockImplementation(async () => { order.push('save'); });
		vi.spyOn(MarkdownView.prototype, 'setState').mockImplementation(async () => { order.push('switch'); });
		vi.spyOn(MarkdownView.prototype, 'setViewData').mockImplementation(() => { order.push('reload'); });
		const restore = vi.spyOn(MarkdownView.prototype, 'setEphemeralState').mockImplementation(() => { order.push('restore'); });
		await view.setState({ mode }, { history: false });
		expect(order).toEqual(mode === 'preview' ? ['capture', 'save', 'switch', 'reload', 'restore'] : ['capture', 'switch', 'reload', 'restore']);
		expect(restore).toHaveBeenCalledWith(position);
		expect(view.isSavingEnabled).toBe(true);
	});

	it.each([false, true])('does not restore position on initial load or unchanged mode (unlocked: %s)', async unlocked => {
		const view = new EncryptedMarkdownView({ detach: vi.fn(), app: {} } as any);
		view.isSavingEnabled = unlocked;
		const capture = vi.spyOn(view, 'getEphemeralState');
		const restore = vi.spyOn(MarkdownView.prototype, 'setEphemeralState');
		await view.setState({ mode: unlocked ? 'source' : 'preview' }, { history: false });
		expect(capture).not.toHaveBeenCalled();
		expect(restore).not.toHaveBeenCalled();
	});
});

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

	it('ignores an older async encrypted-data update that finishes after a newer one', async () => {
		let resolveOlder!: (value: string | null) => void;
		vi.spyOn(FileDataHelper, 'decrypt')
			.mockImplementationOnce(() => new Promise(resolve => { resolveOlder = resolve; }))
			.mockResolvedValueOnce('newer plaintext');
		const encoded = JsonFileEncoding.encode(new FileData('2.0', 'hint', 'ciphertext'));

		view.setViewData(encoded, false);
		view.setViewData(encoded, false);
		await vi.waitFor(() => expect(view.cachedUnencryptedData).toBe('newer plaintext'));

		resolveOlder('older plaintext');
		await Promise.resolve();

		expect(view.cachedUnencryptedData).toBe('newer plaintext');
		expect(view.getViewData()).toBe('newer plaintext');
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

describe('EncryptedMarkdownView file loading', () => {
	afterEach(() => vi.restoreAllMocks());

	it('ignores an older file read that completes after a newer load', async () => {
		const fileA = { path: 'a.mdenc', basename: 'a', extension: 'mdenc' } as any;
		const fileB = { path: 'b.mdenc', basename: 'b', extension: 'mdenc' } as any;
		const resolveRead = new Map<string, (content: string) => void>();
		const app = {
			workspace: { layoutReady: true },
			vault: {
				read: (file: { path: string }) => new Promise<string>(resolve => resolveRead.set(file.path, resolve)),
			},
		};
		const view = new EncryptedMarkdownView({ app, detach: vi.fn() } as any);
		vi.spyOn(SessionPasswordService, 'getByFile').mockResolvedValue({ password: 'pw', hint: '' });
		vi.spyOn(SessionPasswordService, 'putByFile').mockImplementation(() => {});
		vi.spyOn(FileDataHelper, 'decrypt').mockImplementation(async data => data.encodedData);
		const encoded = (text: string) => JSON.stringify({ version: '2.0', hint: '', encodedData: text });

		const loadA = view.onLoadFile(fileA);
		const loadB = view.onLoadFile(fileB);
		resolveRead.get(fileB.path)!(encoded('newer B'));
		await vi.waitFor(() => expect(view.cachedUnencryptedData).toBe('newer B'));
		resolveRead.get(fileA.path)!(encoded('stale A'));
		await Promise.all([loadA, loadB]);

		expect(view.cachedUnencryptedData).toBe('newer B');
		expect(view.getViewData()).toBe('newer B');
		expect(view.encryptedData?.encodedData).toBe('newer B');
		expect(view.file).toBe(fileB);
		expect(SessionPasswordService.putByFile).toHaveBeenCalledTimes(1);
	});

	it('ignores an older decryption that completes after a newer load', async () => {
		const fileA = { path: 'a.mdenc', basename: 'a', extension: 'mdenc' } as any;
		const fileB = { path: 'b.mdenc', basename: 'b', extension: 'mdenc' } as any;
		const app = {
			workspace: { layoutReady: true },
			vault: { read: async (file: { path: string }) => JSON.stringify({
				version: '2.0', hint: '', encodedData: file.path === fileA.path ? 'stale A' : 'newer B',
			}) },
		};
		const view = new EncryptedMarkdownView({ app, detach: vi.fn() } as any);
		let resolveStaleDecrypt!: (plaintext: string) => void;
		vi.spyOn(SessionPasswordService, 'getByFile').mockResolvedValue({ password: 'pw', hint: '' });
		vi.spyOn(SessionPasswordService, 'putByFile').mockImplementation(() => {});
		vi.spyOn(FileDataHelper, 'decrypt').mockImplementation(async data => data.encodedData === 'stale A'
			? new Promise(resolve => { resolveStaleDecrypt = resolve; })
			: data.encodedData);

		const loadA = view.onLoadFile(fileA);
		await vi.waitFor(() => expect(resolveStaleDecrypt).toBeTypeOf('function'));
		const loadB = view.onLoadFile(fileB);
		await vi.waitFor(() => expect(view.cachedUnencryptedData).toBe('newer B'));
		resolveStaleDecrypt('stale A');
		await Promise.all([loadA, loadB]);

		expect(view.cachedUnencryptedData).toBe('newer B');
		expect(view.getViewData()).toBe('newer B');
		expect(view.encryptedData?.encodedData).toBe('newer B');
		expect(view.file).toBe(fileB);
		expect(SessionPasswordService.putByFile).toHaveBeenCalledTimes(1);
	});
});


describe('encrypted heading navigation', () => {
	let view: EncryptedMarkdownView;
	let navigate: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		view = new EncryptedMarkdownView({ detach: vi.fn(), app: {} } as any);
		view.isSavingEnabled = true;
		view.file = { path: 'navigation.mdenc', extension: 'mdenc' } as any;
		MarkdownView.prototype.setViewData.call(view, '# First\n\n## Target', false);
		navigate = vi.spyOn(MarkdownView.prototype, 'setEphemeralState');
		vi.mocked(resolveSubpath).mockReset();
	});
	afterEach(() => vi.restoreAllMocks());

	it('resolves local headings and delegates navigation without mutating the request', () => {
		const start = { line: 2, col: 0, offset: 9 };
		vi.mocked(resolveSubpath).mockReturnValue({ start, end: null } as any);
		const state = { subpath: '#Target', focus: true };
		view.setEphemeralState(state);
		expect(resolveSubpath).toHaveBeenCalledWith(expect.objectContaining({
			headings: expect.arrayContaining([expect.objectContaining({ heading: 'Target' })]),
		}), '#Target');
		expect(navigate).toHaveBeenCalledWith({ subpath: undefined, focus: true, line: 2, startLoc: start, endLoc: null });
		expect(state).toEqual({ subpath: '#Target', focus: true });
	});

	it('uses current unsaved plaintext even while getViewData exposes ciphertext to the writer', () => {
		MarkdownView.prototype.setViewData.call(view, '# Edited', false);
		view.isSavingInProgress = true;
		view.setEphemeralState({ subpath: '#Edited' });
		expect(vi.mocked(resolveSubpath).mock.calls[0][0].headings?.[0].heading).toBe('Edited');
	});

	it.each([{ scroll: 5 }, { subpath: '#Missing' }, { subpath: '#^block' }, null])('preserves unrelated or unresolved state: %j', state => {
		view.setEphemeralState(state);
		expect(navigate).toHaveBeenCalledWith(state);
	});

	it('does not parse locked content', () => {
		view.isSavingEnabled = false;
		view.setEphemeralState({ subpath: '#Target' });
		expect(resolveSubpath).not.toHaveBeenCalled();
	});
});


describe('navigation while unlocking', () => {
	afterEach(() => vi.restoreAllMocks());

	it.each([false, true])('replays navigation only when its file finishes unlocking (switch files: %s)', async switchFiles => {
		let finishRead!: (text: string) => void;
		const app = { workspace: { layoutReady: true }, vault: {
			read: () => new Promise<string>(resolve => { finishRead = resolve; }),
		} };
		const view = new EncryptedMarkdownView({ app, detach: vi.fn() } as any);
		vi.spyOn(SessionPasswordService, 'getByFile').mockResolvedValue({ password: 'pw', hint: '' });
		vi.spyOn(SessionPasswordService, 'putByFile').mockImplementation(() => {});
		vi.spyOn(FileDataHelper, 'decrypt').mockResolvedValue('# Target');
		const navigate = vi.spyOn(MarkdownView.prototype, 'setEphemeralState');
		vi.mocked(resolveSubpath).mockReset();
		const file = { path: 'first.mdenc' } as any;
		const first = view.onLoadFile(file);
		const finishFirst = finishRead;
		view.setEphemeralState({ subpath: '#Target' });
		expect(navigate).not.toHaveBeenCalled();
		const second = switchFiles ? view.onLoadFile({ path: 'second.mdenc' } as any) : null;
		const encoded = JSON.stringify({ version: '2.0', hint: '', encodedData: 'cipher' });
		finishFirst(encoded);
		if (second) finishRead(encoded);
		await Promise.all([first, second]);
		expect(resolveSubpath).toHaveBeenCalledTimes(switchFiles ? 0 : 1);
		expect(navigate).toHaveBeenCalledTimes(switchFiles ? 0 : 1);
	});

	it('discards deferred navigation when unlocking is cancelled', async () => {
		const app = { workspace: { layoutReady: true }, vault: {
			read: async () => JSON.stringify({ version: '2.0', hint: '', encodedData: 'cipher' }),
		} };
		const view = new EncryptedMarkdownView({ app, detach: vi.fn() } as any);
		let cancel!: (value: null) => void;
		vi.spyOn(SessionPasswordService, 'getByFile').mockResolvedValue({ password: '', hint: '' });
		vi.spyOn(PluginPasswordModal.prototype, 'open2Async').mockImplementation(() => new Promise(resolve => { cancel = resolve; }));
		const navigate = vi.spyOn(MarkdownView.prototype, 'setEphemeralState');
		const loading = view.onLoadFile({ path: 'cancelled.mdenc' } as any);
		await vi.waitFor(() => expect(cancel).toBeTypeOf('function'));
		view.setEphemeralState({ subpath: '#Target' });
		cancel(null);
		await loading;
		expect(navigate).not.toHaveBeenCalled();
		expect(view.isSavingEnabled).toBe(false);
		expect(view.leaf.detach).toHaveBeenCalled();
	});

	it('discards deferred navigation after a failed load', async () => {
		let failRead!: (error: Error) => void;
		const app = { workspace: { layoutReady: true }, vault: {
			read: () => new Promise<string>((_resolve, reject) => { failRead = reject; }),
		} };
		const view = new EncryptedMarkdownView({ app, detach: vi.fn() } as any);
		const navigate = vi.spyOn(MarkdownView.prototype, 'setEphemeralState');
		const loading = view.onLoadFile({ path: 'failed.mdenc' } as any);
		view.setEphemeralState({ subpath: '#Target' });
		failRead(new Error('read failed'));
		await expect(loading).rejects.toThrow('read failed');
		expect(navigate).not.toHaveBeenCalled();
	});
});
