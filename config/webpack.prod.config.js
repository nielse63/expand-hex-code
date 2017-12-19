
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev.config');

module.exports = merge(baseConfig, {
  output: {
    filename: 'expand-hex-code.min.js',
  },
  devtool: false,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
});
