const express = require('express');
const router = express.Router();
const marketController = require('../controllers/market-cntrl');

// define routes for market

// get all markets
router.get('/', marketController.getAllMarkets);

// get market by id
router.get('/:id', marketController.getMarketById);

// create market
router.post('/', marketController.createMarket);

// update market
router.put('/:id', marketController.updateMarket);

// delete market
router.delete('/:id', marketController.deleteMarket);

module.exports = router;