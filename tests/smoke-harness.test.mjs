import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { CdpSession, waitFor } from '../scripts/smoke/cdp.mjs';
import { createDesktopVault, createRun, exec, launch, parseOptions, readFixtures } from '../scripts/smoke/host.mjs';
import { trustDesktopVault } from '../scripts/smoke/desktop.mjs';
import { runScenarios } from '../scripts/smoke/scenarios.mjs';
import { runSmoke } from '../scripts/smoke.mjs';
import { artifactPaths } from '../scripts/release-check.mjs';
import { repositoryRoot } from '../scripts/recovery-builds.mjs';
import { FileDataHelper, JsonFileEncoding } from '../src/services/FileDataHelper.ts';
import { CryptoHelperFactory } from '../src/services/CryptoHelperFactory.ts';
import { FeatureInplaceTextAnalysis } from '../src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';

let root;
beforeEach(() => { root = mkdtempSync(join(tmpdir(), 'smoke-harness-')); });
afterEach(() => { rmSync(root, { recursive: true, force: true }); });

const fixture = () => readFixtures(repositoryRoot);
const metadata = { name: 'meld-encrypt', version: '3.0.0', minAppVersion: '1.1.13' };
function json(path, value) { writeFileSync(path, JSON.stringify(value)); }
function seedMetadataAndAssets() {
	json(join(root, 'package.json'), { name: metadata.name, version: metadata.version });
	json(join(root, 'manifest.json'), { id: metadata.name, version: metadata.version, minAppVersion: metadata.minAppVersion });
	json(join(root, 'package-lock.json'), { version: metadata.version, packages: { '': { version: metadata.version } } });
	json(join(root, 'versions.json'), { [metadata.version]: metadata.minAppVersion });
	mkdirSync(join(root, 'tests/fixtures/smoke'), { recursive: true });
	for (const name of ['expectations.json', 'legacy-whole.mdenc', 'legacy-inline.md']) writeFileSync(join(root, 'tests/fixtures/smoke', name), readFileSync(join(repositoryRoot, 'tests/fixtures/smoke', name)));
	mkdirSync(join(root, 'src'));
	writeFileSync(join(root, 'src/styles.css'), '.smoke {}');
	const paths = artifactPaths(root, metadata);
	mkdirSync(paths.pluginDirectory, { recursive: true });
	writeFileSync(join(paths.pluginDirectory, 'main.js'), 'module.exports = {};');
	writeFileSync(join(paths.pluginDirectory, 'manifest.json'), readFileSync(join(root, 'manifest.json')));
	writeFileSync(join(paths.pluginDirectory, 'styles.css'), readFileSync(join(root, 'src/styles.css')));
	exec('zip', ['-q', '-r', paths.archive, metadata.name], { cwd: paths.directory });
	return paths;
}
const gitState = (_command, args) => Buffer.from(args[0] === 'rev-parse' ? 'test-commit\n' : ' M test\n');
const successfulChecks = () => Array.from({ length: 9 }, (_, index) => ({ name: `check ${index}`, status: 'passed' }));

