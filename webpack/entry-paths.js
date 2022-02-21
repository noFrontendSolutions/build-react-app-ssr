const path = require("path")

//***************ENTRY CLIENT**********************************
const entryClient = {
  index: path.resolve(__dirname, "../src/index.tsx"),
}

//************ENTRY SERVER**************************************
const entryServer = {
  server: path.resolve(__dirname, "../src-backend/server.tsx"),
}

//************ENTRY SSR*****************************************
const entrySsrClient = {
  index: path.resolve(__dirname, "../src/index.tsx"),
}

const entrySsrServer = {
  server: path.resolve(__dirname, "../src-backend/server.tsx"),
}

module.exports = {
  entrySsrClient,
  entrySsrServer,
  entryClient,
  entryServer,
}
