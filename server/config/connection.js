// create mongoose connection to mongoDB
const mongoose = require('mongoose');

// connect to database by wrapping mongoose.connect() in a promise
mongoose.connect('mongodb://127.0.0.1:27017/career_odyssey');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected successfully');
});

// export mongoose connection
module.exports = db;