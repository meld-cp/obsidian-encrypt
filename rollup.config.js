import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy-assets-to";

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({browser: true}),
    commonjs(),
    copy({
      assets: [
        'manifest.json',
        'src/style.css'
      ],
      outputDir: 'dist'
    }),
  ],

};