import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const [vaultArg, canvasArg, markerArg = 'MELD_CANVAS_TEST_SECRET_93c5421', durationArg = '60', intervalArg = '200'] = process.argv.slice(2);
if (!vaultArg || !canvasArg) {
	console.error('Usage: npm run test:canvas-security-watch -- <vault> <canvas-relative-path> [marker] [seconds] [interval-ms]');
	process.exit(2);
}

const vault = path.resolve(vaultArg);
const canvasPath = path.resolve(vault, canvasArg);
const durationMs = Number(durationArg) * 1000;
const intervalMs = Number(intervalArg);
const failures = [];
let samples = 0;

function inspectWrapper(text) {
	if (text.includes(markerArg)) throw new Error('plaintext marker present in Canvas file');
	const value = JSON.parse(text);
	if (!Array.isArray(value.nodes) || value.nodes.length !== 0) throw new Error('wrapper nodes are not empty');
	if (!Array.isArray(value.edges) || value.edges.length !== 0) throw new Error('wrapper edges are not empty');
	if (value.meldEncryptedCanvas?.format !== 'meld-encrypted-canvas') throw new Error('encrypted marker missing');
	if (value.meldEncryptedCanvas?.version !== 1) throw new Error('unsupported wrapper version');
}

async function scanTree(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			await scanTree(absolute);
			continue;
		}
		const bytes = await readFile(absolute);
		if (bytes.includes(Buffer.from(markerArg))) failures.push(`plaintext marker found: ${absolute}`);
	}
}

const deadline = Date.now() + durationMs;
while (Date.now() < deadline) {
	try {
		inspectWrapper(await readFile(canvasPath, 'utf8'));
		samples += 1;
	} catch (error) {
		failures.push(`sample ${samples + 1}: ${error instanceof Error ? error.message : String(error)}`);
	}
	await new Promise(resolve => setTimeout(resolve, intervalMs));
}

await scanTree(vault);
if (failures.length > 0) {
	console.error(JSON.stringify({ ok: false, samples, failures }, null, 2));
	process.exit(1);
}
console.log(JSON.stringify({ ok: true, samples, vault, canvasPath, marker: markerArg }, null, 2));
