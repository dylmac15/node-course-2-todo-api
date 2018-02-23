var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dyl:1234@ds245548.mlab.com:45548/todo", function(err, db) {
  if(!err) { console.log("Connexion successful!"); }

  var collection = db.collection('todo');
  console.log("Now working on todo");


});
