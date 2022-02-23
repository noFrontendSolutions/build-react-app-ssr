const fs = require("fs")
const path = require("path")
const outputRootSsrClient =
  require("../webpack/output-paths.js").outputRootSsrClient

// This file is required for the following node script: "npm run dev-ssr."; i.e. running in SSR-development mode. It creates a temporary html-file for the development server to serve.
// This file is required because if in case the webpack server-side compilation runs faster than the client-side compilation, nodemon-webpack-plugin will start the server in watch-mode and the server will then require the "index.html" file, which hasn't finished compiling yet. Plus there could be an older version of the file lying in the folder, in which case this file would be servered, which we neither want... So if an old "index.html" exists, it has to be removed, and if it doesn't, a temporary file has to be created.
// This solution may look like a hack, but since it is not possible to run another node script once nodemon is in watch-mode, this here is the most elegant solution I can think off to bridge the problem.

if (fs.existsSync(path.resolve(__dirname, outputRootSsrClient))) {
  fs.rmSync(path.resolve(__dirname, outputRootSsrClient), {
    recursive: true,
  })
  fs.mkdirSync(path.resolve(__dirname, outputRootSsrClient), {
    recursive: true,
  })
} else {
  fs.mkdirSync(path.resolve(__dirname, outputRootSsrClient), {
    recursive: true,
  })
}

const tempHtml = fs.readFileSync(path.resolve(__dirname, "./temp.html"))

fs.writeFileSync(
  path.resolve(
    __dirname,
    path.resolve(__dirname, `${outputRootSsrClient}/index.html`)
  ),
  tempHtml
)
