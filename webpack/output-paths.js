const path = require("path")

//**************************************************************
//*****************CLIENT PATHS*********************************
//**************************************************************

//***************DEVELOPMENT CLIENT*****************************
const outputClientDev = {
  filename: "[name].js", //[name] comes from entry points
  path: path.resolve(__dirname, "../dist"),
}

//******************BUILD CLIENT********************************
const outputClientBuild = {
  filename: "[name].[fullhash].js",
  path: path.resolve(__dirname, "../dist"),
}

//**************************************************************
//*****************SERVER PATHS*********************************
//**************************************************************

//****************SERVER DEV & BUILD****************************
const outputServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, "../dist"),
}

//**************************************************************
//*****************SSR PATHS************************************
//**************************************************************

//****************SSR DEV***************************************
const outputSsrDevClient = {
  filename: "[name].js",
  path: path.resolve(__dirname, "../dist"),
}

const outputSsrDevServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, "../dist"),
}

//****************SSR BUILD**************************************

const outputSsrBuildClient = {
  filename: "[name].[fullhash].js",
  path: path.resolve(__dirname, "../dist"),
}

const outputSsrBuildServer = {
  filename: "[name].js",
  path: path.resolve(__dirname, "../dist"),
}

module.exports = {
  outputClientDev,
  outputClientBuild,
  outputServer,
  outputSsrDevClient,
  outputSsrDevServer,
  outputSsrBuildClient,
  outputSsrBuildServer,
}
