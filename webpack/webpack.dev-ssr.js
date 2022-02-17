const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const NodemonPlugin = require("nodemon-webpack-plugin")

const clientConfig = {
  mode: "development",
  target: "web",
  entry: {
    index: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    filename: "[name].js", //[name] comes from the entry point(s) of your application.
    path: path.resolve(__dirname, "../dist"), // Directory name and relative path of your frontend bundle.
  },
  plugins: [
    //HtmlWebpackPlugin will generate an HTML5 file that injects all webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../template/index.html"),
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
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader", //The file-loader resolves import/require() on a file into a url and emits the file into the outputPath directory.
        options: {
          name: "[name].[fullhash].[ext]",
          outputPath: "../static-assets",
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../src"),
        use: ["style-loader", "css-loader", "postcss-loader"], // Once again, the order matters here: postcss-loader runs first (using the Tailwind jit-compiler to turn the Tailwind-classes into CSS); then css-loader transpiles the CSS into JS; then MiniCssExtractPlugin injects the JS (interpretable as CSS) into a seperate file... However, there one small problem: the css-file is not minified... That's were the CssMinimizerPlugin comes into play.
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css", "json"], //list of extension allowed for import without mentioning file extension
  },
}

const serverConfig = {
  mode: "development",
  externals: [nodeExternals()],
  target: "node",
  entry: {
    server: path.resolve(__dirname, "../src_backend/server.tsx"), // Here you can choose the entry file of your backend application.
    //vendor: { import: path.resolve(__dirname, "./vendors/vendor.js"), filename: './vendors/vendor.js' }
  },
  output: {
    filename: "[name].js", // [name] refers to "server" (from entry point) as the name for the output bundle.
    path: path.resolve(__dirname, "../dist"), // Directory name and relative path of your backend bundle.
  },
  plugins: [
    new NodemonPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!index.*", "!styles.*"],
    }),
  ],
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
  resolve: {
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

module.exports = [clientConfig, serverConfig]
