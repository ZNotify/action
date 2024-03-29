import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const input = 'src/index.ts';

export default {
  input,
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: false,
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
  ],
  watch: {
    clearScreen: false,
  },
};