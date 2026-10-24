import { join } from 'node:path';
import { CdpSession, findTarget, waitFor } from './cdp.mjs';
import { createDesktopVault, freePort, launch } from './host.mjs';

// Trust only the generated vault; a fresh profile otherwise starts in Restricted Mode.
export async function trustDesktopVault(expectedVault, pluginId, version, timeout) {
	const app = globalThis.app;
	if (app.vault.adapter.getBasePath() !== expectedVault) throw new Error('Refusing to trust an unexpected vault');
	const deadline = Date.now() + timeout;
	do {
		const owner = typeof activeDocument === 'undefined' ? document : activeDocument;
		const trust = [...owner.querySelectorAll('.modal button')].find(button => button.textContent.trim() === 'Trust author and enable plugins');
		if (trust) trust.click();
		if (app.plugins.plugins[pluginId]?.manifest.version === version) return true;
		await new Promise(resolve => setTimeout(resolve, 100));
	} while (Date.now() < deadline);
	throw new Error('Packaged plugin did not load in the disposable desktop vault');
}

export async function desktop({ run, options, metadata, assets, fixture, cleanup, signal }) {
	const { vault, profile } = createDesktopVault(run, assets, metadata, fixture);
	const port = await freePort();
	const managed = launch(options.obsidian ?? 'obsidian', [`--user-data-dir=${profile}`, `--remote-debugging-port=${port}`, '--remote-debugging-address=127.0.0.1', '--no-first-run'], { logFile: join(run.output, 'obsidian.log') });
	cleanup(() => managed.stop());
	const target = await findTarget(port, target => target.url === 'app://obsidian.md/index.html', { timeout: options.timeout, signal, alive: managed.alive });
	managed.alive();
	const session = await CdpSession.connect(target.webSocketDebuggerUrl, { timeout: options.timeout, signal });
	cleanup(() => session.close());
	await waitFor(async () => { managed.alive(); return session.evaluate('Boolean(globalThis.app?.workspace?.layoutReady)'); }, { timeout: options.timeout, signal, message: 'Desktop vault did not finish loading' });
	await session.evaluate(`(${trustDesktopVault.toString()})(${JSON.stringify(vault)}, ${JSON.stringify(metadata.name)}, ${JSON.stringify(metadata.version)}, ${options.timeout})`);
	const title = await session.evaluate('document.title');
	return { session, expectedVault: vault, runtime: { version: title.match(/Obsidian ([\d.]+)/)?.[1] ?? null, title } };
}
