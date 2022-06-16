const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js',
        // clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
};