const path = require("path")

// BUILD ONLY PLUGINS

const htmlWebpackPluginBuildConfig = {
  filename: "index.[fullhash].html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

const miniCssPluginBuildConfig = { filename: "styles.[fullhash].css" }

//DEVELOPMENT ONLY PLUGINS

const htmlWebpackPluginDevConfig = {
  filename: "index.html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

module.exports = {
  htmlWebpackPluginDevConfig,
  htmlWebpackPluginBuildConfig,
  miniCssPluginBuildConfig,
}
