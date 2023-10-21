// create mongoose connection to mongoDB
const mongoose = require('mongoose');

// connect to database by wrapping mongoose.connect() in a promise
mongoose.connect('mongodb://127.0.0.1:27017/odyssey');

// export mongoose connection
module.exports = mongoose.connection;