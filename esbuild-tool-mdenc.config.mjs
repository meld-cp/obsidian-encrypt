import esbuild from "esbuild";
import process from "process";

const prod = (process.argv[2] === 'production');

esbuild.build({
	entryPoints: ['src/tools/mdenc.ts'],
	platform: 'node',
	bundle: true,
	format: 'esm',
	watch: !prod,
	target: 'node16',
	logLevel: "info",
	sourcemap: prod ? false : 'inline',
	treeShaking: prod,
	minify: prod,
	outfile: './tools/mdenc.mjs',
	//plugins:[ ]
})
