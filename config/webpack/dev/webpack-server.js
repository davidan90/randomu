const opn = require('opn');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const { PROTOCOL, HOST, PORT } = require('../env');

opn(`${PROTOCOL}://${HOST}:${PORT}`);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  noInfo: true,
  overlay: true
}).listen(PORT, HOST, error => {
  if (error) {
    return console.log(error);
  }
  console.log(`Running at ${PROTOCOL}://${HOST}:${PORT}`);
});
