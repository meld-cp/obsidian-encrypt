import esbuild from "esbuild";
import process from "process";
import copyStaticFiles from 'esbuild-copy-static-files';

const prod = (process.argv[2] === 'production');

esbuild.build({
	entryPoints: ['src/tools/offline-decrypt.ts'],
	bundle: true,
	format: 'iife',
	watch: !prod,
	target: 'es2018',
	logLevel: "info",
	sourcemap: prod ? false : 'inline',
	treeShaking: prod,
	minify: prod,
	outfile: './tools/offline-decrypt.js',
	plugins:[
		copyStaticFiles({
			src: './src/tools/decrypt.html',
			dest: './tools/decrypt.html',
		}),
	]
}).catch(() => process.exit(1));
