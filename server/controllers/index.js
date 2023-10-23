// barrel file for all controllers 

const userController = require('./user-cntrl');
const stockController = require('./stock-cntrl');
const userstockController = require('./userstock-cntrl');
const eventController = require('./event-cntrl');
const newsController = require('./news-cntrl');
const marketController = require('./market-cntrl');
const filterController = require('./filter-cntrl');
const authController = require('./auth-cntrl');

// export all controllers as properties on an object

module.exports = {
    userController,
    stockController,
    userstockController,
    eventController,
    newsController,
    marketController,
    filterController,
    authController
};