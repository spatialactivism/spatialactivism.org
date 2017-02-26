const path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

const config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ],
      }
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: './index.html'
    })
	]	
};

module.exports = config;


