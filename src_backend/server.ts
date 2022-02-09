const express  = require("express")
var cors = require('cors')
const mongoConnectAirbnb = require("./database/mongo-connect-airbnb.js")
const { MongoClient } = require('mongodb');
require('dotenv').config()

const url = process.env.MONGO_URI
const port = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use(cors())

app.get("/airbnb", async (req, res, next) => {
    const client = new MongoClient(url);
    const initialLoad = await mongoConnectAirbnb.initialConnectionAirbnb(client)
    await client.close()
    res.send(initialLoad)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})