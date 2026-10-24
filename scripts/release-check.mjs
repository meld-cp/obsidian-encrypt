import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, lstatSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mdencBuildOptions, offlineBuildOptions, repositoryRoot } from './recovery-builds.mjs';

/** @typedef {{ cwd?: string, env?: NodeJS.ProcessEnv, showOutput?: boolean }} CommandOptions */
/** @typedef {(command: string, args: string[], options?: CommandOptions) => Buffer} CommandRunner */
/** @typedef {(options: import('esbuild').BuildOptions) => Promise<{outputFiles?: {path: string, contents: Uint8Array}[]}>} RecoveryBuilder */
/** @typedef {{name: string, version: string, minAppVersion: string}} Metadata */
/** @typedef {{path: string, size: number, sha256: string}} Artifact */
/** @typedef {{name: string, status: 'passed' | 'failed' | 'skipped', durationMs?: number, error?: string}} Stage */
/**
 * @typedef {object} Report
 * @property {number} schemaVersion
 * @property {'passed' | 'failed'} status
 * @property {string} startedAt
 * @property {string | null} version
 * @property {string | null} minAppVersion
 * @property {string | null} commit
 * @property {boolean | null} workingTreeDirty
 * @property {Stage[]} stages
 * @property {Artifact[]} artifacts
 * @property {string} [error]
 * @property {string} [finishedAt]
 * @property {number} [durationMs]
 */

const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const pluginFiles = ['main.js', 'manifest.json', 'styles.css'];
const rebuildInstructions = 'npm run build-tool-mdenc\nnpm run dev-tool-mdenc\nnpm run build-tool-decrypt';
const stageNames = ['metadata', 'prerequisites', 'recovery bundles', 'typecheck', 'tests', 'lint', 'build', 'artifacts'];

/** @param {string} command @param {string[]} args @param {CommandOptions} [options] @returns {Buffer} */
export function runCommand(command, args, { cwd, env = process.env, showOutput = false } = {}) {
	const result = spawnSync(command, args, { cwd, env, encoding: null, maxBuffer: 32 * 1024 * 1024, shell: false });
	if (showOutput) {
		if (result.stdout?.length) process.stdout.write(result.stdout);
		if (result.stderr?.length) process.stderr.write(result.stderr);
	}
	if (result.error || result.signal || result.status !== 0) {
		const reason = result.error?.message ?? (result.signal ? `signal ${result.signal}` : `exit ${result.status}`);
		const details = [result.stdout, result.stderr].filter(Boolean).map(value => value.toString().slice(-4000)).join('\n').trim();
		throw new Error(`${command} ${args.join(' ')} failed (${reason})${details ? `\n${details}` : ''}`);
	}
	return result.stdout ?? Buffer.alloc(0);
}

/** @param {string} root @returns {Metadata} */
export function validateMetadata(root) {
	const readJson = name => JSON.parse(readFileSync(join(root, name), 'utf8'));
	const pkg = readJson('package.json');
	const manifest = readJson('manifest.json');
	const lock = readJson('package-lock.json');
	const versions = readJson('versions.json');
	if (!stableVersion.test(pkg.version ?? '')) throw new Error('package.json version must be a stable x.y.z version without a v prefix.');
	if (!/^[a-z0-9][a-z0-9-]*$/.test(pkg.name ?? '')) throw new Error('Package name must be a single safe artifact-directory name.');
	if ([manifest.version, lock.version, lock.packages?.['']?.version].some(version => version !== pkg.version)) {
		throw new Error('Version mismatch: package.json, manifest.json, and both package-lock.json version fields must agree. Run npm version <version> --no-git-tag-version.');
	}
	if (!stableVersion.test(manifest.minAppVersion ?? '') || versions[pkg.version] !== manifest.minAppVersion) {
		throw new Error('versions.json must map the current version to manifest.json minAppVersion (x.y.z). Run npm run version after correcting the manifest.');
	}
	return { name: pkg.name, version: pkg.version, minAppVersion: manifest.minAppVersion };
}

