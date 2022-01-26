//this file is used for deploying the two react-three-fuber animation I've created.  

const express = require("express")

const port = process.env.PORT || 3000

const app = express()


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/dist/index.9f2ad33904bcf3976374.html")
})


app.use(express.static(__dirname + '/dist'))

app.listen(port, () => {
    console.log(`Server listening on the following port: ${port}`)
})