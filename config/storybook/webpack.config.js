const webpack = require('webpack');
const baseConfig = require('../webpack/dev/webpack.config');

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1)),
    }),
  },
  {
    plugins: storybookBaseConfig.plugins.concat([
      new webpack.ProvidePlugin({
        React: 'react'
      })
    ])
  }
)
