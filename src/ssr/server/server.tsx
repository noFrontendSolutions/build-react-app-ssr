import express from "express"
import fs from "fs"
import path from "path"
import { outputRootSsrClient } from "../../../webpack/output-paths.js"
import ReactDOMServer from "react-dom/server"
import ServerRouter from "../client/routers/ServerRouter"

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(
  express.static(path.resolve(__dirname, `../../../${outputRootSsrClient}`))
)

app.get("/", async (req, res) => {
  const indexHtml = getIndexHtmlFile()

  const url: string = req.url
  const initialState = createRandomIntegerNotZero(20)
  const jsx = ReactDOMServer.renderToString(
    <ServerRouter url={url} initialState={initialState} />
  )
  const hydratedHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${jsx}</div>
  <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`
  )
  res.send(hydratedHtml)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})

//
//
//
// Since the index-html file is hashed (inside dist/client), I have to find it first before I'm able to serve it. I'm sure there is a more elegant solution to this problem. However...
function getIndexHtmlFile() {
  const htmlFileNames: string[] = fs
    .readdirSync(path.resolve(__dirname, `../../../${outputRootSsrClient}`))
    .filter((file) => file.endsWith(".html"))
  const indexHtmlName: string = htmlFileNames.filter((file) =>
    file.startsWith("index.")
  )[0]
  const indexHtml = fs.readFileSync(
    path.resolve(__dirname, `../../../${outputRootSsrClient}/${indexHtmlName}`),
    "utf8"
  )
  return indexHtml
}

function createRandomIntegerNotZero(max: number) {
  let randomNumber = 0
  while (randomNumber == 0) {
    let tempNumber = Math.random()
    if (tempNumber < 0.5) {
      randomNumber = -Math.floor(tempNumber * max)
    } else {
      randomNumber = Math.floor(tempNumber * max)
    }
  }
  return randomNumber
}
