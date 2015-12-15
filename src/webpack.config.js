var webpack = require('webpack');
var path = require('path');

var config = {
	context: __dirname,
	entry: {
		bundle: ['./{{dashCase name}}.js', './demo/demo.js']
	},
	output: {
		path: path.join(__dirname, '/demo'),
		filename: '[name].js',
	},
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'raw',
			exclude: [/node_modules/]
		},
		{
			test: /\.css$/,
			loaders: ['style', 'css'],
			exclude: [/node_modules/]
		}]
	}
}

module.exports = config;	