/** @param {string} root @param {RecoveryBuilder} [build] */
export async function checkRecoveryBundles(root, build) {
	if (!build) ({ build } = await import('esbuild'));
	const stale = [];
	for (const options of [mdencBuildOptions(true, root), mdencBuildOptions(false, root), offlineBuildOptions(true, root)]) {
		const result = await build({ ...options, write: false, logLevel: 'silent' });
		if (!result.outputFiles?.length) throw new Error(`Recovery build produced no in-memory output: ${options.outfile}`);
		for (const output of result.outputFiles) {
			if (!existsSync(output.path) || !readFileSync(output.path).equals(Buffer.from(output.contents))) stale.push(relative(root, output.path));
		}
	}
	const html = join(root, 'tools/decrypt.html');
	if (!existsSync(html) || !readFileSync(html).equals(readFileSync(join(root, 'src/tools/decrypt.html')))) stale.push('tools/decrypt.html');
	if (stale.length) throw new Error(`Stale recovery bundles: ${stale.join(', ')}. No tracked files were changed.\nRebuild, review the changes, and rerun release:check:\n${rebuildInstructions}`);
}

/** @param {string} root @param {Metadata} metadata */
export function artifactPaths(root, metadata) {
	const base = join(root, 'dist', `${metadata.name}-${metadata.version}`);
	return { directory: base, pluginDirectory: join(base, metadata.name), archive: `${base}.zip` };
}

/** @param {string} root @param {Metadata} metadata @param {CommandRunner} [run] @returns {Artifact[]} */
export function verifyArtifacts(root, metadata, run = runCommand) {
	const { pluginDirectory, archive } = artifactPaths(root, metadata);
	const paths = [...pluginFiles.map(name => join(pluginDirectory, name)), archive];
	for (const path of paths) {
		if (!existsSync(path) || !lstatSync(path).isFile() || lstatSync(path).size === 0) throw new Error(`Missing, empty, or non-regular release asset: ${relative(root, path)}`);
	}
	if (!readFileSync(join(pluginDirectory, 'manifest.json')).equals(readFileSync(join(root, 'manifest.json')))) throw new Error('Packaged manifest.json differs from the repository manifest.');
	if (!readFileSync(join(pluginDirectory, 'styles.css')).equals(readFileSync(join(root, 'src/styles.css')))) throw new Error('Packaged styles.css differs from src/styles.css.');
	run('unzip', ['-t', archive], { cwd: root });
	const entries = run('unzip', ['-Z1', archive], { cwd: root }).toString().trim().split(/\r?\n/);
	const expected = pluginFiles.map(name => `${metadata.name}/${name}`);
	const files = entries.filter(name => name !== `${metadata.name}/`);
	if (new Set(entries).size !== entries.length || files.length !== expected.length || files.some(name => !expected.includes(name))) {
		throw new Error(`ZIP must contain exactly ${expected.join(', ')} (and optionally their parent directory). Found: ${entries.join(', ')}`);
	}
	for (const name of pluginFiles) {
		const extracted = run('unzip', ['-p', archive, `${metadata.name}/${name}`], { cwd: root });
		if (!Buffer.from(extracted).equals(readFileSync(join(pluginDirectory, name)))) throw new Error(`ZIP ${name} differs from its standalone release asset.`);
	}
	return paths.map(path => ({ path: relative(root, path).split('\\').join('/'), size: lstatSync(path).size, sha256: createHash('sha256').update(readFileSync(path)).digest('hex') }));
}

/**
 * @param {{root?: string, run?: CommandRunner, build?: RecoveryBuilder, log?: (text: string) => void}} [options]
 * @returns {Promise<Report>}
 */
