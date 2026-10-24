import esbuild from 'esbuild';
import { mdencBuildOptions } from './scripts/recovery-builds.mjs';

const production = process.argv.includes('production') || process.argv.includes('prod');
const development = process.argv.includes('dev');

if (production) await esbuild.build(mdencBuildOptions(true));
if (development || !production) await esbuild.build(mdencBuildOptions(false));
