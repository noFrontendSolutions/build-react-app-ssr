const path = require("path")
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: "production",
    target: 'node',
    externals: [nodeExternals()],
    entry: { 
        server: "./src_backend/server.ts",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist_backend")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",  //similar to "babel-loader" it transpiles TS files using Webpack. 
            }
        ],
    },
}
