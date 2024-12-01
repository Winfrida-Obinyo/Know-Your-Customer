import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Assert that this will always be a string
const dbName = process.env.MONGODB_DB as string; // Similar assertion for the database name

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  client = await MongoClient.connect(uri, {});
  db = client.db(dbName);
  
  return { client, db };
}
