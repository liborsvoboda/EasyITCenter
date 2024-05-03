const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["./src/styles.community.js", "./src/easyreport.community.ts"],
    stats: {warnings:false},
	devtool: "source-map",
    output: {
        library: 'easyreport',
        path: path.resolve(__dirname, '../ERS.WebApp.Community/wwwroot/js'),
        filename: "easyreport.js"
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
                options: {
                    url: false
				}
			}
        ]
    },
	watchOptions: {
		aggregateTimeout: 2000
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: ['es6-promise', 'Promise']
        })
    ]
};