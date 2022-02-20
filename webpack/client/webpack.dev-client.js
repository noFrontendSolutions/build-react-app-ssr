const common = require("./webpack.common-client.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const devClientConfig = (output, htmlWebpackPlugin) => {
  return merge(common, {
    mode: "development",
    output: output,
    optimization: {
      runtimeChunk: "single", //re-renders app if you save
    },
    plugins: [new HtmlWebpackPlugin(htmlWebpackPlugin)],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"], // The order of loaders in the array matters: postcss-loader runs first (postcss-loader is needed for tailwind (using the Tailwind jit-compiler to turn the Tailwind-classes into CSS... for more details see postcss.config.js and Tailwind documentation); then css-loader transpiles the CSS into JS; then style-loader inject the JS (interpretable as CSS) via <style>-tags into the DOM.
        },
      ],
    },
  })
}

module.exports = devClientConfig(
  require("../client.config").outputDev,
  require("../client.config").htmlWebpackPluginDev
)
