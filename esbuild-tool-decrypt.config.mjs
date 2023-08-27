import esbuild from "esbuild";
import process from "process";
//import builtins from 'builtin-modules';
import copyStaticFiles from 'esbuild-copy-static-files';

const prod = (process.argv[2] === 'production');

esbuild.build({
	entryPoints: ['src/tools/offline-decrypt.ts'],
	bundle: true,
	external: [
		// 'obsidian',
		// 'electron',
		// '@codemirror/autocomplete',
		// '@codemirror/collab',
		// '@codemirror/commands',
		// '@codemirror/language',
		// '@codemirror/lint',
		// '@codemirror/search',
		// '@codemirror/state',
		// '@codemirror/view',
		// '@lezer/common',
		// '@lezer/highlight',
		// '@lezer/lr',
		//...builtins
	],
	format: 'iife',
	watch: !prod,
	target: 'es2018',
	logLevel: "info",
	sourcemap: 'inline',
	treeShaking: false,
	minify: false,
	outfile: './src/tools/offline-decrypt.js',
	plugins:[
		copyStaticFiles({
			src: './src/tools/offline-decrypt.js',
			dest: './dist/tools/offline-decrypt.js',
		}),
		copyStaticFiles({
			src: './src/tools/decrypt.html',
			dest: './dist/tools/decrypt.html',
		}),
	]
}).catch(() => process.exit(1));
