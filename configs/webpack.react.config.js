const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        base: {
            import: path.resolve(__dirname, '../src/react/index.jsx'),
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist/react'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", 
                            ["@babel/preset-react", { runtime: "automatic" }]
                        ],
                    }
                }
            }
        ]
    },
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