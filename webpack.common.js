const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: { 
        index: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[contenthash].[ext]',
                }
            }
        ],
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
}