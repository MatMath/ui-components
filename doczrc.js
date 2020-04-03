const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;
import { svgSpriteLoader } from 'docz-plugin-svg-sprite-loader';

export default {
  title: 'UI Components',
  description: 'This is Dashlane UI components lib documentation',
  codeSandbox: false,
  typescript: true,
  dest: 'docs',
  host: 'localhost',
  hashRouter: true,
  base: '/ui-components/',
  modifyBundlerConfig: config => {
    const rules = [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ];
    config.module.rules.push(...rules);
    config.resolve.plugins = [new TsConfigPathsPlugin()];
    return config;
  },
  plugins: [svgSpriteLoader()],
  menu: ['Getting Started', 'Components']
};
