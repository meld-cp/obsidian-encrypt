import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { encryptCanvasData } from '../src/features/feature-canvas-encrypt/CanvasEncryptionWrapper.ts';
import type { CanvasData } from '../src/features/feature-canvas-encrypt/CanvasTypes.ts';

const [outputArg, password = 'meld-canvas-runtime-test-password'] = process.argv.slice(2);
if (!outputArg) {
	console.error('Usage: npm run test:canvas-fixture -- <output.canvas> [password]');
	process.exit(2);
}

async function main(): Promise<void> {
	const marker = ['MELD_CANVAS_TEST', 'SECRET_93c5421'].join('_');
	const data: CanvasData = {
	nodes: [
		{ id: 'text', type: 'text', text: marker, x: 0, y: 0, width: 400, height: 200 },
		{ id: 'link', type: 'link', url: `https://example.invalid/${marker}`, x: 500, y: 0, width: 400, height: 200 },
		{ id: 'group', type: 'group', label: marker, x: -50, y: -50, width: 1000, height: 400 },
	],
	edges: [{ id: 'edge', fromNode: 'text', toNode: 'link', label: marker }],
		futureProperty: { marker, preserved: true },
	};

	const wrapper = await encryptCanvasData(data, password, 'runtime-test');
	await writeFile(resolve(outputArg), wrapper, { encoding: 'utf8', flag: 'wx' });
	console.log(JSON.stringify({ output: resolve(outputArg), password, plaintextBytes: JSON.stringify(data).length }));
}

void main().catch(error => {
	console.error(error);
	process.exitCode = 1;
});
