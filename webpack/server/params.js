const path = require("path")

//COMMON (SHARED)
const entry = {
  server: path.resolve(__dirname, "../../src-backend/server.tsx"), // Here you can choose the entry file of your backend application.
}

const output = {
  filename: "[name].js", // [name] refers to the entry point as the name for the output bundle.
  path: path.resolve(__dirname, "../../dist"), // Directory name and relative path of your backend bundle.
}

const nodemonPluginConfig = {}

module.exports = { entry, output, nodemonPluginConfig }
