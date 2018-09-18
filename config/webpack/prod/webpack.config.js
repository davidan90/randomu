const path = require('path');
const webpack = require('webpack');
const prodPlugins = require('./plugins');
const loaders = require('../loaders');

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
  plugins: prodPlugins(webpack),
};
