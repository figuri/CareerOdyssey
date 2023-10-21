// this will serve as the entry point for all models

const mongoose = require('mongoose');

const Market = require('./Market');
const News = require('./News');
const Stock = require('./Stock');
const User = require('./User');
const UserStock = require('./UserStock');
const Event = require('./Event');

module.exports = { Market, News, Stock, User, UserStock, Event };