const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock-cntrl');

// define stock routes

// get all stocks
router.get('/', stockController.getAllStocks);

// get stock by id
router.get('/:id', stockController.getStockById);

// create stock
router.post('/', stockController.createStock);

// update stock
router.put('/:id', stockController.updateStock);

// delete stock
router.delete('/:id', stockController.deleteStock);

module.exports = router;