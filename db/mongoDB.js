import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";

const MONGODB_URL = process.env.MONGODB_URL;

const client = new MongoClient(MONGODB_URL);

try {
    await client.connect();
    console.log("mongoDB connected...");
} catch (e) {
    console.log("Error while connecting to the database:", e);
    process.exit(1);
}

const db = client.db("Benefits_soldiers");
export { db }


