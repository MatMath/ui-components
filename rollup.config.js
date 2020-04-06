import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import renameExtensions from 'rollup-plugin-rename';
import autoprefixer from 'autoprefixer';
import replace from '@rollup/plugin-replace';

const config = {
  input: 'src/index.ts',
  preserveModules: true,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    /** SCSS transformation step. Compiles into CSS modules and minify outpyt */
    postcss({
      extract: false,
      plugins: [autoprefixer()],
      minimize: true
    }),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true
    }),
    json({ preferConst: true }),
    /**
     * Next lines are tricky.
     * For unknown reasons, when the postcss extract option is set to false using preserveModules set to true,
     * the .js files will be created in /lib/src
     * This is not the wanted output, so we move them back into lib/ ,
     * but we have one import that must be updated
     */
    replace({
      '../_virtual/_tslib.js': '_virtual/_tslib.js',
      delimiters: ['', '']
    }),
    renameExtensions({
      include: ['**/*'],
      map: name => name.replace('src/', '')
    })
  ],
  output: [{ dir: 'lib', format: 'esm', sourcemap: true }]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
