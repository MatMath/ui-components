import compiler from '@ampproject/rollup-plugin-closure-compiler';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const config = {
  input: 'src/index.ts',

  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true
    }),
    json({ preferConst: true }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    })
  ],
  output: [{ file: pkg.module, format: 'esm', sourcemap: true }]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(compiler());
}

export default config;
