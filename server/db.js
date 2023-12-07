import { MongoClient } from "mongodb";

const connectionString ="mongodb+srv://BalajiRuse:Bnm@2223@cluster0.ofob44g.mongodb.net/";


async function dbConnection (){
  try{
    const client = new MongoClient(connectionString);
    await client.connect();
    console.log("Database connected");
    return client
  }   
  catch (error){
    console.log("Erro connecting Database",error);
  }
}

// initlizing DB
export default dbConnection;