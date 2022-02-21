const path = require("path")

// BUILD ONLY FILE

const htmlWebpackPluginBuildConfig = {
  filename: "index.[fullhash].html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

module.exports = {
  htmlWebpackPluginBuildConfig,
}
