
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/expand-hex-code.js',
  output: {
    filename: 'expand-hex-code.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '..', 'src')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '..', 'src')],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV,
    }),
  ],
};
