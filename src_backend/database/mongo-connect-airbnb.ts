import "dotenv/config"
import * as mongoDB from "mongodb"

type NYborough =
  | "Manhattan"
  | "Brooklyn"
  | "Staten Island"
  | "The Bronx"
  | "Queens"

export const connectToAirbnb = async (client: mongoDB.MongoClient) => {
  const dbName: string = process.env.DB_NAME || ""
  const dbCollection: string = process.env.DB_COLLECTION || ""
  await client.connect()
  const db: mongoDB.Db = client.db(dbName)
  const airbnbCollection: mongoDB.Collection = db.collection(dbCollection)
  return airbnbCollection
}

export const findResults = async (
  location: NYborough,
  collection: mongoDB.Collection
) => {
  //passes back the first ten results of adresses that are located in "NYborough", with "picture_url" and "summary" not empty strings
  const results = await collection
    .find({
      "address.suburb": location,
      "images.picture_url": { $ne: "" },
      summary: { $ne: "" },
    })
    .limit(10)
    .toArray()
  return results
}

export const getInitialLoadFromAirbnb = async (
  client: mongoDB.MongoClient,
  location: NYborough
) => {
  const airbnbCollection = await connectToAirbnb(client)
  const results = await findResults(location, airbnbCollection)
  return results
}

export default connectToAirbnb
