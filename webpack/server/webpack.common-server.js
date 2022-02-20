const path = require("path")
const nodeExternals = require("webpack-node-externals")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const commonServerConfig = (entryDetails, outputDetails) => {
  return {
    target: "node",
    entry: entryDetails,
    output: outputDetails,
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
    externals: [nodeExternals()], // nodeExternals is required if you intend to bundle code that includes Express functions. (without it you'll end up with warnings and a file that runs, but is enourmas in size.)
    resolve: {
      modules: ["node_modules"],
      extensions: [".js", ".jsx", ".tsx", ".ts", "json", "css"], //list of extension allowed for import without mentioning file extension
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../../tsconfig-server.json"),
          extensions: ["ts", "tsx", "jsx", "js"],
          baseUrl: "./",
        }),
      ],
    },
  }
}

module.exports = commonServerConfig(
  require("../server.config").entry,
  require("../server.config").output
)
