const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



Todo.findByIdAndRemove('5a9ae2312ccdbb732071b2d8').then((todo) => {
  console.log(todo);
});
