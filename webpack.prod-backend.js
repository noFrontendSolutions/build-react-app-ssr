const path = require("path")
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    target: 'node',
    entry: { 
        server: path.resolve(__dirname, "./src_backend/server.ts"), // Here you can choose the entry file of your backend application.
        //vendor: { import: path.resolve(__dirname, "./vendors/vendor.js"), filename: './vendors/vendor.js' }
    },
    output: {
        filename: "[name].[contenhash].js", // [name] refers to "server" (from entry point) as the name for the output bundle.
        path: path.resolve(__dirname, "dist_backend") // Directory name and relative path of your backend bundle.
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader", 
            }
        ],
    },
    plugins: [
        //CleanWebpackPlugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
        new CleanWebpackPlugin(),
      ],
    externals: [nodeExternals()], // nodeExternals is required if you intend to bundle code that includes Express functions. (without it you'll end up with warnings and a file that runs, but is enourmas in size.)
}
