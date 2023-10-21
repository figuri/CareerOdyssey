// create mongoose connection to mongoDB

const mongoose = require('mongoose');

mongoose.set('debug', true);

module.exports = mongoose.connection;