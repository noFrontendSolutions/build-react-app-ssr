const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js", //[name] comes from entry points (vendors/vendor.js or index.tsx)
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    optimization: {             
        runtimeChunk: 'single'  //re-renders app if you save
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./template/index.html"), //The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
            scriptLoading: "defer",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: ['style-loader', 'css-loader', 'postcss-loader'], // The order of loaders in the array matters: postcss-loader runs first (postcss-loader is needed for tailwind (using the Tailwind jit-compiler to turn the Tailwind-classes into CSS... for more details see postcss.config.js and Tailwind documentation); then css-loader transpiles the CSS into JS; then style-loader inject the JS (interpretable as CSS) via <style>-tags into the DOM. 
            },                                                         
        ],
    },
})