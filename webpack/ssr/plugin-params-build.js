const path = require("path")

// BUILD ONLY FILE

const htmlWebpackPluginBuildConfig = {
  filename: "index.[fullhash].html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

const miniCssPluginConfig = { filename: "styles.[fullhash].css" }

module.exports = {
  htmlWebpackPluginBuildConfig,
  miniCssPluginConfig,
}
