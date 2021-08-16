const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        //HtmlWebpackPlugin will generate an HTML5 file that includes all webpack bundles in the body using script tags. 
        new HtmlWebpackPlugin({
            filename: 'index.[hash].html',
            template: path.resolve(__dirname, "./src/index.html"),
            scriptLoading: "defer", 
        }),
        //MiniCssExtractPlugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
        new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }), 
        //CleanWebpackPlugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
        new CleanWebpackPlugin(), 
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
})