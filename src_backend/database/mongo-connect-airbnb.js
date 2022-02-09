require("dotenv").config();

const initialConnectionAirbnb = async (client) => {
  const dbName = process.env.DB_NAME;
  const dbCollection = process.env.DB_COLLECTION;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(dbCollection);
  const results = await collection
    .find({ "address.suburb": "Manhattan" })
    .limit(10)
    .toArray();
  return results;
};

module.exports = { initialConnectionAirbnb };
