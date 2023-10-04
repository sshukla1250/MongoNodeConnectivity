const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'system';

async function getData(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('college');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();