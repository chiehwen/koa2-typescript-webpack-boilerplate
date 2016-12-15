//webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  
  entry: './src/server.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [
      // All files with a '.ts' extension will be handled
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { exclude: path.resolve(__dirname, "node_modules") }
    ]
  },
  devtool: "source-map",
  resolve: {
    // Add '.js' and 'ts' as resolvable extensions.
    extensions: [ '*','.js', '.ts' ]
  }
};
