var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var url = 'http://localhost:8888/kemi/';
var port = 8892;
var host = 'localhost';

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: ['./js/scripts.js', './scss/styles.scss'],
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  module: {
    rules: [
      { // js loader for webpack
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader']),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ],
  },
  plugins: debug ? [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'app.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      host: host,
      port: port,
      proxy: url
    }),
  ] : [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'app.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      host: host,
      port: port,
      proxy: url
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],


};
