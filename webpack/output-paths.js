const path = require("path")

//**********ROOT OUTPUT PATHS OF BACKEND AND FRONTEND***********
const outputRootClient = "../dist"
const outputRootServer = "../dist"

const outputRootSsrClient = "../dist"
const outputRootSsrServer = "../dist"

//**************************************************************
//*****************WEBPACK CLIENT PATHS*************************
//**************************************************************

//***************DEVELOPMENT*****************************

const outputClientDev = {
  filename: "[name].js", //[name] comes from entry points
  path: path.resolve(__dirname, outputRootClient),
}

//******************BUILD CLIENT********************************

const outputClientBuild = {
  filename: "[name].[fullhash].js",
  path: path.resolve(__dirname, outputRootClient),
}

//**************************************************************
//*****************WEBPACK SERVER PATHS*************************
//**************************************************************

//****************DEV & BUILD****************************

const outputServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, outputRootServer),
}

//**************************************************************
//*****************WEBPACK SSR PATHS****************************
//**************************************************************

//****************SSR DEV***************************************

const outputSsrDevClient = {
  filename: "[name].js",
  path: path.resolve(__dirname, outputRootSsrClient),
}

const outputSsrDevServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, outputRootSsrServer),
}

//****************SSR BUILD**************************************

const outputSsrBuildClient = {
  filename: "[name].[fullhash].js",
  path: path.resolve(__dirname, outputRootSsrClient),
}

const outputSsrBuildServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, outputRootSsrServer),
}

module.exports = {
  outputClientDev,
  outputClientBuild,
  outputServer,
  outputSsrDevClient,
  outputSsrDevServer,
  outputSsrBuildClient,
  outputSsrBuildServer,
  outputRootClient,
  outputRootSsrClient,
  outputRootSsrServer,
  outputRootServer,
}
