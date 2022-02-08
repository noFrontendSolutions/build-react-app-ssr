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
                use: ['style-loader', 'css-loader', 'postcss-loader'], //the order of loader in array matters!!! (postcss-loader is needed for tailwind (for details see postcss.config.js)) 
            },        // Style-loader inject the CSS into the DOM.  
                      // The css-loader interprets @import and url() like import/require() and will resolve them. PLUSS you are able to use ES modules syntax; i.e.: using the  esm-import statement to import css into your React components.                                                 
        ],
    },
})