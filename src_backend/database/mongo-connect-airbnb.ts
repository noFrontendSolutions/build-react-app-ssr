require("dotenv").config();

const initialConnectionAirbnb = async (client) => {
  const dbName = process.env.DB_NAME;
  const dbCollection = process.env.DB_COLLECTION;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(dbCollection);
  const results = await collection
    //passes back the first ten results of adresses that are located in Manhatten, with "picture_url" and "summary" not empty strings 
    .find({ "address.suburb": "Manhattan", "images.picture_url": {$ne: ""}, "summary": {$ne: ""}})
    .limit(10)
    .toArray();
  return results;
};

export = { initialConnectionAirbnb };
