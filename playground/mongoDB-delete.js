//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
      console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    //Works
    // db.collection('Users').deleteMany({name: 'Dylan'}).then((result) => {
    //   console.log(result);
    // });

    //Works
    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5a89f665b27f772156935f48')
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });




    //client.close();
});