describe('smoke fixtures and isolation', () => {
	it('keeps legacy golden fixtures readable with the current readers', async () => {
		const data = fixture();
		const whole = JsonFileEncoding.decode(data.files['legacy-whole.mdenc']);
		expect(whole.version).toBe('2.0');
		expect(await FileDataHelper.decrypt(whole, data.expectations.legacyPassword)).toBe(data.expectations.legacyText);
		const inline = new FeatureInplaceTextAnalysis(data.files['legacy-inline.md']).decryptable;
		expect(inline.version).toBe(2);
		expect(await CryptoHelperFactory.BuildFromDecryptableOrThrow(inline).decryptFromBase64(inline.base64CipherText, data.expectations.legacyPassword)).toBe(data.expectations.legacyText);
	});

	it('creates separate vaults and profiles under dist without touching the manual vault', () => {
		const paths = seedMetadataAndAssets();
		mkdirSync(join(root, 'tests/test-vault'), { recursive: true });
		writeFileSync(join(root, 'tests/test-vault/keep.md'), 'manual test notes');
		const first = createDesktopVault(createRun(root), paths.pluginDirectory, metadata, fixture());
		const second = createDesktopVault(createRun(root), paths.pluginDirectory, metadata, fixture());
		expect(first.vault).not.toBe(second.vault);
		expect(first.profile).not.toBe(second.profile);
		expect(first.vault.startsWith(join(root, 'dist/smoke'))).toBe(true);
		expect(readFileSync(join(root, 'tests/test-vault/keep.md'), 'utf8')).toBe('manual test notes');
		expect(readFileSync(join(first.vault, 'legacy-whole.mdenc'), 'utf8')).toBe(fixture().files['legacy-whole.mdenc']);
		expect(JSON.parse(readFileSync(join(first.profile, 'obsidian.json'), 'utf8')).vaults['0123456789abcdef'].path).toBe(first.vault);
	});

	it('refuses to trust or run checks against an unexpected vault', async () => {
		const create = vi.fn();
		const unsafeApp = { vault: { adapter: { getBasePath: () => '/manual/vault', basePath: 'manual' }, create } };
		const trust = runInNewContext(`(${trustDesktopVault.toString()})('/generated/vault', 'meld-encrypt', '3.0.0', 1)`, { app: unsafeApp });
		await expect(trust).rejects.toThrow('unexpected vault');

		const result = await runInNewContext(`(${runScenarios.toString()})(${JSON.stringify({ pluginId: 'meld-encrypt', version: '3.0.0', expectedVault: '/generated/vault', fixture: fixture().expectations, timeout: 1 })})`, { app: unsafeApp });
		expect(result.status).toBe('failed');
		expect(result.checks).toHaveLength(1);
		expect(result.error).toContain('unexpected vault');
		expect(create).not.toHaveBeenCalled();
	});

	it('accepts only desktop options and uses a short default timeout', () => {
		expect(parseOptions([]).timeout).toBe(30000);
		expect(parseOptions(['--obsidian', '/test/Obsidian.AppImage', '--timeout', '60'])).toMatchObject({ obsidian: '/test/Obsidian.AppImage', timeout: 60000 });
		for (const args of [['--apk', 'app.apk'], ['--sdk', '/sdk'], ['--vault', 'manual'], ['--timeout', '-1'], ['--obsidian']]) expect(() => parseOptions(args)).toThrow();
	});

});

class Socket extends EventTarget {
	sent = [];
	send(message) { this.sent.push(JSON.parse(message)); }
	close() { this.dispatchEvent(new Event('close')); }
	reply(id, result) { this.dispatchEvent(new MessageEvent('message', { data: JSON.stringify({ id, result }) })); }
}

describe('debugging transport and bounded waits', () => {
	it('matches out-of-order replies and surfaces browser exceptions', async () => {
		const socket = new Socket();
		const session = new CdpSession(socket, 1000);
		const first = session.send('first');
		const second = session.send('second');
		socket.reply(2, { done: 'second' });
		socket.reply(1, { done: 'first' });
		expect(await first).toEqual({ done: 'first' });
		expect(await second).toEqual({ done: 'second' });
		const failure = session.evaluate('bad expression');
		const rejected = expect(failure).rejects.toThrow('test page error');
		socket.reply(3, { exceptionDetails: { exception: { description: 'test page error' } } });
		await rejected;
		session.close();
	});

	it('rejects pending work on disconnect and times out unresponsive requests', async () => {
		const socket = new Socket();
		const session = new CdpSession(socket, 10);
		await expect(session.send('hang')).rejects.toThrow('timed out');
		const pending = session.send('disconnect');
		const rejected = expect(pending).rejects.toThrow('connection closed');
		socket.close();
		await rejected;
		expect(session.pending.size).toBe(0);
	});

	it('closes an established connection on cancellation and rejects pending work', async () => {
		class ConnectingSocket extends Socket {
			constructor() { super(); queueMicrotask(() => this.dispatchEvent(new Event('open'))); }
		}
		vi.stubGlobal('WebSocket', ConnectingSocket);
		try {
			const controller = new AbortController();
			const session = await CdpSession.connect('ws://fixture', { timeout: 1000, signal: controller.signal });
			const pending = session.send('pending');
			const rejected = expect(pending).rejects.toThrow('connection closed');
			controller.abort();
			await rejected;
			expect(session.pending.size).toBe(0);
		} finally { vi.unstubAllGlobals(); }
	});

	it('honors cancellation and condition timeouts', async () => {
		const controller = new AbortController();
		controller.abort(new Error('cancelled fixture run'));
		await expect(waitFor(() => false, { signal: controller.signal })).rejects.toThrow('cancelled fixture run');
		await expect(waitFor(() => false, { timeout: 1, interval: 1, message: 'test deadline' })).rejects.toThrow('test deadline');
	});
});

