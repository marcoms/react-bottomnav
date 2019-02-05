import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},

	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			},

			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
};

export default config;
