const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};