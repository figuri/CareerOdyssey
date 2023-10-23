const UserStock = require('../models');

// controller for userstock

const userstockController = {

    // crud routes for userstock
    createUserStock({ body }, res) {
        UserStock.create(body)
            .then(dbUserStock => res.json(dbUserStock))
            .catch(err => res.status(400).json(err));
    },
    getAllUserStocks(req, res) {
        UserStock.find({})
            .then(dbUserStock => res.json(dbUserStock))
            .catch(err => res.status(400).json(err));
    },
    getUserStockById({ params }, res) {
        UserStock.findOne({ _id: params.id })
            .then(dbUserStock => {
                if (!dbUserStock) {
                    res.status(404).json({ message: 'No userstock found with this id!' });
                    return;
                }
                res.json(dbUserStock);
            })
            .catch(err => res.status(400).json(err));
    },
    updateUserStock({ params, body }, res) {
        UserStock.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbUserStock => {
                if (!dbUserStock) {
                    res.status(404).json({ message: 'No userstock found with this id!' });
                    return;
                }
                res.json(dbUserStock);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteUserStock({ params }, res) {
        UserStock.findOneAndDelete({ _id: params.id })
            .then(dbUserStock => {
                if (!dbUserStock) {
                    res.status(404).json({ message: 'No userstock found with this id!' });
                    return;
                }
                res.json(dbUserStock);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userstockController;