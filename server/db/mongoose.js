var mongoose = require('mongoose');
var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://dyl:1234@ds245548.mlab.com:45548/todo';

mongoose.Promise = global.Promise;
MongoClient.connect(MONGODB_URL, (err, db) => {
  if(err) {
    return console.log(err);
  }
  console.log('DB connection successful');
});

//mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
