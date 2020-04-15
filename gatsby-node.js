const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsConfigPathsPlugin()]
    }
  });
};
