const path = require("path")

// COMMEN (SHARED)
const entry = {
  index: path.resolve(__dirname, "../../src/index.tsx"),
}

// BUILD ONLY
const outputBuild = {
  filename: "[name].[fullhash].js", //[name] comes from the entry point(s) of your application.
  path: path.resolve(__dirname, "../../dist"), // Directory name and relative path of your frontend bundle.
}

const htmlWebpackPluginBuildConfig = {
  filename: "index.[fullhash].html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

const miniCssPluginBuildConfig = { filename: "styles.[fullhash].css" }

//DEVELOPMENT ONLY
const outputDev = {
  filename: "[name].js", //[name] comes from entry points
  path: path.resolve(__dirname, "../../dist"),
}

const htmlWebpackPluginDevConfig = {
  filename: "index.html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

module.exports = {
  entry,
  outputDev,
  outputBuild,
  htmlWebpackPluginDevConfig,
  htmlWebpackPluginBuildConfig,
  miniCssPluginBuildConfig,
}

//The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
