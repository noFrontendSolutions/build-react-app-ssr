const fs = require("fs")

const htmlFile = fs.readdirSync(__dirname).filter((fn) => fn.endsWith(".json"))

console.log(htmlFile)
