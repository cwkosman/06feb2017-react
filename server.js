const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const webpackDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});

const server = webpackDevServer.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Running at http://0.0.0.0:%s', server.address().port);
});
