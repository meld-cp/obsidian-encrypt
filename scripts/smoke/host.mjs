import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:net';
import { appendFileSync, closeSync, copyFileSync, mkdirSync, mkdtempSync, openSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

export function parseOptions(args) {
	const result = {};
	for (let index = 0; index < args.length; index++) {
		const key = args[index];
		if (key === '--help') { result.help = true; continue; }
		if (!['--obsidian', '--timeout'].includes(key)) throw new Error(`Unknown option: ${key}`);
		const value = args[++index];
		if (!value || value.startsWith('--')) throw new Error(`Missing value for ${key}`);
		result[key.slice(2)] = value;
	}
	const seconds = Number(result.timeout ?? 30);
	if (!Number.isFinite(seconds) || seconds <= 0) throw new Error('--timeout must be a positive number of seconds');
	result.timeout = seconds * 1000;
	return result;
}

export function readFixtures(root) {
	const directory = join(root, 'tests/fixtures/smoke');
	return {
		expectations: JSON.parse(readFileSync(join(directory, 'expectations.json'), 'utf8')),
		files: Object.fromEntries(['legacy-whole.mdenc', 'legacy-inline.md'].map(name => [name, readFileSync(join(directory, name), 'utf8')])),
	};
}

export function createRun(root) {
	const directory = join(root, 'dist/smoke');
	mkdirSync(directory, { recursive: true });
	const output = mkdtempSync(join(directory, 'desktop-'));
	const state = join(output, 'state');
	mkdirSync(state);
	return { output, state, reportPath: join(output, 'report.json'), latestPath: join(directory, 'desktop-latest.json'), logFile: join(output, 'host.log') };
}

export function createDesktopVault(run, assets, metadata, fixture) {
	const vault = join(run.state, 'vault');
	const plugin = join(vault, '.obsidian/plugins', metadata.name);
	mkdirSync(plugin, { recursive: true });
	for (const name of ['main.js', 'manifest.json', 'styles.css']) copyFileSync(join(assets, name), join(plugin, name));
	for (const [name, contents] of Object.entries(fixture.files)) writeFileSync(join(vault, name), contents);
	writeFileSync(join(vault, '.obsidian/community-plugins.json'), JSON.stringify([metadata.name]));
	const profile = join(run.state, 'profile');
	mkdirSync(profile);
	writeFileSync(join(profile, 'obsidian.json'), JSON.stringify({ vaults: { '0123456789abcdef': { path: vault, open: true, ts: Date.now() } } }));
	return { vault, profile };
}

export function exec(command, args, { cwd, env = process.env, input, timeout = 30000, logFile } = {}) {
	const result = spawnSync(command, args, { cwd, env, input, timeout, maxBuffer: 16 * 1024 * 1024, shell: false });
	if (logFile) appendFileSync(logFile, `$ ${command} ${args.join(' ')}\n${result.stdout ?? ''}${result.stderr ?? ''}\n`);
	if (result.error || result.signal || result.status !== 0) {
		throw new Error(`${command} ${args.join(' ')} failed: ${result.error?.message ?? result.signal ?? `exit ${result.status}`}\n${result.stderr?.toString().slice(-1500) ?? ''}`);
	}
	return result.stdout ?? Buffer.alloc(0);
}

// Each launched process owns its POSIX process group; never search for or kill other apps.
export function launch(command, args, { logFile, cwd, env = process.env } = {}) {
	const fd = openSync(logFile, 'a');
	let child;
	try { child = spawn(command, args, { cwd, env, detached: true, stdio: ['ignore', fd, fd], shell: false }); }
	finally { closeSync(fd); }
	let spawnError;
	child.on('error', error => { spawnError = error; });
	const alive = () => {
		if (spawnError) throw spawnError;
		if (child.exitCode !== null || child.signalCode !== null) throw new Error(`${command} exited before the smoke check finished. See ${logFile}`);
	};
	const groupExists = () => {
		if (!child.pid) return false;
		try { process.kill(-child.pid, 0); return true; }
		catch (error) { if (error.code === 'ESRCH') return false; throw error; }
	};
	return {
		child, alive,
		async stop() {
			if (!groupExists()) return;
			try { process.kill(-child.pid, 'SIGTERM'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
			const end = Date.now() + 5000;
			while (groupExists() && Date.now() < end) await delay(100);
			if (groupExists()) {
				try { process.kill(-child.pid, 'SIGKILL'); } catch (error) { if (error.code !== 'ESRCH') throw error; }
			}
		},
	};
}

export async function freePort(port = 0) {
	const server = createServer();
	await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, '127.0.0.1', resolve); });
	const selected = server.address().port;
	await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
	return selected;
}
