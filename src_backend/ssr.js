import express from "express"
import cors from "cors"
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { MongoClient } from "mongodb"
//import React from "react"
import ReactDOMServer from "react-dom/server"
//import mongoConnectAirbnb from "./database/mongo-connect-airbnb"
import "dotenv/config"
//import { HashRouter, Routes, Route } from "react-router-dom"
//import { App } from "../src/App"
//import { Movies } from "../src/Movies"
//import Listing from "../src/components/Listing"
import path from "path"
import fs from "fs"
//import { Request, Response } from "express"
//import * as mongoDB from "mongodb"

const url = process.env.MONGO_URI || ""
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION || ""

const initialConnectionAirbnb = async (client) => {
  await client.connect()
  const db = client.db(dbName)
  const collection = db.collection(dbCollection)
  const results = await collection
    //passes back the first ten results of adresses that are located in Manhatten, with "picture_url" and "summary" not empty strings
    .find({
      "address.suburb": "Manhattan",
      "images.picture_url": { $ne: "" },
      summary: { $ne: "" },
    })
    .limit(10)
    .toArray()
  return results
}

app.get("/airbnb", async (req, res) => {
  const client = new MongoClient(url)
  try {
    const initialLoad = await initialConnectionAirbnb(client)
    await client.close()
    res.send(initialLoad)
  } catch (err) {
    console.log(err)
  }
})

const htmlFileName = fs
  .readdirSync(__dirname)
  .filter((fn) => fn.endsWith(".html"))[0]

app.get("/", async (req, res) => {
  const client = new MongoClient(url)
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["Airbnb", initialConnectionAirbnb(client)])
  const dehydratedState = dehydrate(queryClient)

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/airbnb/:id" element={<Listing />} />
          </Routes>
        </HashRouter>
      </Hydrate>
    </QueryClientProvider>
  )
  await client.close()
  const indexFile = path.resolve(__dirname, htmlFileName)
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err)
      return res.status(500).send("Oops, better luck next time!")
    }

    return res.send(
      data.replace(
        '<div id="root"></div><script></script>',
        `<div id="root">${html}</div><script>window.__INITIAL_STATE__ = ${JSON.stringify(
          dehydratedState
        )};</script>`
      )
    )
  })
})

app.use(express.static(__dirname))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
