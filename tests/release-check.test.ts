import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createHash } from 'node:crypto';
import type { BuildOptions } from 'esbuild';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { artifactPaths, checkRecoveryBundles, runCommand, runReleaseCheck, validateMetadata, verifyArtifacts } from '../scripts/release-check.mjs';

let root: string;
const metadata = { name: 'meld-encrypt', version: '3.0.1', minAppVersion: '1.1.13' };
const bundleNames = ['mdenc.mjs', 'mdenc-debug.mjs', 'offline-decrypt.js'];
const pluginFiles = ['main.js', 'manifest.json', 'styles.css'];

function write(path: string, value: string | Buffer) {
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, value);
}

function writeJson(name: string, value: unknown) { write(join(root, name), JSON.stringify(value)); }

beforeEach(() => {
	root = mkdtempSync(join(tmpdir(), 'release-check-'));
	writeJson('package.json', { name: metadata.name, version: metadata.version });
	writeJson('manifest.json', { id: metadata.name, version: metadata.version, minAppVersion: metadata.minAppVersion });
	writeJson('package-lock.json', { version: metadata.version, packages: { '': { version: metadata.version } } });
	writeJson('versions.json', { '3.0.0': '1.1.13', [metadata.version]: metadata.minAppVersion });
	mkdirSync(join(root, 'node_modules'));
	for (const name of bundleNames) write(join(root, 'tools', name), `bundle: ${name}`);
	write(join(root, 'src/tools/decrypt.html'), '<html>decrypt</html>');
	write(join(root, 'tools/decrypt.html'), '<html>decrypt</html>');
	write(join(root, 'src/styles.css'), '.test { color: green; }');
});

afterEach(() => { rmSync(root, { recursive: true, force: true }); });

function inMemoryBuild(options: BuildOptions) {
	expect(options.write).toBe(false);
	expect(options.plugins).toBeUndefined();
	if (!options.outfile) throw new Error('Missing recovery output path');
	return Promise.resolve({ outputFiles: [{ path: join(root, options.outfile), contents: Buffer.from(`bundle: ${options.outfile.split('/').pop()}`) }] });
}

function prepareAssets() {
	const paths = artifactPaths(root, metadata);
	write(join(paths.pluginDirectory, 'main.js'), 'module.exports = {};');
	write(join(paths.pluginDirectory, 'manifest.json'), readFileSync(join(root, 'manifest.json')));
	write(join(paths.pluginDirectory, 'styles.css'), readFileSync(join(root, 'src/styles.css')));
	return paths;
}

function zipAssets() {
	const paths = artifactPaths(root, metadata);
	rmSync(paths.archive, { force: true });
	runCommand('zip', ['-q', '-r', paths.archive, metadata.name], { cwd: paths.directory });
	return paths;
}

describe('release metadata', () => {
	it('accepts matching versions and preserves historical compatibility entries', () => {
		const before = readFileSync(join(root, 'versions.json'));
		expect(validateMetadata(root)).toEqual(metadata);
		expect(readFileSync(join(root, 'versions.json'))).toEqual(before);
	});

	it.each(['v3.0.1', '3.0.1-beta.1', '03.0.1', '../3.0.1'])('rejects unsupported release version %s', version => {
		writeJson('package.json', { name: metadata.name, version });
		expect(() => validateMetadata(root)).toThrow('stable x.y.z');
	});

	it.each(['manifest', 'lock root', 'lock package'])('rejects a mismatched %s version', field => {
		if (field === 'manifest') writeJson('manifest.json', { version: '3.0.0', minAppVersion: metadata.minAppVersion });
		else writeJson('package-lock.json', { version: field === 'lock root' ? '3.0.0' : metadata.version, packages: { '': { version: field === 'lock package' ? '3.0.0' : metadata.version } } });
		expect(() => validateMetadata(root)).toThrow('Version mismatch');
	});

	it('rejects a mismatched minimum-version map', () => {
		writeJson('versions.json', { [metadata.version]: '1.0.3' });
		expect(() => validateMetadata(root)).toThrow('minAppVersion');
	});

	it('rejects unsafe artifact names before any output cleanup', () => {
		writeJson('package.json', { name: '../other-output', version: metadata.version });
		expect(() => validateMetadata(root)).toThrow('safe artifact-directory');
	});
});

