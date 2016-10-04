var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['./javascript/index.js']
    },
    output: {
        path: './public/dist',
        publicPath: '/public/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer]
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist'])
    ],
    devtool: 'source-map'
};
