import typescript from '@rollup/plugin-typescript';
//import {nodeResolve} from '@rollup/plugin-node-resolve';
//import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy";

export default {
  input: 'src/CryptoHelper.ts',
  output: {
    file: 'dist/tools/crypto-helper.js',
    name: 'modules',
    //sourcemap: 'inline',
    format: 'iife',
    //exports: 'auto'
  },
  plugins: [
    typescript(),
    //nodeResolve({browser: true}),
    //commonjs(),
    copy({
      targets: [
        {
          src: [
            'src/tools/decrypt.html',
          ],
          dest: 'dist/tools'
        },
      ]
    })
  ],

};