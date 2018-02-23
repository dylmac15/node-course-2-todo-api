var mongoose = require('mongoose');


//creating  a new model for a user collection in my local database
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};
