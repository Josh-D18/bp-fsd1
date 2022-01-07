const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI =
  "mongodb+srv://josh:hello1234@cluster0.63g31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();

  const users = await db.collection("users").find({}).toArray();
  const response = {
    statusCode: 200,
    body: JSON.stringify(users),
  };

  return response;
};
