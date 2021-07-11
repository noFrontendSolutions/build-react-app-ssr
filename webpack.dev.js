const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
})