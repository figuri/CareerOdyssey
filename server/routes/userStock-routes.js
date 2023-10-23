const express = require('express');
const router = express.Router();
const userStockController = require('../controllers/userstock-cntrl');

// define routes for userStock

// get all userStocks
router.get('/', userStockController.getAllUserStocks);

// get one userStock by id
router.get('/:id', userStockController.getUserStockById);

// create new userStock
router.post('/', userStockController.createUserStock);

// update existing userStock
router.put('/:id', userStockController.updateUserStock);

// delete existing userStock
router.delete('/:id', userStockController.deleteUserStock);

module.exports = router;