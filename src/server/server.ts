import express from "express"
import fs from "fs"
import path from "path"
import { outputRootClient } from "../../webpack/output-paths"

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, `../../${outputRootClient}`)))

app.get("/", (req, res) => {
  const indexHtml = getIndexHtmlFile()
  res.send(indexHtml)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})

//
//
//
// Since the index-html file is hashed (inside dist/client), I have to find it first before I'm able to serve...
function getIndexHtmlFile() {
  const htmlFileNames: string[] = fs
    .readdirSync(path.resolve(__dirname, `../../${outputRootClient}`))
    .filter((file) => file.endsWith(".html"))
  const indexHtmlName: string = htmlFileNames.filter((file) =>
    file.startsWith("index.")
  )[0]
  const indexHtml = fs.readFileSync(
    path.resolve(__dirname, `../../${outputRootClient}/${indexHtmlName}`),
    "utf8"
  )
  return indexHtml
}
