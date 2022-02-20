const common = require("./webpack.common-client.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const devClientConfig = (output, htmlWebpackPluginConfig) => {
  return merge(common, {
    mode: "development",
    output: output,
    optimization: {
      runtimeChunk: "single", //re-renders app if you save
    },
    //HtmlWebpackPlugin will generate an HTML5 file that injects all webpack bundles in the body using script tags.
    plugins: [new HtmlWebpackPlugin(htmlWebpackPluginConfig)],
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
  require("./client-params").outputDev,
  require("./client-params").htmlWebpackPluginDevConfig
)
