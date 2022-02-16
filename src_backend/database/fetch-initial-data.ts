import * as mongoDB from "mongodb"
import connectToAirbnb from "./mongo-connect-airbnb"

export const fetchIntitialData = async (url: string) => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(url)
  try {
    const initialLoad = await connectToAirbnb(client)
    await client.close()
    return initialLoad
  } catch (err) {
    console.log(err)
  }
}
