// Rollup Plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commmonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/index.js',
  dest: 'dist/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    json({
      exclude: 'node_modules/**',
      preferConst: true
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commmonjs(),
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
