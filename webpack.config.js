var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'js', 'script.js'),
	output: {
		path: path.join(__dirname, 'public', 'js'),
		filename: 'app.bundle.js'
	},
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html'
    })
  ]
}
