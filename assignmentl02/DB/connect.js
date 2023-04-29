// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

function initDb(callback) {
  if(_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

function getDb() {
  if (!_db) {
    throw Error('Database is not initialized');
  }
  return _db;
};

module.exports = {initDb, getDb};

// const URI = 'mongodb+srv://DonJinee:mongo1122@cluster0.y27zpfk.mongodb.net/test';

// async function connectDB(){
//   await mongoose.connect(URI);
//   console.log('Database connected!!!')
// };

// module.exports = connectDB;




// const dotenv = require('dotenv');
// dotenv.config();
// const MongoClient = require('mongodb').MongoClient;

// let _db;

// const initDb = (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   MongoClient.connect(process.env.MONGODB_URI)
//     .then((client) => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb,
// };