describe('recovery bundle freshness', () => {
	it('compares all three in-memory builds and matching HTML without rewriting tracked files', async () => {
		const build = vi.fn(inMemoryBuild);
		const files = [...bundleNames.map(name => join(root, 'tools', name)), join(root, 'tools/decrypt.html')];
		const before = files.map(file => readFileSync(file));
		await checkRecoveryBundles(root, build);
		expect(build).toHaveBeenCalledTimes(3);
		expect(files.map(file => readFileSync(file))).toEqual(before);
	});

	it('reports every stale or missing output, preserves edits, and gives rebuild commands', async () => {
		write(join(root, 'tools/mdenc.mjs'), 'uncommitted local edit');
		rmSync(join(root, 'tools/mdenc-debug.mjs'));
		write(join(root, 'tools/decrypt.html'), 'old html');
		await expect(checkRecoveryBundles(root, inMemoryBuild)).rejects.toThrow(/mdenc\.mjs.*mdenc-debug\.mjs.*decrypt\.html/s);
		await expect(checkRecoveryBundles(root, inMemoryBuild)).rejects.toThrow('npm run build-tool-mdenc');
		expect(readFileSync(join(root, 'tools/mdenc.mjs'), 'utf8')).toBe('uncommitted local edit');
		expect(existsSync(join(root, 'tools/mdenc-debug.mjs'))).toBe(false);
		expect(readFileSync(join(root, 'tools/decrypt.html'), 'utf8')).toBe('old html');
	});
});

describe('release artifact verification', () => {
	it('validates real ZIP contents and computes hashes for the four release assets', () => {
		prepareAssets();
		zipAssets();
		const result = verifyArtifacts(root, metadata);
		expect(result).toHaveLength(4);
		for (const file of result) expect(file.sha256).toBe(createHash('sha256').update(readFileSync(join(root, file.path))).digest('hex'));
	});

	it('rejects corrupt archives instead of trusting the .zip extension', () => {
		const { archive } = prepareAssets();
		write(archive, 'not a zip');
		expect(() => verifyArtifacts(root, metadata)).toThrow('unzip');
	});

	it.each(['missing', 'extra'])('rejects %s ZIP entries', kind => {
		const paths = prepareAssets();
		if (kind === 'missing') rmSync(join(paths.pluginDirectory, 'main.js'));
		else write(join(paths.pluginDirectory, 'obsolete.txt'), 'old release');
		zipAssets();
		if (kind === 'missing') write(join(paths.pluginDirectory, 'main.js'), 'module.exports = {};');
		expect(() => verifyArtifacts(root, metadata)).toThrow('exactly');
	});

	it('rejects ZIP bytes that differ from a standalone asset', () => {
		const paths = prepareAssets();
		zipAssets();
		write(join(paths.pluginDirectory, 'main.js'), 'module.exports = { changed: true };');
		expect(() => verifyArtifacts(root, metadata)).toThrow('ZIP main.js differs');
	});

	it('rejects stale packaged metadata and styles', () => {
		const paths = prepareAssets();
		zipAssets();
		write(join(paths.pluginDirectory, 'manifest.json'), '{}');
		expect(() => verifyArtifacts(root, metadata)).toThrow('Packaged manifest.json differs');
		write(join(paths.pluginDirectory, 'manifest.json'), readFileSync(join(root, 'manifest.json')));
		write(join(paths.pluginDirectory, 'styles.css'), 'old style');
		expect(() => verifyArtifacts(root, metadata)).toThrow('Packaged styles.css differs');
	});
});

function stubRunner(failAt = '') {
	const calls: string[] = [];
	const run = vi.fn((command: string, args: string[], options: { cwd?: string; env?: Record<string, string | undefined> } = {}) => {
		const npmArgs = command === 'npm' ? args : args[0] === process.env.npm_execpath ? args.slice(1) : null;
		const label = npmArgs ? `npm ${npmArgs.join(' ')}` : `${command} ${args.join(' ')}`;
		calls.push(label);
		if (failAt && label.includes(failAt)) throw new Error(`injected failure: ${failAt}`);
		if (args[0] === 'rev-parse') return Buffer.from('0123456789abcdef\n');
		if (args[0] === 'status') return Buffer.from(' M package.json\n');
		if (args[0]?.endsWith('esbuild.config.mjs')) {
			expect(options.env?.npm_package_version).toBe(metadata.version);
			expect(existsSync(join(artifactPaths(root, metadata).pluginDirectory, 'old.txt'))).toBe(false);
			expect(existsSync(artifactPaths(root, metadata).archive)).toBe(false);
			const paths = prepareAssets();
			write(paths.archive, 'stub archive');
		}
		if (command === 'unzip' && args[0] === '-Z1') return Buffer.from(`${metadata.name}/\n${pluginFiles.map(name => `${metadata.name}/${name}\n`).join('')}`);
		if (command === 'unzip' && args[0] === '-p') return readFileSync(join(artifactPaths(root, metadata).directory, args[2]));
		return Buffer.alloc(0);
	});
	return { run, calls };
}

