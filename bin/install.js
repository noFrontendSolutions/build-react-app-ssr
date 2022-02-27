#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const appDirName = process.argv[2] || "my-react-app-ssr"
const folderList = ["src", "static-assets", "template", "webpack"]
const fileList = [
  ".babelrc",
  ".gitignore",
  "image-types.d.ts",
  "postcss.config.js",
  "tailwind.config.js",
]

fs.mkdirSync(`${process.cwd()}/${appDirName}`)

fs.copyFileSync(
  path.resolve(__dirname, "./blank-configs/package.user.json"),
  `${process.cwd()}/${appDirName}/package.json`
)

fs.copyFileSync(
  path.resolve(__dirname, "./blank-configs/tsconfig.user.json"),
  `${process.cwd()}/${appDirName}/tsconfig.json`
)

copySelectedFolders(folderList)
copySelectedFiles(fileList)

execSync("npm install", {
  cwd: `${process.cwd()}/${appDirName}`,
  stdio: [0, 1, 2],
})

//*********************************************************************
//*********************************************************************
//*********************************************************************

function copySelectedFiles(arr) {
  arr.forEach((file) => {
    let srcFile = path.resolve(__dirname, `../${file}`)
    let destFile = `${process.cwd()}/${appDirName}/${file}`
    fs.copyFileSync(srcFile, destFile)
  })
}

function copySelectedFolders(arr) {
  arr.forEach((folder) => {
    let srcDir = path.resolve(__dirname, `../${folder}`)
    let destDir = `${process.cwd()}/${appDirName}/${folder}`
    copyRecursiveSync(srcDir, destDir)
  })
}

function copyRecursiveSync(src, dest) {
  var exists = fs.existsSync(src)
  var stats = exists && fs.statSync(src)
  var isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    fs.mkdirSync(dest)
    fs.readdirSync(src).forEach((folder) =>
      copyRecursiveSync(path.join(src, folder), path.join(dest, folder))
    )
  } else {
    fs.copyFileSync(src, dest)
  }
}
