import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

vi.mock('obsidian', () => ({
	DataAdapter: class {},
	Notice: vi.fn(),
	TFile: class {},
}));

vi.mock('../../src/services/Utils.ts', () => ({
	Utils: {
		getFilePathExcludingExtension: (file: { path: string }) => file.path.replace(/\.[^.]+$/, ''),
		getFilePathWithNewExtension: (file: { path: string }, ext: string) => file.path.replace(/\.[^.]+$/, `.${ext}`),
	},
}));

import { SessionPasswordService, PasswordAndHint } from '../../src/services/SessionPasswordService.ts';
import { Notice, DataAdapter } from 'obsidian';

const originalFetch = global.fetch;

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
		getResourcePath: (path: string) => `/${path}`,
	} as unknown as DataAdapter;
}

describe('SessionPasswordService', () => {
	const pw: PasswordAndHint = { password: 'secret', hint: 'my hint' };

	beforeEach(() => {
		SessionPasswordService.clear();
		SessionPasswordService.setActive(true);
		SessionPasswordService.setAutoExpire(null);
		SessionPasswordService.setLevel(SessionPasswordService.LevelVault);
		SessionPasswordService.setExternalFilePaths([]);
		SessionPasswordService.init(makeMockAdapter());
		vi.useFakeTimers();
	});

	afterEach(() => {
		global.fetch = originalFetch;
		vi.useRealTimers();
		vi.clearAllMocks();
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
		it('should show Notice when external file not found', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['nonexistent.txt']);

			global.fetch = vi.fn().mockRejectedValue(new Error('Not found'));

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(global.fetch).toHaveBeenCalledWith('/nonexistent.txt');
			expect(global.fetch).toHaveBeenCalledTimes(1);
			expect(Notice).toHaveBeenCalledWith('External password file not found', 10000);
		});

		it('should return password from first successful external file', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['missing.txt', 'found.txt']);

			global.fetch = vi.fn()
				.mockRejectedValueOnce(new Error('Not found'))
				.mockResolvedValueOnce({ text: () => Promise.resolve('external-password') });

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result.password).toBe('external-password');
			expect(result.hint).toBe('');
			expect(global.fetch).toHaveBeenNthCalledWith(1, '/missing.txt');
			expect(global.fetch).toHaveBeenNthCalledWith(2, '/found.txt');
			expect(global.fetch).toHaveBeenCalledTimes(2);
		});

		it('should show Notice when external file is empty', async () => {
			SessionPasswordService.setLevel(SessionPasswordService.LevelExternalFile);
			SessionPasswordService.setExternalFilePaths(['empty.txt']);

			global.fetch = vi.fn().mockResolvedValue({ text: () => Promise.resolve('') });

			const result = await SessionPasswordService.getByPathAsync('/path');
			expect(result).toEqual(SessionPasswordService.blankPasswordAndHint);
			expect(global.fetch).toHaveBeenCalledWith('/empty.txt');
			expect(global.fetch).toHaveBeenCalledTimes(1);
			expect(Notice).toHaveBeenCalledWith('External password file not found', 10000);
		});
	});
});