describe('smoke run reporting and cleanup', () => {
	it.each(['passed', 'failed'])('reports %s scenarios and cleans only disposable state', async status => {
		seedMetadataAndAssets();
		const stopped = vi.fn();
		const report = await runSmoke({ timeout: 1000 }, {
			root, build: false, execute: gitState, log: () => {},
			startPlatform: async ({ cleanup }) => {
				cleanup(stopped);
				return { expectedVault: '/fixture', runtime: { version: '1.14.4' }, session: { evaluate: async () => ({ status, checks: status === 'passed' ? successfulChecks() : [{ name: 'failed check', status: 'failed' }], error: status === 'failed' ? 'injected scenario failure' : undefined }), send: async () => { throw new Error('No screenshot in fixture'); } } };
			},
		});
		expect(report.status).toBe(status);
		expect(report.artifacts.every(asset => asset.path.includes('/artifacts/'))).toBe(true);
		expect(stopped).toHaveBeenCalledOnce();
		expect(report.cleanedUp).toBe(true);
		expect(existsSync(join(root, report.reportPath.replace('report.json', 'state')))).toBe(false);
		expect(JSON.parse(readFileSync(join(root, 'dist/smoke/desktop-latest.json'), 'utf8')).status).toBe(status);
	});

	it('cleans launched resources even if platform startup fails', async () => {
		seedMetadataAndAssets();
		const stopped = vi.fn();
		const report = await runSmoke({ timeout: 1000 }, { root, build: false, execute: gitState, log: () => {}, startPlatform: async ({ cleanup }) => { cleanup(stopped); throw new Error('startup failed'); } });
		expect(report.status).toBe('failed');
		expect(report.stage).toBe('launch');
		expect(stopped).toHaveBeenCalledOnce();
		expect(report.cleanedUp).toBe(true);
	});

	it('does not claim success if cleanup fails or no checks ran', async () => {
		seedMetadataAndAssets();
		const report = await runSmoke({ timeout: 1000 }, { root, build: false, execute: gitState, log: () => {}, startPlatform: async ({ cleanup }) => {
			cleanup(() => { throw new Error('cannot stop fixture process'); });
			return { session: { evaluate: async () => ({ status: 'passed', checks: [] }), send: async () => { throw new Error('offline'); } }, expectedVault: '/fixture', runtime: {} };
		} });
		expect(report.status).toBe('failed');
		expect(report.cleanedUp).toBe(false);
		expect(report.cleanupErrors).toEqual(['cannot stop fixture process']);
		expect(existsSync(join(root, report.reportPath.replace('report.json', 'state')))).toBe(true);
	});

	it('stops its own real child process without touching other processes', async () => {
		const managed = launch(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { logFile: join(root, 'child.log') });
		try {
			await new Promise((resolve, reject) => { managed.child.once('spawn', resolve); managed.child.once('error', reject); });
			managed.alive();
		} finally { await managed.stop(); }
		expect(managed.child.exitCode !== null || managed.child.signalCode !== null).toBe(true);
		expect(() => managed.alive()).toThrow('exited');
	});
});
