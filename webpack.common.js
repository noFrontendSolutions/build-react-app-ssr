const path = require("path")

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "./src/index.js"),
        vendor: path.resolve(__dirname, "./vendors/vendor.js")
    },
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
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[contenthash].[ext]',
                }
            }
        ],
    },
    resolve: {
        modules: ["node_modules"], //list of your module folders
        extensions: [".js", ".jsx", ".tsx", ".ts"], //list of extension allowed for import without mentioning file extension  
    },
}