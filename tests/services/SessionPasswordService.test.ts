import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

vi.mock('obsidian', () => ({
	DataAdapter: class {},
	FileSystemAdapter: class { getBasePath() { return ''; } },
	Platform: { isDesktop: false, isDesktopApp: false },
	Notice: vi.fn(),
	TFile: class {},
}));

import { SessionPasswordService, PasswordAndHint } from '../../src/services/SessionPasswordService.ts';
import { Notice, DataAdapter, FileSystemAdapter, Platform } from 'obsidian';

const readPassword = vi.fn();

function makeFile(path: string, basename: string, parentPath: string) {
	return {
		path,
		basename,
		parent: { path: parentPath },
		extension: path.split('.').pop() || '',
	} as unknown as import('obsidian').TFile;
}

function makeMockAdapter(): DataAdapter {
	return {
		read: readPassword,
	} as unknown as DataAdapter;
}

describe('SessionPasswordService', () => {
	const pw: PasswordAndHint = { password: 'secret', hint: 'my hint' };

	beforeEach(() => {
		SessionPasswordService.clear();
		Platform.isDesktop = false;
		Platform.isDesktopApp = false;
		SessionPasswordService.setActive(true);
		SessionPasswordService.setAutoExpire(null);
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		SessionPasswordService.setExternalFilePaths([]);
		SessionPasswordService.init(makeMockAdapter());
		vi.useFakeTimers();
	});

	afterEach(() => {
		readPassword.mockReset();
		vi.useRealTimers();
		vi.clearAllMocks();
	});

	describe('Keychain provider', () => {
		const getSecret = vi.fn();
		beforeEach(() => {
			getSecret.mockReset().mockReturnValue('stored-password');
			SessionPasswordService.setKeychain('shared-secret', { getSecret });
			SessionPasswordService.setLevel(SessionPasswordService.LevelKeychain);
		});

		it('retrieves the current value for both file and path lookups without caching it', async () => {
			expect(await SessionPasswordService.getByPathAsync('note.md')).toEqual({ password: 'stored-password', hint: '' });
			getSecret.mockReturnValue('changed-password');
			expect((await SessionPasswordService.getByFile(makeFile('note.mdenc', 'note', ''))).password).toBe('changed-password');
			expect(getSecret).toHaveBeenCalledWith('shared-secret');
		});

		it('does not replace the secret with local passwords or remove it when clearing', async () => {
			SessionPasswordService.putByPath(pw, 'note.md');
			expect(SessionPasswordService.clear()).toBe(0);
			expect((await SessionPasswordService.getByPathAsync('other.md')).password).toBe('stored-password');
		});

		it.each([null, ''])('returns manual fallback for an empty or missing secret: %s', async value => {
			getSecret.mockReturnValue(value);
			expect(await SessionPasswordService.getByPathAsync('note.md')).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('handles unavailable storage and read errors without exposing secret values', async () => {
			getSecret.mockImplementation(() => { throw new Error('unavailable'); });
			expect(await SessionPasswordService.getByPathAsync('note.md')).toEqual(SessionPasswordService.blankPasswordAndHint);
			SessionPasswordService.setKeychain('shared-secret');
			expect(await SessionPasswordService.getByPathAsync('note.md')).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('does not retrieve secrets while disabled or with no selected ID', async () => {
			SessionPasswordService.setActive(false);
			await SessionPasswordService.getByPathAsync('note.md');
			SessionPasswordService.setActive(true);
			SessionPasswordService.setKeychain('', { getSecret });
			await SessionPasswordService.getByPathAsync('note.md');
			expect(getSecret).not.toHaveBeenCalled();
		});
	});

	describe('setActive', () => {
		it('should return blank password when inactive', async () => {
			SessionPasswordService.setActive(false);
			const file = makeFile('test.mdenc', 'test', '/');
			const result = await SessionPasswordService.getByFile(file);
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('should clear cache when deactivated', () => {
			SessionPasswordService.putByPath(pw, '/some/path');
			SessionPasswordService.setActive(false);
			const result = SessionPasswordService.getByPath('/some/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('should allow storing passwords when active', () => {
			SessionPasswordService.setActive(true);
			SessionPasswordService.putByPath(pw, '/some/path');
			const result = SessionPasswordService.getByPath('/some/path');
			expect(result.password).toBe('secret');
		});
	});

	describe('setLevel', () => {
		it('should accept valid levels', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			expect(SessionPasswordService.getLevel()).toBe(SessionPasswordService.LevelFilename);

			SessionPasswordService.setLevel(SessionPasswordService.LevelParentPath);
			expect(SessionPasswordService.getLevel()).toBe(SessionPasswordService.LevelParentPath);

			SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
			expect(SessionPasswordService.getLevel()).toBe(SessionPasswordService.LevelVault);

			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			expect(SessionPasswordService.getLevel()).toBe(SessionPasswordService.LevelExternalFile);
		});

		it('should default to LevelFilename for invalid level', () => {
			SessionPasswordService.setLevel('invalid');
			expect(SessionPasswordService.getLevel()).toBe(SessionPasswordService.LevelFilename);
		});

		it('should clear cache when setting invalid level', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
			SessionPasswordService.putByPath(pw, '/path');
			SessionPasswordService.setLevel('invalid');
			const result = SessionPasswordService.getByPath('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});
	});

	describe('LevelVault', () => {
		it('should use single cache key for all files', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
			const file1 = makeFile('a.mdenc', 'a', '/folder1');
			const file2 = makeFile('b.mdenc', 'b', '/folder2');

			SessionPasswordService.putByFile(pw, file1);

			const result1 = await SessionPasswordService.getByFile(file1);
			const result2 = await SessionPasswordService.getByFile(file2);

			expect(result1.password).toBe('secret');
			expect(result2.password).toBe('secret');
		});

		it('should use single cache key for all paths', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
			SessionPasswordService.putByPath(pw, '/path1');
			const result = SessionPasswordService.getByPath('/path2');
			expect(result.password).toBe('secret');
		});
	});

	describe('LevelParentPath', () => {
		it('should share password for files in same folder', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelParentPath);
			const file1 = makeFile('/folder/a.mdenc', 'a', '/folder');
			const file2 = makeFile('/folder/b.mdenc', 'b', '/folder');

			SessionPasswordService.putByFile(pw, file1);

			const result1 = await SessionPasswordService.getByFile(file1);
			const result2 = await SessionPasswordService.getByFile(file2);

			expect(result1.password).toBe('secret');
			expect(result2.password).toBe('secret');
		});

		it('should not share password for files in different folders', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelParentPath);
			const file1 = makeFile('/folder1/a.mdenc', 'a', '/folder1');
			const file2 = makeFile('/folder2/b.mdenc', 'b', '/folder2');

			SessionPasswordService.putByFile(pw, file1);

			const result1 = await SessionPasswordService.getByFile(file1);
			const result2 = await SessionPasswordService.getByFile(file2);

			expect(result1.password).toBe('secret');
			expect(result2.password).toBe('');
		});

		it('should use parent path for cache key', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelParentPath);
			SessionPasswordService.putByPath(pw, '/folder/file.txt');
			const result = SessionPasswordService.getByPath('/folder/other.txt');
			expect(result.password).toBe('secret');
		});
	});

	describe('LevelFilename', () => {
		it('should not share password between different files', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			const file1 = makeFile('/folder/a.mdenc', 'a', '/folder');
			const file2 = makeFile('/folder/b.mdenc', 'b', '/folder');

			SessionPasswordService.putByFile(pw, file1);

			const result1 = await SessionPasswordService.getByFile(file1);
			const result2 = await SessionPasswordService.getByFile(file2);

			expect(result1.password).toBe('secret');
			expect(result2.password).toBe('');
		});

		it('should return password for same file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			const file = makeFile('/folder/a.mdenc', 'a', '/folder');

			SessionPasswordService.putByFile(pw, file);
			const result = await SessionPasswordService.getByFile(file);

			expect(result.password).toBe('secret');
		});
	});

	describe('file and path API interoperability', () => {
		const cases = [
			SessionPasswordService.LevelFilename,
			SessionPasswordService.LevelParentPath,
			SessionPasswordService.LevelVault,
		].flatMap(level => ['note.mdenc', 'folder.with.dots/note.v2.mdenc'].map(path => ({ level, path })));

		it.each(cases)('shares one entry across both APIs at $level scope for $path', async ({ level, path }) => {
			SessionPasswordService.setLevel(level);
			const file = makeFile(path, path.includes('/') ? 'note.v2' : 'note', path.includes('/') ? 'folder.with.dots' : '/');
			SessionPasswordService.putByFile(pw, file);

			expect(SessionPasswordService.getByPath(path)).toEqual(pw);
			expect(await SessionPasswordService.getByPathAsync(path)).toEqual(pw);
			const updated = { password: 'updated password', hint: 'updated hint' };
			SessionPasswordService.putByPath(updated, path);
			expect(await SessionPasswordService.getByFile(file)).toEqual(updated);
			expect(SessionPasswordService.clear()).toBe(1);
		});

		it.each(cases)('clears path-stored credentials through clearForFile at $level scope for $path', async ({ level, path }) => {
			SessionPasswordService.setLevel(level);
			const file = makeFile(path, path.includes('/') ? 'note.v2' : 'note', path.includes('/') ? 'folder.with.dots' : '/');
			SessionPasswordService.putByPath(pw, path);
			SessionPasswordService.clearForFile(file);

			expect(SessionPasswordService.getByPath(path)).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(await SessionPasswordService.getByPathAsync(path)).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(await SessionPasswordService.getByFile(file)).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('keeps different extensions separate at file scope and only clears the requested file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			const markdown = makeFile('folder/note.md', 'note', 'folder');
			const encrypted = makeFile('folder/note.mdenc', 'note', 'folder');
			const legacy = makeFile('folder/note.encrypted', 'note', 'folder');
			const other = { password: 'another password', hint: 'another hint' };
			SessionPasswordService.putByFile(pw, markdown);
			SessionPasswordService.putByPath(other, encrypted.path);
			SessionPasswordService.putByFile(other, legacy);

			expect(SessionPasswordService.getByPath(markdown.path)).toEqual(pw);
			expect(await SessionPasswordService.getByFile(encrypted)).toEqual(other);
			SessionPasswordService.clearForFile(encrypted);
			expect(SessionPasswordService.getByPath(encrypted.path)).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(await SessionPasswordService.getByFile(markdown)).toEqual(pw);
			expect(SessionPasswordService.getByPath(legacy.path)).toEqual(other);
		});

		it('keeps identical filenames in different folders separate at file scope', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			const file = makeFile('first/note.mdenc', 'note', 'first');
			SessionPasswordService.putByFile(pw, file);

			expect(SessionPasswordService.getByPath(file.path)).toEqual(pw);
			expect(SessionPasswordService.getByPath('second/note.mdenc')).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(await SessionPasswordService.getByFile(makeFile('second/note.mdenc', 'note', 'second')))
				.toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('expires the shared file-scoped entry when retrieved through the path API', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			SessionPasswordService.setAutoExpire(5);
			const file = makeFile('note.mdenc', 'note', '/');
			SessionPasswordService.putByFile(pw, file);
			vi.advanceTimersByTime(6 * 60 * 1000);

			expect(SessionPasswordService.getByPath(file.path)).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(await SessionPasswordService.getByFile(file)).toEqual(SessionPasswordService.blankPasswordAndHint);
		});
	});

	describe('LevelExternalFile', () => {
		it('should not store passwords in cache', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.putByPath(pw, '/path');
			const result = SessionPasswordService.getByPath('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});

		it('should return blank from getByFile', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			const file = makeFile('test.mdenc', 'test', '/');
			const result = await SessionPasswordService.getByFile(file);
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});
	});

	describe('auto-expiry', () => {
		it('should not expire when minutesToExpire is 0', () => {
			SessionPasswordService.setAutoExpire(0);
			SessionPasswordService.putByPath(pw, '/path');
			vi.advanceTimersByTime(1000 * 60 * 60 * 24);
			const result = SessionPasswordService.getByPath('/path');
			expect(result.password).toBe('secret');
		});

		it('should not expire when minutesToExpire is null', () => {
			SessionPasswordService.setAutoExpire(null);
			SessionPasswordService.putByPath(pw, '/path');
			vi.advanceTimersByTime(1000 * 60 * 60 * 24);
			const result = SessionPasswordService.getByPath('/path');
			expect(result.password).toBe('secret');
		});

		it('should expire after configured minutes', () => {
			SessionPasswordService.setAutoExpire(5);
			SessionPasswordService.putByPath(pw, '/path');

			vi.advanceTimersByTime(6 * 60 * 1000);
			const result = SessionPasswordService.getByPath('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});
	});

	describe('clear', () => {
		it('should return count of cleared items', () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			SessionPasswordService.putByPath(pw, '/a');
			SessionPasswordService.putByPath(pw, '/b');
			SessionPasswordService.putByPath(pw, '/c');
			const count = SessionPasswordService.clear();
			expect(count).toBe(3);
		});

		it('should return 0 when cache is empty', () => {
			const count = SessionPasswordService.clear();
			expect(count).toBe(0);
		});
	});

	describe('clearForFile', () => {
		it('should remove password for specific file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelFilename);
			const file = makeFile('/folder/a.mdenc', 'a', '/folder');
			SessionPasswordService.putByFile(pw, file);

			SessionPasswordService.clearForFile(file);

			const result = await SessionPasswordService.getByFile(file);
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
		});
	});

	describe('getByPathAsync with external file', () => {
		it.each([false, true])('passes parent-directory paths intact to adapters (desktop=%s)', async desktop => {
			Platform.isDesktop = desktop;
			Platform.isDesktopApp = desktop;
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['../denied.txt', '../secrets/password.txt']);
			readPassword.mockRejectedValueOnce(new Error('Access denied')).mockResolvedValueOnce(' password\n');
			expect((await SessionPasswordService.getByPathAsync('note.mdenc')).password).toBe(' password\n');
			expect(readPassword.mock.calls).toEqual([['../denied.txt'], ['../secrets/password.txt']]);
			readPassword.mockResolvedValueOnce(' password\n');
			expect(await SessionPasswordService.canFetchContents('../secrets/password.txt')).toBe(true);
		});

		it('reads desktop absolute and parent-directory paths from the filesystem', async () => {
			const root = await mkdtemp(join(tmpdir(), 'password-paths-'));
			try {
				await mkdir(join(root, 'vault'));
				await writeFile(join(root, 'password.txt'), ' secret\n');
				const adapter = Object.create(FileSystemAdapter.prototype) as FileSystemAdapter;
				vi.spyOn(adapter, 'getBasePath').mockReturnValue(join(root, 'vault'));
				Platform.isDesktop = true;
				Platform.isDesktopApp = true;
				SessionPasswordService.init(adapter);
				SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
				for (const path of ['../password.txt', join(root, 'password.txt')]) {
					SessionPasswordService.setExternalFilePaths([path]);
					expect((await SessionPasswordService.getByPathAsync('note.mdenc')).password).toBe(' secret\n');
					expect(await SessionPasswordService.canFetchContents(path)).toBe(true);
				}
			} finally {
				await rm(root, { recursive: true, force: true });
			}
		});

		it('should show Notice when external file not found', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['nonexistent.txt']);

			readPassword.mockReset().mockRejectedValue(new Error('Not found'));

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(readPassword).toHaveBeenCalledWith('nonexistent.txt');
			expect(readPassword).toHaveBeenCalledTimes(1);
			expect(Notice).toHaveBeenCalledWith('External password file not found', 10000);
		});

		it('should return password from first successful external file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['missing.txt', 'found.txt']);

			readPassword.mockReset()
				.mockRejectedValueOnce(new Error('Not found'))
				.mockResolvedValueOnce('external-password');

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result.password).toBe('external-password');
			expect(result.hint).toBe('');
			expect(readPassword).toHaveBeenNthCalledWith(1, 'missing.txt');
			expect(readPassword).toHaveBeenNthCalledWith(2, 'found.txt');
			expect(readPassword).toHaveBeenCalledTimes(2);
		});

		it('should show Notice when external file is empty', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['empty.txt']);

			readPassword.mockReset().mockResolvedValue('');

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(readPassword).toHaveBeenCalledWith('empty.txt');
			expect(readPassword).toHaveBeenCalledTimes(1);
			expect(Notice).toHaveBeenCalledWith('External password file not found', 10000);
		});

		it('should skip an unreadable file and try the next external file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['missing.txt', 'found.txt']);
			readPassword.mockReset()
				.mockRejectedValueOnce(new Error('Not found'))
				.mockResolvedValueOnce('external-password');

			const result = await SessionPasswordService.getByPathAsync('/path');

			expect(result.password).toBe('external-password');
			expect(readPassword).toHaveBeenCalledTimes(2);
		});

		it('should report an unreadable external file', async () => {
			SessionPasswordService.init(makeMockAdapter());
			readPassword.mockReset().mockRejectedValue(new Error('Not found'));

			expect(await SessionPasswordService.canFetchContents('missing.txt')).toBe(false);
		});
	});
});
