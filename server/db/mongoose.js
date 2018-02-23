var mongoose = require('mongoose');
var mongodb = require('mongodb');

const MONGODB_URL = 'mongodb://dyl:1234@ds245548.mlab.com:45548/todo';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// MongoClient.connect(MONGO_URL, (err, db) => {
//   if(err)
//     return console.log(err);
// })
module.exports = {mongoose};
