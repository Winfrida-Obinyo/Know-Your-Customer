import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let db;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }
  client = await MongoClient.connect(uri, options);
  db = client.db(process.env.MONGODB_DB); // Use database name from environment variables
  return { client, db };
}
