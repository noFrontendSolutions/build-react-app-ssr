const path = require("path")
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: "production",
    target: 'node',
    externals: [nodeExternals()], // nodeExternals is required if you intend to bundle code that includes Express functions. (without it you'll end up with warnings and a file that runs, but is enourmas in size.)
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
                loader: "ts-loader", 
            }
        ],
    },
}
