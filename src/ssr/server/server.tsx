import express from "express"
import fs from "fs"
import path from "path"
import {
  outputRootSsrClient,
  outputRootSsrServer,
} from "../../../webpack/output-paths.js"
import ReactDOMServer from "react-dom/server"
import ServerRouter from "../client/routers/ServerRouter"

const port = process.env.PORT || 8082

const main = async () => {
  let indexHtml: string
  if (process.env.NODE_ENV === "development") {
    await sleepTillBuildIsFinished(outputRootSsrClient)
    indexHtml = fs.readFileSync(
      path.resolve(__dirname, `../../../${outputRootSsrClient}/index.html`),
      "utf8"
    )
  } else {
    indexHtml = getIndexHtmlFile()
  }

  const app = express()

  app.use(express.json())

  if (process.env.NODE_ENV === "development") {
    app.use(
      express.static(path.resolve(__dirname, `../../../${outputRootSsrServer}`))
    )
  } else {
    app.use(
      express.static(path.resolve(__dirname, `../../../${outputRootSsrClient}`))
    )
  }

  app.get("/", (req, res) => {
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
}

main()

//
//***********************************************************
//***************HELPER FUNCTIONS BELOW**********************
//***********************************************************

// sleepTillBuildIsFiniched is a little helper funtion that denys webpack to start the dev-server before client-bundling is finished. Keep it and plug in the path to your temporary folder if you've changed the default ("./dist/ssr/client"). Or let me know if you find a less hacky solution to the problem.
async function sleepTillBuildIsFinished(folder: string) {
  while (
    !fs.existsSync(path.resolve(__dirname, `../../../${folder}/index.html`))
  ) {
    await sleep(500)
  }
}

// Since the index-html file's name is radomly hashed (sittin inside dist/client), I have to find it first before I'm able to serve it.
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

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
