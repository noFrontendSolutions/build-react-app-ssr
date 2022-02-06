const path = require("path")

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "./src/index.tsx"),
        vendor: path.resolve(__dirname, "./vendors/vendor.js")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader", //This package allows transpiling JavaScript (and JSX) files using Babel and webpack.
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",  //similar to "babel-loader" it transpiles TS files using Webpack. 
            },
            {
                test: /\.html$/, //html-loader is required for file-loader and handles every encountered "src"-attribute.
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',  //The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
                options: {
                    name: './images/[name].[contenthash].[ext]',
                }
            }
        ],
    },
    resolve: {
        modules: ["node_modules"], //list of module folders
        extensions: [".js", ".jsx", ".tsx", ".ts", ".css"], //list of extension allowed for import without mentioning file extension  
    },
}