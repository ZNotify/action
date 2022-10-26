import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const input = 'src/index.ts';
const production = process.env.NODE_ENV === 'production';

export default {
  input,
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: production,
      exports: 'auto',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
        outDir: 'dist',
    }),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
  watch: {
    clearScreen: false,
  },
};