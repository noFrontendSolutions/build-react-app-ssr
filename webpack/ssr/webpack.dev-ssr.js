const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const NodemonPlugin = require("nodemon-webpack-plugin")
//const { outputRootSsrClient } = require("../output-paths")

const clientConfigDev = (entry, output) => {
  return {
    mode: "development",
    target: "web",
    entry: entry,
    output: output,
    plugins: [
      //HtmlWebpackPlugin will generate an HTML5 file that injects all webpack bundles in the body using script tags.
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../../template/index.html"),
        scriptLoading: "defer",
      }),
      //CleanWebpackPlugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["**/*", "!server.*"],
      }),
    ],
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
          test: /\.(jpe?g|png|gif|svg)$/, // // this replaces file-loader, raw-loader & and url-loader (new Webpack 5.0 feature to import images and such)
          type: "asset",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"], // Once again, the order matters here: postcss-loader runs first (using the Tailwind jit-compiler to turn the Tailwind-classes into CSS); then css-loader transpiles the CSS into JS; then MiniCssExtractPlugin injects the JS (interpretable as CSS) into a seperate file... However, there one small problem: the css-file is not minified... That's were the CssMinimizerPlugin comes into play.
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".css"], //list of extension allowed for import without mentioning file extension
    },
  }
}

const serverConfigDev = (entry, output) => {
  return {
    mode: "development",
    externals: [nodeExternals()],
    target: "node",
    entry: entry,
    output: output,
    plugins: [
      new NodemonPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["**/*", "!client", "!server"],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader", //This loader allows transpiling JavaScript (and JSX) files using Babel compiler core.
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader", //similar to "babel-loader" it transpiles TS files using the Babel compiler core.
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", "css"], //list of extension allowed for import without mentioning file extension
      // plugins: [
      //   new TsconfigPathsPlugin({
      //     configFile: path.resolve(__dirname, "../../src/ssr/tsconfig.json"),
      //     baseUrl: "./",
      //   }),
      // ],
    },
  }
}

module.exports = [
  clientConfigDev(
    require("../entry-paths").entrySsrClient,
    require("../output-paths").outputSsrDevClient
  ),
  serverConfigDev(
    require("../entry-paths").entrySsrServer,
    require("../output-paths").outputSsrDevServer
  ),
]
