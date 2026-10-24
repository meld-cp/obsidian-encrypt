import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateMetadata, verifyArtifacts } from './release-check.mjs';
import { repositoryRoot } from './recovery-builds.mjs';
import { createRun, exec, parseOptions, readFixtures } from './smoke/host.mjs';
import { desktop } from './smoke/desktop.mjs';
import { runScenarios } from './smoke/scenarios.mjs';

export async function runSmoke(options, { root = repositoryRoot, startPlatform = desktop, build = true, signal, log = console.log, execute = exec } = {}) {
	if (process.platform !== 'linux') throw new Error('The smoke harness currently supports Linux hosts.');
	const run = createRun(root);
	const started = Date.now();
	const report = { platform: 'desktop', status: 'failed', stage: 'prepare', startedAt: new Date().toISOString(), checks: [], reportPath: relative(root, run.reportPath), runtime: null };
	const saveReport = () => {
		const text = JSON.stringify(report, null, 2) + '\n';
		writeFileSync(run.reportPath, text);
		writeFileSync(run.latestPath, text);
	};
	saveReport();
	const disposers = [];
	let session;
	const abort = () => session?.close();
	signal?.addEventListener('abort', abort, { once: true });
	try {
		signal?.throwIfAborted();
		const metadata = validateMetadata(root);
		report.version = metadata.version;
		report.commit = execute('git', ['rev-parse', 'HEAD'], { cwd: root }).toString().trim();
		report.workingTreeDirty = execute('git', ['status', '--porcelain'], { cwd: root }).length > 0;
		const fixture = readFixtures(root);
		if (build) {
			report.stage = 'build';
			log('[smoke] Building the current production plugin');
			const args = ['run', 'build'];
			if (process.env.npm_execpath) exec(process.execPath, [process.env.npm_execpath, ...args], { cwd: root, timeout: options.timeout, logFile: run.logFile });
			else exec('npm', args, { cwd: root, timeout: options.timeout, logFile: run.logFile });
		}
		const validated = verifyArtifacts(root, metadata);
		const assets = join(run.output, 'artifacts');
		mkdirSync(assets);
		report.artifacts = validated.map(asset => {
			const snapshot = join(assets, basename(asset.path));
			copyFileSync(join(root, asset.path), snapshot);
			const sha256 = createHash('sha256').update(readFileSync(snapshot)).digest('hex');
			if (sha256 !== asset.sha256) throw new Error('Production assets changed while preparing smoke inputs; rerun after the other build finishes');
			return { ...asset, path: relative(root, snapshot) };
		});
		report.stage = 'launch';
		log('[smoke] Starting isolated desktop Obsidian');
		const launched = await startPlatform({ run, options, metadata, assets, fixture, cleanup: disposer => disposers.push(disposer), signal });
		session = launched.session;
		report.runtime = launched.runtime;
		signal?.throwIfAborted();
		report.stage = 'scenarios';
		log('[smoke] Running encryption, password, conversion, and legacy checks');
		const result = await session.evaluate(`(${runScenarios.toString()})(${JSON.stringify({ pluginId: metadata.name, version: metadata.version, expectedVault: launched.expectedVault, fixture: fixture.expectations, timeout: Math.min(options.timeout, 30000) })})`);
		report.checks = result?.checks ?? [];
		if (result?.status !== 'passed' || report.checks.length !== 8 || report.checks.some(check => check.status !== 'passed')) throw new Error(result?.error ?? 'Smoke scenarios did not all complete');
		report.status = 'passed';
	} catch (error) {
		report.error = error.message;
		if (session) {
			try {
				const screenshot = await session.send('Page.captureScreenshot', { format: 'png' });
				writeFileSync(join(run.output, 'failure.png'), Buffer.from(screenshot.data, 'base64'));
			} catch { /* Diagnostics must not prevent cleanup. */ }
		}
	} finally {
		signal?.removeEventListener('abort', abort);
		const cleanupErrors = [];
		for (const dispose of disposers.reverse()) {
			try { await dispose(); } catch (error) { cleanupErrors.push(error.message); }
		}
		if (cleanupErrors.length) {
			report.status = 'failed';
			report.cleanupErrors = cleanupErrors;
		}
		if (!cleanupErrors.length) {
			try { rmSync(run.state, { recursive: true, force: true }); }
			catch (error) { cleanupErrors.push(error.message); report.status = 'failed'; report.cleanupErrors = cleanupErrors; }
		}
		report.cleanedUp = cleanupErrors.length === 0;
		report.finishedAt = new Date().toISOString();
		report.durationMs = Date.now() - started;
		saveReport();
	}
	log(`[smoke] ${report.status.toUpperCase()}: ${report.checks.filter(check => check.status === 'passed').length}/8 checks. Report: ${report.reportPath}`);
	if (report.error) log(`[smoke] ${report.stage}: ${report.error}`);
	if (report.cleanupErrors) log(`[smoke] Cleanup errors: ${report.cleanupErrors.join('; ')}`);
	return report;
}

const usage = `Usage:
  npm run smoke:desktop -- [--obsidian <executable>] [--timeout <seconds>]

Optional desktop smoke test for editor, password-dialog, or save-flow changes.
Requires a Linux desktop and Obsidian. Builds the current plugin, runs eight
checks in a disposable vault, and cleans up its own profile and app process.
Reports, tested assets, and logs remain under dist/smoke. Default timeout: 30s.
tests/test-vault is reserved for manual testing and is never used here.
`;

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const controller = new AbortController();
	const cancel = () => controller.abort(new Error('Smoke test cancelled'));
	process.once('SIGINT', cancel);
	process.once('SIGTERM', cancel);
	try {
		const options = parseOptions(process.argv.slice(2));
		if (options.help) console.log(usage);
		else {
			const report = await runSmoke(options, { signal: controller.signal });
			process.exitCode = report.status === 'passed' ? 0 : 1;
		}
	} catch (error) { console.error(`[smoke] ${error.message}\n${usage}`); process.exitCode = 1; }
	finally { process.removeListener('SIGINT', cancel); process.removeListener('SIGTERM', cancel); }
}
