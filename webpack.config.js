const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        base: {
            import: './src/base/index.js',
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {},
    devServer: {
        port: 8080,
        open: true
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('5fa3b9')
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ]
}