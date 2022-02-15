//const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const commonServerConfig = require("./webpack.common-server.js")
const { merge } = require("webpack-merge")

module.exports = merge(commonServerConfig, {
  mode: "production",
})
