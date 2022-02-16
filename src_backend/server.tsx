import { Request, Response } from "express"
import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"
import "dotenv/config"
import connectToAirbnb from "./database/mongo-connect-airbnb"
import path from "path"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import ServerRouter from "../src/routers/ServerRouter"
import { IState } from "../src/App"
import { findResults as findNYResults } from "./database/mongo-connect-airbnb"

const mongoUrl: string = process.env.MONGO_URI || ""
const port: number | string = process.env.PORT || 3000

const htmlFiles: string[] = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".html"))
const indexHtml: string = htmlFiles.filter((file) =>
  file.startsWith("index.")
)[0]

const app = express()
app.use(express.json())
app.use(cors())

app.get("/airbnb", async (req: Request, res: Response) => {
  const mongoClient = new MongoClient(mongoUrl)
  const airbnbCollection = await connectToAirbnb(mongoClient)
  const initialLoad = await findNYResults("Manhattan", airbnbCollection)
  res.send(initialLoad)
})

app.get("/", async (req: Request, res: Response) => {
  const url: string = req.url

  res.sendFile(path.resolve(__dirname, indexHtml))
})

app.use(express.static(__dirname))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

const replaceStaticHtml = (url: string, state: IState[]) => {
  ReactDOMServer.renderToStaticMarkup(<ServerRouter url={url} state={state} />)
}

const readHtml = (file: string) => {
  return fs.readFileSync(path.resolve(__dirname, file))
}
