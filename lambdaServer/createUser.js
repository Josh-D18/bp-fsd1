const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = null;
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(MONGODB_URI);
  const db = await client.db("bp-data");
  cachedDb = db;
  return db;
}
exports.lambdaHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const result = await db.collection("users").insertOne(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};
