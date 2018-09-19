const path = require('path');
const webpack = require('webpack');
const plugins = require('../plugins');
const loaders = require('../loaders');
const { TITLEPRO } = require('../env');

module.exports = {
  mode: "production",
  devtool: "#source-map",
  entry: {
    babelpolyfill: '@babel/polyfill',
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './../../../dist'),
    publicPath: './',
    filename: '[name].bundle.js',
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json'],
  },
  module: {
    rules: loaders
  },
  plugins: [
    plugins.cleanPlugin(path.resolve(__dirname, './../../../dist')),

    plugins.htmlPlugin('./src/index.html', TITLEPRO),

    plugins.envPlugin(webpack)('production'),

    plugins.providePlugin(webpack)()
  ],
};
