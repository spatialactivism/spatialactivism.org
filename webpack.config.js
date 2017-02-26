const path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

const config = {
  entry: './site/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader?outputStyle=expanded'
        ]
			}	
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: './site/index.html'
    })
	]	
};

module.exports = config;


