import express from "express"
import fs from "fs"
import path from "path"

const port = process.env.PORT || 3000

const app = express()

// Since the index-html file is hashed (inside dist/client), I have to find it first before I'm able to serve.
const htmlFileNames: string[] = fs
  .readdirSync(path.resolve(__dirname, "../../dist/client"))
  .filter((file) => file.endsWith(".html"))
const indexHtmlName: string = htmlFileNames.filter((file) =>
  file.startsWith("index.")
)[0]
const indexHtml: string = fs.readFileSync(
  path.resolve(__dirname, `../../dist/client/${indexHtmlName}`),
  "utf8"
)

app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../../dist/client")))

app.get("/", (req, res) => {
  res.send(indexHtml)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
