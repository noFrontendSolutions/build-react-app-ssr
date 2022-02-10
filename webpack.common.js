const path = require("path")

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "./src/index.tsx"), // here you can choose the entry file of your frontend bundle 
        //vendor: { import: path.resolve(__dirname, "./vendors/vendor.js"), filename: './vendors/vendor.js' }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader", //This package allows transpiling JavaScript (and JSX) files using Babel compiler core. 
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",  //similar to "babel-loader" it transpiles TS files using the Babel compiler core. 
            },
            {
                test: /\.html$/, //html-loader is required for file-loader (necessary for static assets like pdf and svg files) and handles every encountered "src"-attribute.
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',  //The file-loader resolves import/require() on a file into a url and emits the file into the outputPath directory. 
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: "static-assets"
                }
            }
        ],
    },
    resolve: {
        modules: ["node_modules"], 
        extensions: [".js", ".jsx", ".tsx", ".ts", ".css"], //list of extension allowed for import without mentioning file extension  
    },
}