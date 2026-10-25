import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DataAdapter, TFolder } from 'obsidian';
import type MeldEncrypt from '../../../src/main.ts';
import FeatureWholeNoteEncrypt from '../../../src/features/feature-whole-note-encrypt/FeatureWholeNoteEncrypt.ts';
import { FileDataHelper, JsonFileEncoding } from '../../../src/services/FileDataHelper.ts';
import { SessionPasswordService } from '../../../src/services/SessionPasswordService.ts';

const modal = vi.hoisted(() => ({ constructor: vi.fn(), openAsync: vi.fn() }));

vi.mock('obsidian', () => ({
	MarkdownView: class {},
	Platform: { isDesktop: false, isDesktopApp: false },
	FileSystemAdapter: class {},
	Notice: vi.fn(),
	TFile: class {},
	TFolder: class {},
	normalizePath: (path: string) => path.replace(/\/+/g, '/'),
}));

vi.mock('../../../src/PluginPasswordModal.ts', () => ({
	default: class {
		constructor(...args: unknown[]) { modal.constructor(...args); }
		openAsync = modal.openAsync;
	},
}));

vi.mock('../../../src/features/feature-whole-note-encrypt/EncryptedMarkdownView.ts', () => ({
	EncryptedMarkdownView: class {},
	Platform: { isDesktop: false, isDesktopApp: false },
	FileSystemAdapter: class {},
}));

describe('new encrypted note password handling', () => {
	const create = vi.fn(async (path: string, _content: string) => ({ path }));
	const openFile = vi.fn();
	const fetchPassword = vi.fn();
	let feature: FeatureWholeNoteEncrypt;

	beforeEach(() => {
		vi.clearAllMocks();
		vi.stubGlobal('window', { moment: () => ({ format: () => 'new-note.mdenc' }) });
		fetchPassword.mockRejectedValue(new Error('Password file unavailable'));
		modal.openAsync.mockResolvedValue({ password: 'entered-password', hint: 'entered hint' });
		SessionPasswordService.clear();
		SessionPasswordService.setActive(true);
		SessionPasswordService.setAutoExpire(null);
		SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
		SessionPasswordService.setExternalFilePaths(['password.txt']);
		SessionPasswordService.init({ read: fetchPassword } as unknown as DataAdapter);
		feature = new FeatureWholeNoteEncrypt();
		feature.plugin = {
			app: {
				vault: { create },
				workspace: { getLeaf: () => ({ openFile }) },
			},
		} as unknown as MeldEncrypt;
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		SessionPasswordService.clear();
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		SessionPasswordService.setExternalFilePaths([]);
	});

	it('does not detach workspace leaves when the plugin unloads', () => {
		const detachLeavesOfType = vi.fn();
		Object.assign(feature.plugin.app.workspace, { detachLeavesOfType });
		feature.onunload();
		expect(detachLeavesOfType).not.toHaveBeenCalled();
	});

	function createNote() {
		return (feature as unknown as {
			processCreateNewEncryptedNoteCommand(folder: TFolder): Promise<void>;
		}).processCreateNewEncryptedNoteCommand({ path: 'folder' } as TFolder);
	}

	async function expectCreatedWith(password: string) {
		expect(create).toHaveBeenCalledOnce();
		const data = JsonFileEncoding.decode(create.mock.calls[0][1]);
		expect(await FileDataHelper.decrypt(data, password)).toBe('');
		expect(await FileDataHelper.decrypt(data, '')).toBeNull();
		expect(openFile).toHaveBeenCalledOnce();
	}

	it('prompts when the external password file cannot be read', async () => {
		await createNote();

		expect(fetchPassword).toHaveBeenCalledOnce();
		expect(modal.constructor).toHaveBeenCalledWith(
			expect.anything(), 'Encrypt note', true, true,
			expect.objectContaining({ password: '' }),
		);
		await expectCreatedWith('entered-password');
	});

	it('prompts when the external password file is empty', async () => {
		fetchPassword.mockResolvedValue('');
		await createNote();

		expect(modal.openAsync).toHaveBeenCalledOnce();
		await expectCreatedWith('entered-password');
	});

	it('prompts when no external password paths are configured', async () => {
		SessionPasswordService.setExternalFilePaths([]);
		await createNote();

		expect(fetchPassword).not.toHaveBeenCalled();
		expect(modal.openAsync).toHaveBeenCalledOnce();
		await expectCreatedWith('entered-password');
	});

	it('creates nothing when the fallback password dialog is cancelled', async () => {
		modal.openAsync.mockRejectedValue(undefined);
		await createNote();

		expect(create).not.toHaveBeenCalled();
		expect(openFile).not.toHaveBeenCalled();
	});

	it('creates nothing when an empty fallback password is confirmed', async () => {
		modal.openAsync.mockResolvedValue({ password: '', hint: '' });
		await createNote();

		expect(create).not.toHaveBeenCalled();
		expect(openFile).not.toHaveBeenCalled();
	});

	it('prefills a valid external password and allows an override', async () => {
		fetchPassword.mockResolvedValue('external-password');
		await createNote();

		expect(modal.constructor).toHaveBeenCalledWith(expect.anything(), 'Encrypt note', true, true, { password: 'external-password', hint: '' });
		expect(modal.openAsync).toHaveBeenCalledOnce();
		await expectCreatedWith('entered-password');
	});

	it.each(['vault', 'parentPath', 'filename', 'keychain'])('always prompts with a known %s password and permits cancellation', async level => {
		SessionPasswordService.setLevel(level);
		SessionPasswordService.setKeychain('shared-secret', { getSecret: () => 'known-password' });
		SessionPasswordService.putByPath({ password: 'known-password', hint: '' }, 'folder/new-note.mdenc');
		modal.openAsync.mockRejectedValue(undefined);
		await createNote();
		expect(modal.constructor).toHaveBeenCalledWith(expect.anything(), 'Encrypt note', true, true, { password: 'known-password', hint: '' });
		expect(create).not.toHaveBeenCalled();
	});

	it('still prompts for a password outside external-file mode', async () => {
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		await createNote();

		expect(fetchPassword).not.toHaveBeenCalled();
		expect(modal.openAsync).toHaveBeenCalledOnce();
		await expectCreatedWith('entered-password');
	});

	it('also prevents an empty password outside external-file mode', async () => {
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		modal.openAsync.mockResolvedValue({ password: '', hint: '' });
		await createNote();

		expect(create).not.toHaveBeenCalled();
		expect(openFile).not.toHaveBeenCalled();
	});
});
