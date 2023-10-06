const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'music_player_db';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('songs');
    // let response = await collection.find({artist:"Artist 2222"}).toArray();
    // console.log(response);
    return collection;
}
module.exports = dbConnect;