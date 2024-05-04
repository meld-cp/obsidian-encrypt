import esbuild from "esbuild";
import process from "process";

const prod = ( process.argv.includes('production') || process.argv.includes('prod') );
const dev = ( process.argv.includes('dev') );
const watch = ( process.argv.includes('watch') );

if (prod) {

	await esbuild.build({
		entryPoints: ['src/tools/mdenc.ts'],
		platform: 'node',
		bundle: true,
		format: 'esm',
		watch: watch,
		target: 'node16',
		logLevel: "info",
		sourcemap: false,
		treeShaking: true,
		minify: true,
		outfile: './tools/mdenc.mjs',
		//plugins:[ ]
	})
	

}

if (dev || !prod) {

	await esbuild.build({
		entryPoints: ['src/tools/mdenc.ts'],
		platform: 'node',
		bundle: true,
		format: 'esm',
		watch: watch,
		target: 'node16',
		logLevel: "info",
		sourcemap: 'inline',
		treeShaking: true,
		minify: false,
		outfile: './tools/mdenc-debug.mjs',
		//plugins:[ ]
	})
	
}

