const Stock = require('../models');

// controller for stock

const stockController = {
    // crud routes for stock
    createStock({ body }, res) {
        Stock.create(body)
            .then(dbStock => {
                if (!dbStock) {
                    res.status(404).json({ message: 'No stock found with this id!' });
                    return;
                }
            })
            .catch(err => res.status(400).json(err));
    },
    getAllStocks(req, res) {
        Stock.find({})
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(400).json(err));
    },
    getStockById({ params }, res) {
        Stock.findOne({ _id: params.id })
            .then(dbStock => {
                if (!dbStock) {
                    res.status(404).json({ message: 'No stock found with this id!' });
                    return;
                }
                res.json(dbStock);
            })
            .catch(err => res.status(400).json(err));
    },
    updateStock({ params, body }, res) {
        Stock.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbStock => {
                if (!dbStock) {
                    res.status(404).json({ message: 'No stock found with this id!' });
                    return;
                }
                res.json(dbStock);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteStock({ params }, res) {
        Stock.findOneAndDelete({ _id: params.id })
            .then(dbStock => {
                if (!dbStock) {
                    res.status(404).json({ message: 'No stock found with this id!' });
                    return;
                }
                res.json(dbStock);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = stockController;