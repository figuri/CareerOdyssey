const express = require('express');

// import mongoose connection 
const stockDB = require('./config/connection');

// create express app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const routes = require('./routes');

// turn on routes
app.use(routes);

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

// turn on connection to db and server
stockDB.once('open', () => {
    app.listen(PORT, () => console.log('Now listening'));
});