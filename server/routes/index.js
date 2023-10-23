const express = require('express');
const router = express.Router();

// imnport route modules

const stockRoutes = require('./stock-routes');
const newsRoutes = require('./news-routes');
const eventRoutes = require('./event-routes');
const marketRoutes = require('./market-routes');
const userRoutes = require('./user-routes');
const userstockRoutes = require('./userStock-routes');
const filterRoutes = require('./filter-routes');

// export routes

router.use('/stocks', stockRoutes);
router.use('/news', newsRoutes);
router.use('/events', eventRoutes);
router.use('/markets', marketRoutes);
router.use('/users', userRoutes);
router.use('/userstocks', userstockRoutes);

// export router

module.exports = router;