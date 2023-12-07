import { MongoClient } from "mongodb";
const connectionString =
  "mongodb+srv://BalajiRuse:Bnm@2223@cluster0.ofob44g.mongodb.net/";

const localString = "mongodb://127.0.0.1:27017/fsd";
async function dbConnection() {
  try {
    const client = new MongoClient(localString);
    await client.connect();
    console.log("Database connected");
    return client;
  } catch (error) {
    console.log("Error connecting Database", error);
  }
}
//initlizing DB
export const client = await dbConnection();




