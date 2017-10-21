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
  plugins: [
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'src/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),

      // expose the environment to the front end
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
  ]
}
