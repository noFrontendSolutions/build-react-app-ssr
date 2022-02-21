const path = require("path")

//**********ROOT PATHS OF BACKEND AND FRONTEND*****************
const entryRootClient = "../src"
const entryRootServer = "../src-backend"

const entryRootSsrClient = "../src"
const entryRootSsrServer = "../src-backend"

//*************************************************************
//***********************WEBPACK ENTRY PATHS*******************
//*************************************************************

//***************ENTRY CLIENT**********************************
const entryClient = {
  index: path.resolve(__dirname, `${entryRootClient}/index.tsx`),
}

//************ENTRY SERVER**************************************
const entryServer = {
  server: path.resolve(__dirname, `${entryRootServer}/server.tsx`),
}

//************ENTRY SSR*****************************************
const entrySsrClient = {
  index: path.resolve(__dirname, `${entryRootSsrClient}/index.tsx`),
}

const entrySsrServer = {
  server: path.resolve(__dirname, `${entryRootSsrServer}/server.tsx`),
}

module.exports = {
  entrySsrClient,
  entrySsrServer,
  entryClient,
  entryServer,
}
