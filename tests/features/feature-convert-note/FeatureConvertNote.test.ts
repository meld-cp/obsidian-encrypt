import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type MeldEncrypt from '../../../src/main.ts';
import { MarkdownView, Notice, TFile, WorkspaceLeaf } from 'obsidian';
import FeatureConvertNote from '../../../src/features/feature-convert-note/FeatureConvertNote.ts';
import { EncryptedMarkdownView } from '../../../src/features/feature-whole-note-encrypt/EncryptedMarkdownView.ts';
import { FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';
import { SessionPasswordService } from '../../../src/services/SessionPasswordService.ts';

const passwordDialog = vi.hoisted(() => ({ openAsync: vi.fn() }));

vi.mock('obsidian', () => {
	class TextFileView {
		file: TFile | null = null;
		data = '';
		contentEl = { style: {} };
		app: { vault: { modify(file: TFile, data: string): Promise<void> } };
		constructor(public leaf: WorkspaceLeaf) {
			this.app = (leaf as unknown as { app: TextFileView['app'] }).app;
		}
		getViewData() { return this.data; }
		setViewData(data: string) { this.data = data; }
		async save() {
			if (this.file) await this.app.vault.modify(this.file, this.getViewData());
		}
		async onUnloadFile() {
			await this.save();
			this.file = null;
		}
	}
	return {
		TextFileView,
		MarkdownView: class extends TextFileView {},
		Notice: vi.fn(),
		TFile: class {},
		Modal: class {},
		Setting: class {},
		TextComponent: class {},
		normalizePath: (path: string) => path.replace(/\/+/g, '/'),
	};
});

vi.mock('../../../src/PluginPasswordModal.ts', () => ({
	default: class {
		resultConfirmed = true;
		openAsync = passwordDialog.openAsync;
	},
}));

function deferred() {
	let resolve!: () => void;
	const promise = new Promise<void>(res => { resolve = res; });
	return { promise, resolve };
}

describe('note conversion saves and closes source views', () => {
	let feature: FeatureConvertNote;
	let file: TFile;
	let disk: string;
	let leaves: WorkspaceLeaf[];
	let events: string[];
	const read = vi.fn(async (_file: TFile) => { events.push('read'); return disk; });
	const modify = vi.fn(async (target: TFile, content: string) => {
		events.push(`write:${target.extension}`);
		disk = content;
	});
	const renameFile = vi.fn(async (target: TFile, path: string) => {
		events.push('rename');
		target.path = path;
		target.extension = path.split('.').pop()!;
	});
	const openFile = vi.fn(async () => { events.push('reopen'); });
	const app = {
		vault: { read, modify },
		fileManager: { renameFile },
		workspace: {
			iterateAllLeaves: (callback: (leaf: WorkspaceLeaf) => void) => leaves.forEach(callback),
			getLeaf: () => ({ openFile }),
		},
	};

	beforeEach(() => {
		vi.clearAllMocks();
		leaves = [];
		events = [];
		disk = 'saved text';
		file = { path: 'folder/note.md', basename: 'note', extension: 'md', parent: { path: 'folder' } } as TFile;
		feature = new FeatureConvertNote();
		feature.plugin = { app } as unknown as MeldEncrypt;
		SessionPasswordService.clear();
		SessionPasswordService.setActive(true);
		SessionPasswordService.setAutoExpire(null);
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		SessionPasswordService.putByFile({ password: 'pw', hint: 'hint' }, file);
		passwordDialog.openAsync.mockResolvedValue({ password: 'pw', hint: 'hint' });
	});

	afterEach(() => {
		vi.restoreAllMocks();
		SessionPasswordService.clear();
	});

	function addView(encrypted = false, target = file) {
		const leaf = {
			app,
			detach: vi.fn(() => { events.push('detach'); }),
			setViewState: vi.fn(async () => {
				await view.onUnloadFile(target);
				events.push('unloaded');
			}),
		} as unknown as WorkspaceLeaf;
		const view = encrypted ? new EncryptedMarkdownView(leaf) : new MarkdownView(leaf);
		view.file = target;
		MarkdownView.prototype.setViewData.call(view, 'saved text', true);
		if (view instanceof EncryptedMarkdownView) {
			view.passwordAndHint = { password: 'pw', hint: 'hint' };
			view.encryptedData = JsonFileEncoding.decode(disk);
			view.cachedUnencryptedData = 'saved text';
			view.isSavingEnabled = true;
		}
		Object.assign(leaf, { view });
		leaves.push(leaf);
		return { leaf, view };
	}

	function typeText(view: MarkdownView, text: string) {
		// Editor typing changes the buffer without invoking the encrypted file reader.
		MarkdownView.prototype.setViewData.call(view, text, false);
	}

	function encrypt() {
		return (feature as unknown as { getPasswordAndEncryptFile(file: TFile): Promise<void> })
			.getPasswordAndEncryptFile(file);
	}

	function decrypt() {
		return (feature as unknown as { getPasswordAndDecryptFile(file: TFile): Promise<void> })
			.getPasswordAndDecryptFile(file);
	}

	async function encryptedNote() {
		file.path = 'folder/note.mdenc';
		file.extension = 'mdenc';
		disk = JsonFileEncoding.encode(await FileDataHelper.encrypt('pw', 'hint', 'saved text'));
	}

	it('encrypts unsaved plaintext edits after the source view has unloaded', async () => {
		const { leaf, view } = addView();
		typeText(view, 'latest plaintext edits');
		await encrypt();

		expect(await FileDataHelper.decrypt(JsonFileEncoding.decode(disk), 'pw')).toBe('latest plaintext edits');
		expect(file.extension).toBe('mdenc');
		expect(events.indexOf('read')).toBeGreaterThan(events.indexOf('unloaded'));
		expect(events.indexOf('rename')).toBeGreaterThan(events.indexOf('detach'));
		expect(leaf.detach).toHaveBeenCalledOnce();
		expect(openFile).toHaveBeenCalledOnce();
	});

	it('decrypts unsaved encrypted-note edits instead of the older disk contents', async () => {
		await encryptedNote();
		const { view } = addView(true);
		typeText(view, 'latest encrypted-note edits');
		await decrypt();

		expect(file.extension).toBe('md');
		expect(disk).toBe('latest encrypted-note edits');
		expect(events.indexOf('rename')).toBeGreaterThan(events.indexOf('unloaded'));
		expect(events[events.length - 1]).toBe('reopen');
	});

	it('waits for a pending encrypted save and saves edits made while it was running', async () => {
		await encryptedNote();
		const { view, leaf } = addView(true);
		const encryptedView = view as EncryptedMarkdownView;
		const started = deferred();
		const release = deferred();
		const originalEncrypt = FileDataHelper.encrypt.bind(FileDataHelper);
		vi.spyOn(FileDataHelper, 'encrypt').mockImplementationOnce(async (...args) => {
			started.resolve();
			await release.promise;
			return originalEncrypt(...args);
		});
		typeText(view, 'first edits');
		const saving = encryptedView.save();
		await started.promise;
		typeText(view, 'edits during save');
		const conversion = decrypt();
		expect(read).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();
		expect(leaf.detach).not.toHaveBeenCalled();
		release.resolve();
		await Promise.all([saving, conversion]);

		expect(disk).toBe('edits during save');
		expect(file.extension).toBe('md');
		expect(events.filter(event => event === 'write:mdenc')).toHaveLength(2);
		expect(events[events.length - 1]).toBe('reopen');
	});

	it('leaves the encrypted note open on save failure and preserves its edits on retry', async () => {
		await encryptedNote();
		const originalDisk = disk;
		const { view, leaf } = addView(true);
		typeText(view, 'unsaved edits');
		modify.mockRejectedValueOnce(new Error('Disk full'));
		await decrypt();

		expect(disk).toBe(originalDisk);
		expect(file.extension).toBe('mdenc');
		expect(renameFile).not.toHaveBeenCalled();
		expect(leaf.setViewState).not.toHaveBeenCalled();
		expect(leaf.detach).not.toHaveBeenCalled();
		expect(openFile).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith('Disk full', 10000);

		await decrypt();

		expect(disk).toBe('unsaved edits');
		expect(file.extension).toBe('md');
		expect(leaf.detach).toHaveBeenCalledOnce();
	});

	it('aborts if the save already in progress fails', async () => {
		await encryptedNote();
		const originalDisk = disk;
		const { view, leaf } = addView(true);
		const release = deferred();
		vi.spyOn(FileDataHelper, 'encrypt').mockImplementationOnce(async () => {
			await release.promise;
			throw new Error('Pending save failed');
		});
		typeText(view, 'pending edits');
		const saving = (view as EncryptedMarkdownView).save();
		const saveFailed = expect(saving).rejects.toThrow('Pending save failed');
		const conversion = decrypt();
		expect(read).not.toHaveBeenCalled();
		release.resolve();
		await Promise.all([saveFailed, conversion]);

		expect(disk).toBe(originalDisk);
		expect(file.extension).toBe('mdenc');
		expect(renameFile).not.toHaveBeenCalled();
		expect(leaf.setViewState).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith('Pending save failed', 10000);
	});

	it('also reads the latest saved edits when decryption requires a password prompt', async () => {
		await encryptedNote();
		SessionPasswordService.clear();
		const { view } = addView(true);
		typeText(view, 'edits before password prompt');
		await decrypt();

		expect(passwordDialog.openAsync).toHaveBeenCalledOnce();
		expect(disk).toBe('edits before password prompt');
		expect(file.extension).toBe('md');
	});

	it('observes a later view failing while an earlier view is still saving', async () => {
		await encryptedNote();
		const first = addView(true);
		const second = addView(true);
		const release = deferred();
		const originalEncrypt = FileDataHelper.encrypt.bind(FileDataHelper);
		vi.spyOn(FileDataHelper, 'encrypt')
			.mockImplementationOnce(async (...args) => {
				await release.promise;
				return originalEncrypt(...args);
			})
			.mockRejectedValueOnce(new Error('Second view failed'));
		typeText(first.view, 'first edits');
		typeText(second.view, 'second edits');
		const firstSave = (first.view as EncryptedMarkdownView).save();
		const secondSave = (second.view as EncryptedMarkdownView).save();
		const secondFailed = expect(secondSave).rejects.toThrow('Second view failed');
		await decrypt();
		await secondFailed;

		expect(renameFile).not.toHaveBeenCalled();
		expect(first.leaf.setViewState).not.toHaveBeenCalled();
		expect(second.leaf.setViewState).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith('Second view failed', 10000);
		release.resolve();
		await firstSave;
	});

	it('waits for every matching view to save before closing any, excluding unrelated notes', async () => {
		const first = addView();
		const second = addView();
		const unrelated = addView(false, { ...file, path: 'folder/other.md' } as TFile);
		const started = deferred();
		const release = deferred();
		const originalSave = second.view.save.bind(second.view);
		vi.spyOn(second.view, 'save').mockImplementationOnce(async () => {
			started.resolve();
			await release.promise;
			await originalSave();
		});
		const unrelatedSave = vi.spyOn(unrelated.view, 'save');
		const conversion = encrypt();
		await started.promise;
		expect(first.leaf.setViewState).not.toHaveBeenCalled();
		expect(second.leaf.setViewState).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();
		release.resolve();
		await conversion;

		expect(first.leaf.detach).toHaveBeenCalledOnce();
		expect(second.leaf.detach).toHaveBeenCalledOnce();
		expect(unrelatedSave).not.toHaveBeenCalled();
		expect(unrelated.leaf.setViewState).not.toHaveBeenCalled();
	});

	it('awaits unload-time saves and converts their final contents', async () => {
		const { view, leaf } = addView();
		const started = deferred();
		const release = deferred();
		vi.mocked(leaf.setViewState).mockImplementationOnce(async () => {
			started.resolve();
			await release.promise;
			await view.onUnloadFile(file);
			events.push('unloaded');
		});
		const conversion = encrypt();
		await started.promise;
		typeText(view, 'final unload edits');
		expect(read).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();
		release.resolve();
		await conversion;

		expect(await FileDataHelper.decrypt(JsonFileEncoding.decode(disk), 'pw')).toBe('final unload edits');
	});

	it('stops encryption on save failure without closing the plaintext view', async () => {
		const { leaf } = addView();
		modify.mockRejectedValueOnce(new Error('Write failed'));
		await encrypt();

		expect(disk).toBe('saved text');
		expect(file.extension).toBe('md');
		expect(read).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();
		expect(leaf.detach).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith('Write failed', 10000);
	});

	it('converts a closed note without reopening it', async () => {
		await encrypt();

		expect(await FileDataHelper.decrypt(JsonFileEncoding.decode(disk), 'pw')).toBe('saved text');
		expect(file.extension).toBe('mdenc');
		expect(openFile).not.toHaveBeenCalled();
	});

	it('keeps the encrypted view open when the user provides a wrong password', async () => {
		await encryptedNote();
		SessionPasswordService.clear();
		passwordDialog.openAsync.mockResolvedValue({ password: 'wrong', hint: '' });
		const { leaf } = addView(true);
		await decrypt();

		expect(leaf.setViewState).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();
		expect(Notice).toHaveBeenCalledWith('Decryption failed', 10000);
	});

	it('reopens the original file if conversion fails after the views are closed', async () => {
		addView();
		renameFile.mockRejectedValueOnce(new Error('Destination exists'));
		await encrypt();

		expect(file.extension).toBe('md');
		expect(disk).toBe('saved text');
		expect(openFile).toHaveBeenCalledWith(file);
		expect(Notice).toHaveBeenCalledWith('Destination exists', 10000);
	});

	it('ignores duplicate conversion commands for a file already being converted', async () => {
		SessionPasswordService.clear();
		addView();
		const started = deferred();
		const release = deferred();
		passwordDialog.openAsync.mockImplementationOnce(async () => {
			started.resolve();
			await release.promise;
			return { password: 'pw', hint: 'hint' };
		});
		const conversion = encrypt();
		await started.promise;
		await encrypt();
		expect(passwordDialog.openAsync).toHaveBeenCalledOnce();
		release.resolve();
		await conversion;

		expect(renameFile).toHaveBeenCalledOnce();
		expect(openFile).toHaveBeenCalledOnce();
	});

	it('keeps the note open on cancellation and allows a later conversion', async () => {
		await encryptedNote();
		SessionPasswordService.clear();
		const { leaf } = addView(true);
		passwordDialog.openAsync.mockRejectedValueOnce(undefined);
		await decrypt();
		expect(leaf.setViewState).not.toHaveBeenCalled();
		expect(renameFile).not.toHaveBeenCalled();

		await decrypt();
		expect(file.extension).toBe('md');
		expect(disk).toBe('saved text');
	});
});
