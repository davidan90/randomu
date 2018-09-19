const path = require('path');
const webpack = require('webpack');
const plugins = require('../plugins');
const loaders = require('../loaders');
const { PROTOCOL, HOST, PORT, TITLEDEV } = require('../env');

module.exports = {
  mode: 'development',
  devtool: '#eval-source-map',
  entry: [
    '@babel/polyfill',
    `webpack-dev-server/client?${PROTOCOL}://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json'],
  },
  module: {
    rules: loaders,
  },
  plugins: [
    plugins.hotReplacementPlugin(webpack),

    plugins.htmlPlugin('./src/index.html', TITLEDEV),

    plugins.envPlugin(webpack)('development'),

    plugins.providePlugin(webpack)
  ],
};
