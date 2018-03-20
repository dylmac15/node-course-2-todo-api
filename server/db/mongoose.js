var mongoose = require('mongoose');
//var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://dyl:1234@ds245548.mlab.com:45548/todo';

// connect to database
	mongoose.connect(process.env.MONGODB_URI || MONGODB_URL,{
		//useMongoClient: true,
		promiseLibrary: global.Promise
	});

	var db = mongoose.connection;

	// mongodb error
	db.on('error', console.error.bind(console, 'connection error:'));
	// mongodb connection open
	db.once('open', () => {
	  console.log(`Connected to Mongo at: ${new Date()}`)
	});


/*
mongoose.Promise = global.Promise;
MongoClient.connect(MONGODB_URL || 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(err);
  }
  console.log('DB connection successful');
});
*/

//mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
