const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { TITLEPRO } = require('../env');

module.exports = webpack => [
  new CleanWebpackPlugin([
    path.resolve(__dirname, './../../../dist')
  ]),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title: TITLEPRO
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify('production')
    }
  })
];
