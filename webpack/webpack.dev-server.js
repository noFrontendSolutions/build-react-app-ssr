const path = require("path")
const nodeExternals = require("webpack-node-externals")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const NodemonPlugin = require("nodemon-webpack-plugin")

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    server: path.resolve(__dirname, "../src_backend/server.ts"), // Here you can choose the entry file of your backend application.
    //vendor: { import: path.resolve(__dirname, "./vendors/vendor.js"), filename: './vendors/vendor.js' }
  },
  output: {
    filename: "[name].js", // [name] refers to "server" (from entry point) as the name for the output bundle.
    path: path.resolve(__dirname, "../dist"), // Directory name and relative path of your backend bundle.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader", //This package allows transpiling JavaScript (and JSX) files using Babel compiler core.
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader", //similar to "babel-loader" it transpiles TS files using the Babel compiler core.
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  externals: [nodeExternals()], // nodeExternals is required if you intend to bundle code that includes Express functions. (without it you'll end up with warnings and a file that runs, but is enourmas in size.)
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts", "json", "css"], //list of extension allowed for import without mentioning file extension
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig-server.json"),
        extensions: ["ts", "tsx", "jsx", "js", "json"],
        baseUrl: "./",
      }),
    ],
  },
}
