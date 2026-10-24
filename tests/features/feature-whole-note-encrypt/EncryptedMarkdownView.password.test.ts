import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MarkdownView, Notice } from 'obsidian';
import type { TFile, WorkspaceLeaf } from 'obsidian';
import PluginPasswordModal from '../../../src/PluginPasswordModal.ts';
import { EncryptedMarkdownView } from '../../../src/features/feature-whole-note-encrypt/EncryptedMarkdownView.ts';
import { FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';
import { SessionPasswordService } from '../../../src/services/SessionPasswordService.ts';

vi.mock('obsidian', () => ({
	MarkdownView: class {
		contentEl = { classList: { toggle: vi.fn() } };
		viewData = '';
		savedData: string | undefined;
		file: TFile | null = null;
		app = {};
		constructor(public leaf: WorkspaceLeaf) {}
		getViewData() { return this.viewData; }
		setViewData(data: string) { this.viewData = data; }
		async save() { this.savedData = this.getViewData(); }
	},
	Notice: vi.fn(),
	Modal: class {},
	Setting: class {},
	TextComponent: class {},
	TFile: class {},
}));

function deferred() {
	let resolve!: () => void;
	const promise = new Promise<void>(res => { resolve = res; });
	return { promise, resolve };
}

describe('encrypted note password changes', () => {
	const oldPassword = { password: 'old-password', hint: 'old hint' };
	const newPassword = { password: 'new-password', hint: 'new hint' };
	let view: EncryptedMarkdownView & { savedData: string };
	let file: TFile;

	beforeEach(async () => {
		vi.clearAllMocks();
		file = { path: 'note.mdenc', basename: 'note', extension: 'mdenc' } as TFile;
		view = new EncryptedMarkdownView({ detach: vi.fn() } as unknown as WorkspaceLeaf) as typeof view;
		view.file = file;
		view.isSavingEnabled = true;
		view.passwordAndHint = oldPassword;
		view.encryptedData = await FileDataHelper.encrypt(oldPassword.password, oldPassword.hint, 'original text');
		view.savedData = JsonFileEncoding.encode(view.encryptedData);
		view.setViewData('original text', false);
		view.dataWasChangedSinceLastSave = false;
		SessionPasswordService.clear();
		SessionPasswordService.setActive(true);
		SessionPasswordService.setAutoExpire(null);
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		SessionPasswordService.putByFile(oldPassword, file);
		vi.spyOn(PluginPasswordModal.prototype, 'openAsync').mockResolvedValue(newPassword);
	});

	afterEach(() => {
		vi.restoreAllMocks();
		SessionPasswordService.clear();
	});

	function typeText(text: string) {
		MarkdownView.prototype.setViewData.call(view, text, false);
	}

	async function expectNewPassword(text = 'original text') {
		const saved = JsonFileEncoding.decode(view.savedData);
		expect(await FileDataHelper.decrypt(saved, newPassword.password)).toBe(text);
		expect(await FileDataHelper.decrypt(saved, oldPassword.password)).toBeNull();
		expect(saved.hint).toBe(newPassword.hint);
		expect(view.passwordAndHint).toEqual(newPassword);
		expect(await SessionPasswordService.getByFile(file)).toEqual(newPassword);
		expect(Notice).toHaveBeenCalledWith('Password changed');
	}

	async function expectOldPassword() {
		expect(view.passwordAndHint).toEqual(oldPassword);
		expect(await SessionPasswordService.getByFile(file)).toEqual(oldPassword);
		const saved = JsonFileEncoding.decode(view.savedData);
		expect(await FileDataHelper.decrypt(saved, oldPassword.password)).toBe('original text');
		expect(await FileDataHelper.decrypt(saved, newPassword.password)).toBeNull();
		expect(Notice).not.toHaveBeenCalledWith('Password changed');
	}

	it('rewrites unchanged content with the new password and hint', async () => {
		await view.changePassword();

		await expectNewPassword();
		expect(view.dataWasChangedSinceLastSave).toBe(false);
	});

	it('waits for an active save and includes edits made while that save was running', async () => {
		const started = deferred();
		const release = deferred();
		const originalEncrypt = FileDataHelper.encrypt.bind(FileDataHelper);
		vi.spyOn(FileDataHelper, 'encrypt').mockImplementationOnce(async (...args) => {
			started.resolve();
			await release.promise;
			return originalEncrypt(...args);
		});
		typeText('first edits');
		const saving = view.save();
		await started.promise;
		const changing = view.changePassword();
		await vi.waitFor(() => expect(PluginPasswordModal.prototype.openAsync).toHaveBeenCalled());
		typeText('edits during the active save');
		expect(view.passwordAndHint).toEqual(oldPassword);
		expect(await SessionPasswordService.getByFile(file)).toEqual(oldPassword);
		expect(Notice).not.toHaveBeenCalledWith('Password changed');
		release.resolve();
		await Promise.all([saving, changing]);

		await expectNewPassword('edits during the active save');
	});

	it('does not publish the new password or success before the write completes', async () => {
		const started = deferred();
		const release = deferred();
		const originalSave = MarkdownView.prototype.save;
		vi.spyOn(MarkdownView.prototype, 'save').mockImplementationOnce(async function (this: MarkdownView) {
			started.resolve();
			await release.promise;
			await originalSave.call(this);
		});
		const changing = view.changePassword();
		await started.promise;

		await expectOldPassword();
		release.resolve();
		await changing;
		await expectNewPassword();
	});

	it('saves later edits with the new key after the password-change write completes', async () => {
		const started = deferred();
		const release = deferred();
		const originalSave = MarkdownView.prototype.save;
		vi.spyOn(MarkdownView.prototype, 'save').mockImplementationOnce(async function (this: MarkdownView) {
			started.resolve();
			await release.promise;
			await originalSave.call(this);
		});
		const changing = view.changePassword();
		await started.promise;
		typeText('edits during password-change write');
		release.resolve();
		await changing;

		expect(view.dataWasChangedSinceLastSave).toBe(true);
		await view.save();
		await expectNewPassword('edits during password-change write');
	});

	it('keeps the editor open and preserves later edits when the pending write is reloaded', async () => {
		const originalSave = MarkdownView.prototype.save;
		const decrypt = vi.spyOn(FileDataHelper, 'decrypt');
		vi.spyOn(MarkdownView.prototype, 'save').mockImplementationOnce(async function (this: MarkdownView) {
			await originalSave.call(this);
			typeText('edits after write began');
			view.setViewData(view.savedData, false);
		});
		await view.changePassword();
		// Wait for any asynchronous reload decryption before checking the view.
		for (const result of decrypt.mock.results) {
			if (result.type === 'return') await result.value;
		}
		await Promise.resolve();

		expect(view.leaf.detach).not.toHaveBeenCalled();
		expect(view.getViewData()).toBe('edits after write began');
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		await view.save();
		await expectNewPassword('edits after write began');
	});

	it('keeps the previous password and cache when a write fails, then allows retry', async () => {
		const savedEnvelope = view.encryptedData;
		vi.spyOn(MarkdownView.prototype, 'save').mockRejectedValueOnce(new Error('Disk full'));
		await view.changePassword();

		await expectOldPassword();
		expect(view.encryptedData).toBe(savedEnvelope);
		expect(view.dataWasChangedSinceLastSave).toBe(true);
		expect(Notice).toHaveBeenCalledWith('Password wasn\'t changed');
		await view.changePassword();
		await expectNewPassword();
	});

	it('keeps the previous password and cache when encryption fails', async () => {
		vi.spyOn(FileDataHelper, 'encrypt').mockRejectedValueOnce(new Error('Encryption failed'));
		const write = vi.spyOn(MarkdownView.prototype, 'save');
		await view.changePassword();

		await expectOldPassword();
		expect(write).not.toHaveBeenCalled();
		await view.changePassword();
		await expectNewPassword();
	});

	it('does not change passwords when the active save fails', async () => {
		const release = deferred();
		vi.spyOn(FileDataHelper, 'encrypt').mockImplementationOnce(async () => {
			await release.promise;
			throw new Error('Active save failed');
		});
		typeText('unsaved edits');
		const saving = view.save();
		const failed = expect(saving).rejects.toThrow('Active save failed');
		const changing = view.changePassword();
		await vi.waitFor(() => expect(PluginPasswordModal.prototype.openAsync).toHaveBeenCalled());
		release.resolve();
		await Promise.all([failed, changing]);

		await expectOldPassword();
		expect(Notice).toHaveBeenCalledWith('Password wasn\'t changed');
	});

	it('does not write or change credentials when the dialog is cancelled', async () => {
		vi.mocked(PluginPasswordModal.prototype.openAsync).mockRejectedValueOnce(undefined);
		const write = vi.spyOn(MarkdownView.prototype, 'save');
		await view.changePassword();

		await expectOldPassword();
		expect(write).not.toHaveBeenCalled();
	});

	it('aborts without updating credentials if saving is disabled during encryption', async () => {
		const started = deferred();
		const release = deferred();
		const originalEncrypt = FileDataHelper.encrypt.bind(FileDataHelper);
		vi.spyOn(FileDataHelper, 'encrypt').mockImplementationOnce(async (...args) => {
			started.resolve();
			await release.promise;
			return originalEncrypt(...args);
		});
		const write = vi.spyOn(MarkdownView.prototype, 'save');
		const changing = view.changePassword();
		await started.promise;
		view.isSavingEnabled = false;
		release.resolve();
		await changing;

		await expectOldPassword();
		expect(write).not.toHaveBeenCalled();
	});

	it.each(['unloaded', 'switched', 'saving disabled'])('does not report success if the note is %s while the dialog is open', async state => {
		const opened = deferred();
		const release = deferred();
		vi.mocked(PluginPasswordModal.prototype.openAsync).mockImplementationOnce(async () => {
			opened.resolve();
			await release.promise;
			return newPassword;
		});
		const write = vi.spyOn(MarkdownView.prototype, 'save');
		const changing = view.changePassword();
		await opened.promise;
		if (state === 'unloaded') view.file = null;
		if (state === 'switched') view.file = { ...file, path: 'other.mdenc' } as TFile;
		if (state === 'saving disabled') view.isSavingEnabled = false;
		release.resolve();
		await changing;

		await expectOldPassword();
		expect(write).not.toHaveBeenCalled();
	});

	it('ignores duplicate password-change commands until the current change completes', async () => {
		const opened = deferred();
		const release = deferred();
		vi.mocked(PluginPasswordModal.prototype.openAsync).mockImplementationOnce(async () => {
			opened.resolve();
			await release.promise;
			return newPassword;
		});
		const changing = view.changePassword();
		await opened.promise;
		await view.changePassword();
		expect(PluginPasswordModal.prototype.openAsync).toHaveBeenCalledOnce();
		release.resolve();
		await changing;

		await expectNewPassword();
	});
});
