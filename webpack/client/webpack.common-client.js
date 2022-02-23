const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const path = require("path")

const clientBuildConfig = (entry) => {
  return {
    entry: entry,
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          loader: "babel-loader", //This package allows transpiling JavaScript (and JSX) files using Babel compiler core. (The presets are configured in .babelrc)
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader", //similar to "babel-loader" it transpiles TS files using the Babel compiler core. (The presets are configured in .babelrc)
        },
        {
          test: /\.html$/, //html-loader is required for file-loader (necessary for static assets like pdf and svg files) and handles every encountered "src"-attribute.
          loader: "html-loader",
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/, // this replaces file-loader, raw-loader & and url-loader (new Webpack 5.0 feature to import images and such)
          type: "asset",
        },
      ],
    },
    resolve: {
      modules: ["node_modules"],
      extensions: [".js", ".jsx", ".tsx", ".ts", ".css"], //list of extension allowed for import without mentioning file extension
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../../src/client/tsconfig.json"),
          extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
      ],
    },
  }
}

module.exports = clientBuildConfig(require("../entry-paths").entryClient)
