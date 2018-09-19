const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TITLEDEV } = require("../env");

module.exports = webpack => [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title: TITLEDEV
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.ProvidePlugin({
    React: 'react'
  })
];
