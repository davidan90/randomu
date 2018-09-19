
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.htmlPlugin = (template, title) => new HtmlWebpackPlugin({
  template,
  title
});

exports.hotReplacementPlugin = webpack => new webpack.HotModuleReplacementPlugin();

exports.cleanPlugin = distPath => new CleanWebpackPlugin([distPath])

exports.envPlugin = webpack => env =>new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(env)
  }
}),

exports.providePlugin = webpack => new webpack.ProvidePlugin({
  React: 'react'
});

