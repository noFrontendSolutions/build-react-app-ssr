const path = require("path")

// BUILD ONLY FILE

// CLIENT
const clientEntry = {
  index: path.resolve(__dirname, "../src/index.tsx"),
}

const outputClient = {
  filename: "[name].[fullhash].js", //[name] refers to the entry point(s) of your application.
  path: path.resolve(__dirname, "../dist"), // Directory name and relative path of your frontend bundle.
}

const htmlWebpackPlugin = {
  filename: "index.[fullhash].html",
  template: path.resolve(__dirname, "../template/index.html"),
  scriptLoading: "defer",
}

// SERVER

const entryServer = {
  server: path.resolve(__dirname, "../src-backend/server.tsx"),
}

const outputServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, "../dist"),
}

module.exports = {
  clientEntry,
  outputClient,
  htmlWebpackPlugin,
  entryServer,
  outputServer,
}
