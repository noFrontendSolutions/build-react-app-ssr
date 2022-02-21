const path = require("path")

// DEVELOPMENT ONLY FILE

const htmlWebpackPluginDevConfig = {
  filename: "index.html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

const nodemonPluginConfig = {}

module.exports = {
  htmlWebpackPluginDevConfig,
  nodemonPluginConfig,
}
