require("dotenv").config();
import * as mongoDB from "mongodb";

const initialConnectionAirbnb = async (client: mongoDB.MongoClient) => {
  const dbName: string= process.env.DB_NAME;
  const dbCollection: string = process.env.DB_COLLECTION;
  await client.connect();
  //console.log("Connected successfully to Mongo..");
  const db: mongoDB.Db = client.db(dbName);
  const collection: mongoDB.Collection = db.collection(dbCollection);
  const results = await collection
    //passes back the first ten results of adresses that are located in Manhatten, with "picture_url" and "summary" not empty strings 
    .find({ "address.suburb": "Manhattan", "images.picture_url": {$ne: ""}, "summary": {$ne: ""}})
    .limit(10)
    .toArray();
  return results;
};

export = { initialConnectionAirbnb };
