const path = require("path")

// DEVELOPMENT ONLY FILE

// CLIENT
const entryClient = {
  index: path.resolve(__dirname, "../../src/index.tsx"),
}

const outputClient = {
  filename: "[name].js", //[name] comes from the entry point(s) of your application.
  path: path.resolve(__dirname, "../../dist"), // Directory name and relative path of your frontend bundle.
}

const htmlWebpackPluginDev = {
  filename: "index.html",
  template: path.resolve(__dirname, "../../template/index.html"),
  scriptLoading: "defer",
}

//SERVER
const entryServer = {
  server: path.resolve(__dirname, "../../src-backend/server.tsx"),
}

const outputServer = {
  filename: "[name].js", // [name] refers to "server" (from entry point) as the name for the output bundle.
  path: path.resolve(__dirname, "../../dist"), // Directory name and relative path of your backend bundle.
}

module.exports = {
  entryClient,
  outputClient,
  htmlWebpackPluginDev,
  entryServer,
  outputServer,
}
