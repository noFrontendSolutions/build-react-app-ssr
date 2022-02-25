import express from "express"
import fs from "fs"
import path from "path"
import {
  tempFolderSsrClient,
  tempFolderSsrServer,
} from "../../../webpack/output-paths.js"
import ReactDOMServer from "react-dom/server"
import ServerRouter from "../client/routers/ServerRouter"

const port = process.env.PORT || 3000

const main = async () => {
  // sleepTillBuildIsFiniched is a little helper funtion that denys webpack to start the dev-server before client-bundling is finished. Keep it and plug in the path to your temporary folder if you've changed the default ("./temp/ssr/client").
  await sleepTillBuildIsFinished(tempFolderSsrClient)
  //********************************************************************************************************************************************

  const app = express()

  app.use(express.json())

  app.use(
    express.static(path.resolve(__dirname, `../../../${tempFolderSsrServer}`))
  )

  app.get("/", async (req, res) => {
    const indexHtml = fs.readFileSync(
      path.resolve(__dirname, `../../../${tempFolderSsrClient}/index.html`),
      "utf8"
    )
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
//
//
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

async function sleepTillBuildIsFinished(folder: string) {
  while (
    !fs.existsSync(path.resolve(__dirname, `../../../${folder}/index.html`))
  ) {
    await sleep(500)
  }
}