describe('release check orchestration', () => {
	it('runs each check once, cleans only current-version outputs, and reports an uncommitted working tree', async () => {
		const paths = prepareAssets();
		write(join(paths.pluginDirectory, 'old.txt'), 'stale output');
		write(paths.archive, 'previous zip');
		write(join(root, 'dist/other-version/keep.txt'), 'preserve');
		const { run, calls } = stubRunner();
		const report = await runReleaseCheck({ root, run, build: inMemoryBuild, log: () => {} });
		expect(report.status).toBe('passed');
		expect(report.workingTreeDirty).toBe(true);
		expect(report.commit).toBe('0123456789abcdef');
		for (const command of ['npm run typecheck', 'npm test', 'npm run lint']) expect(calls.filter(call => call === command)).toHaveLength(1);
		expect(calls.some(call => /commit|push|tag|publish/.test(call))).toBe(false);
		expect(report.stages.every(stage => stage.status === 'passed')).toBe(true);
		expect(readFileSync(join(root, 'dist/other-version/keep.txt'), 'utf8')).toBe('preserve');
		expect(JSON.parse(readFileSync(join(root, 'dist/release-check/report.json'), 'utf8')).status).toBe('passed');
		expect(readFileSync(join(root, 'dist/release-check/SHA256SUMS'), 'utf8').trim().split('\n')).toHaveLength(4);
	});

	it.each(['npm test', 'esbuild.config.mjs'])('stops after %s fails and removes previous success outputs', async failAt => {
		write(join(root, 'dist/release-check/report.json'), '{"status":"passed"}');
		write(join(root, 'dist/release-check/SHA256SUMS'), 'old hashes');
		const { run, calls } = stubRunner(failAt);
		const report = await runReleaseCheck({ root, run, build: inMemoryBuild, log: () => {} });
		expect(report.status).toBe('failed');
		expect(report.error).toContain(failAt);
		expect(report.stages.find(stage => stage.name === 'artifacts')?.status).toBe('skipped');
		if (failAt === 'npm test') expect(calls).not.toContain('npm run lint');
		expect(report.artifacts).toEqual([]);
		expect(existsSync(join(root, 'dist/release-check/SHA256SUMS'))).toBe(false);
		expect(JSON.parse(readFileSync(join(root, 'dist/release-check/report.json'), 'utf8')).status).toBe('failed');
	});

	it('stops before tests or builds when recovery bundles are stale', async () => {
		write(join(root, 'tools/mdenc.mjs'), 'local change');
		const { run, calls } = stubRunner();
		const report = await runReleaseCheck({ root, run, build: inMemoryBuild, log: () => {} });
		expect(report.status).toBe('failed');
		expect(calls.some(call => call === 'npm test' || call.endsWith('production'))).toBe(false);
		expect(readFileSync(join(root, 'tools/mdenc.mjs'), 'utf8')).toBe('local change');
	});

	it('reports missing dependencies before invoking build tools', async () => {
		rmSync(join(root, 'node_modules'), { recursive: true });
		const { run } = stubRunner();
		const report = await runReleaseCheck({ root, run, build: inMemoryBuild, log: () => {} });
		expect(report.error).toContain('npm ci');
		expect(run).not.toHaveBeenCalled();
	});

	it('returns a nonzero CLI exit and failure report for invalid metadata without starting tests', () => {
		for (const name of ['release-check.mjs', 'recovery-builds.mjs']) write(join(root, 'scripts', name), readFileSync(new URL(`../scripts/${name}`, import.meta.url)));
		writeJson('versions.json', {});
		const result = spawnSync(process.execPath, [join(root, 'scripts/release-check.mjs')], { cwd: tmpdir(), encoding: 'utf8' });
		expect(result.status).toBe(1);
		expect(result.stdout).toContain('FAILED');
		const report = JSON.parse(readFileSync(join(root, 'dist/release-check/report.json'), 'utf8'));
		expect(report.status).toBe('failed');
		expect(report.stages[0].status).toBe('failed');
		expect(report.stages.slice(1).every((stage: { status: string }) => stage.status === 'skipped')).toBe(true);
	});
});
