const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create User schema

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is Required'
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [({ length }) => length >= 6, 'Password should be longer.']
  },
  fullname: {
    type: String,
    trim: true,
    required: 'Full Name is Required'
  },
  bio: {
    type: String
  },
  savedStocks: [{
    type: Schema.Types.ObjectId, ref: 'UserStock' }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;