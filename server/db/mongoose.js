var mongoose = require('mongoose');
//var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://dylan:dyl0915@ds159661.mlab.com:59661/todoapp';





// connect to MONGODB_URL (only for heroku database) and add process.env.MONGODB_URI ||  for local database
//make sure in postman to be in Todo app local or todo app heroku
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
