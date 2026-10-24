import esbuild from 'esbuild';
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { offlineBuildOptions, repositoryRoot } from './scripts/recovery-builds.mjs';

const production = process.argv[2] === 'production';
await esbuild.build(offlineBuildOptions(production));
copyFileSync(join(repositoryRoot, 'src/tools/decrypt.html'), join(repositoryRoot, 'tools/decrypt.html'));
