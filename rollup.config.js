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
  /**
   * When preserveModules is set to true, rollup mimics the file structure.
   * Therefore, the .js files will be created in /lib/src. Move them back to /lib
   * This also makes some modules "virtual" and put them into a special folder.
   * We therefore need to update the referenced path as well
   */
  preserveModules: true,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    /** SCSS transformation step. Compiles into CSS modules and minify output */
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
    replace({
      '../_virtual/': '_virtual/',
      delimiters: ['', '']
    }),
    replace({
      '../node_modules/style-inject/': 'style-inject/',
      delimiters: ['', '']
    }),
    renameExtensions({
      include: ['**/*'],
      map: name => name.replace(/(src\/|node_modules\/)/, '')
    })
  ],
  output: [{ dir: 'lib', format: 'esm', sourcemap: true }]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
