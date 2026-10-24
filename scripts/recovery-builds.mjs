import { fileURLToPath } from 'node:url';

export const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));

export function mdencBuildOptions(production, root = repositoryRoot) {
	return {
		absWorkingDir: root,
		entryPoints: ['src/tools/mdenc.ts'],
		platform: 'node',
		bundle: true,
		format: 'esm',
		target: 'node16',
		logLevel: 'info',
		sourcemap: production ? false : 'inline',
		treeShaking: true,
		minify: production,
		outfile: production ? './tools/mdenc.mjs' : './tools/mdenc-debug.mjs',
	};
}

export function offlineBuildOptions(production, root = repositoryRoot) {
	return {
		absWorkingDir: root,
		entryPoints: ['src/tools/offline-decrypt.ts'],
		bundle: true,
		format: 'iife',
		target: 'es2018',
		logLevel: 'info',
		sourcemap: production ? false : 'inline',
		treeShaking: production,
		minify: production,
		outfile: './tools/offline-decrypt.js',
	};
}
