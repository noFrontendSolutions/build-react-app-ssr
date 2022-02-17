import { Request, Response } from "express"
import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"
import "dotenv/config"
import path from "path"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import ServerRouter from "../src/routers/ServerRouter"
import {
  AirbnbDocument,
  findResults,
  NYborough,
} from "./database/mongo-connect-airbnb"
import { connectToAirbnb } from "./database/mongo-connect-airbnb"
import { getInitialLoadFromAirbnb } from "./database/mongo-connect-airbnb"

const mongoUrl: string = process.env.MONGO_URI || ""

const port: number | string = process.env.PORT || 3000
const mongoClient = new MongoClient(mongoUrl)

const main = async () => {
  const htmlFileNames: string[] = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"))
  const indexHtmlName: string = htmlFileNames.filter((file) =>
    file.startsWith("index.")
  )[0]

  const indexHtml: string = fs.readFileSync(
    path.resolve(__dirname, indexHtmlName),
    "utf8"
  )

  const initialState = (await getInitialLoadFromAirbnb(
    mongoClient,
    "Manhattan"
  )) as unknown as AirbnbDocument[]

  const app = express()
  app.use(express.json())
  app.use(cors())

  app.get("/airbnb/:borough", async (req: Request, res: Response) => {
    const airbnbCollection = await connectToAirbnb(mongoClient)
    const borough = firstLettersToUpperCase(req.params.borough) as NYborough
    try {
      const results = await findResults(borough, airbnbCollection)
      res.send(results)
    } catch (err) {
      res.send({ error: err })
    }
  })

  app.get("/", async (req: Request, res: Response) => {
    const url: string = req.url
    const jsx = ReactDOMServer.renderToString(
      <ServerRouter url={url} state={initialState} />
    )
    const hydratedHtml = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${jsx}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`
    )

    res.send(hydratedHtml)
  })

  app.use(express.static(__dirname))

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

main()

const firstLettersToUpperCase = (str: string) => {
  return str
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}