export async function runReleaseCheck({ root = repositoryRoot, run = runCommand, build, log = console.log } = {}) {
	root = resolve(root);
	const output = join(root, 'dist/release-check');
	mkdirSync(output, { recursive: true });
	const reportPath = join(output, 'report.json');
	const checksumsPath = join(output, 'SHA256SUMS');
	for (const path of [reportPath, checksumsPath]) rmSync(path, { force: true });
	const started = Date.now();
	/** @type {Report} */
	const report = { schemaVersion: 1, status: 'failed', startedAt: new Date(started).toISOString(), version: null, minAppVersion: null, commit: null, workingTreeDirty: null, stages: stageNames.map(name => ({ name, status: 'skipped' })), artifacts: [] };
	const options = { cwd: root };
	const npm = args => process.env.npm_execpath
		? run(process.execPath, [process.env.npm_execpath, ...args], { ...options, showOutput: true })
		: run('npm', args, { ...options, showOutput: true });
	const actions = [
		() => {
			const metadata = validateMetadata(root);
			report.version = metadata.version;
			report.minAppVersion = metadata.minAppVersion;
			return metadata;
		},
		() => {
			if (!existsSync(join(root, 'node_modules'))) throw new Error('Dependencies are not installed. Run npm ci first.');
			for (const [command, args] of [['git', ['--version']], ['zip', ['-v']], ['unzip', ['-v']]]) {
				try { run(command, args, options); }
				catch (error) { throw new Error(`Missing or unusable prerequisite: ${command}. Install it and rerun release:check.\n${error.message}`); }
			}
			npm(['ls', '--depth=0']);
			report.commit = run('git', ['rev-parse', 'HEAD'], options).toString().trim();
			report.workingTreeDirty = run('git', ['status', '--porcelain', '--untracked-files=normal'], options).length > 0;
		},
		() => checkRecoveryBundles(root, build),
		() => npm(['run', 'typecheck']),
		() => npm(['test']),
		() => npm(['run', 'lint']),
		metadata => {
			const paths = artifactPaths(root, metadata);
			rmSync(paths.directory, { recursive: true, force: true });
			rmSync(paths.archive, { force: true });
			run(process.execPath, [join(root, 'esbuild.config.mjs'), 'production'], { ...options, showOutput: true, env: { ...process.env, npm_package_name: metadata.name, npm_package_version: metadata.version } });
		},
		metadata => {
			report.artifacts = verifyArtifacts(root, metadata, run);
			writeFileSync(checksumsPath, report.artifacts.map(asset => `${asset.sha256}  ${asset.path}\n`).join(''));
		},
	];
	let metadata;
	for (let index = 0; index < actions.length; index++) {
		const stage = report.stages[index];
		const stageStarted = Date.now();
		log(`\n[release:check] ${stage.name}`);
		try {
			const result = await actions[index](metadata);
			if (index === 0) metadata = result;
			stage.status = 'passed';
		} catch (error) {
			stage.status = 'failed';
			stage.error = error.message;
			report.error = `${stage.name}: ${error.message}`;
			log(`[release:check] FAILED: ${report.error}`);
		} finally {
			stage.durationMs = Date.now() - stageStarted;
		}
		if (stage.status === 'failed') break;
	}
	if (report.stages.every(stage => stage.status === 'passed')) report.status = 'passed';
	else {
		report.artifacts = [];
		rmSync(checksumsPath, { force: true });
	}
	report.finishedAt = new Date().toISOString();
	report.durationMs = Date.now() - started;
	writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
	log(`\n[release:check] ${report.status.toUpperCase()} (${(report.durationMs / 1000).toFixed(1)}s). Report: ${relative(root, reportPath)}`);
	if (report.status === 'passed') log(`[release:check] SHA-256: ${relative(root, checksumsPath)}\n[release:check] Local validation passed; the optional desktop smoke check is separate.`);
	return report;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	runReleaseCheck().then(report => { process.exitCode = report.status === 'passed' ? 0 : 1; }).catch(error => {
		console.error(`[release:check] ${error.message}`);
		process.exitCode = 1;
	});
}
