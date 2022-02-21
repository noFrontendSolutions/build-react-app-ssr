const path = require("path")

// DEVELOPMENT ONLY FILE

const htmlWebpackPluginDevConfig = {
  filename: "index.html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

// If using more than one entry, you can specify which output file will be restarted and what to watch (see npm documentation).
const nodemonPluginConfig = {}

module.exports = {
  htmlWebpackPluginDevConfig,
  nodemonPluginConfig,
}
