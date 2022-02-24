import express from "express"
import fs from "fs"
import path from "path"
import { outputRootSsrClient } from "../../../webpack/output-paths.js"

const port = process.env.PORT || 3000

const app = express()
let indexHtml: any

// Since the index-html file is hashed (inside dist/client), I have to find it first before I'm able to serve it. I'm sure there is a more elegant solution to this problem.
const htmlFileNames: string[] = fs
  .readdirSync(path.resolve(__dirname, `../../../dist/ssr/client`))
  .filter((file) => file.endsWith(".html"))
const indexHtmlName: string = htmlFileNames.filter((file) =>
  file.startsWith("index.")
)[0]
indexHtml = fs.readFileSync(
  path.resolve(__dirname, `../../../dist/ssr/client/${indexHtmlName}`),
  "utf8"
)

app.use(express.json())

app.use(express.static(path.resolve(__dirname, "../../../dist/ssr/client")))

app.get("/", (req, res) => {
  res.send(indexHtml)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
