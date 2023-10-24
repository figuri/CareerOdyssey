const Market = require('../models/Market');

// controller for market

const marketController = {

    // crud routes for market
    createMarket({ body }, res) {
        Market.create(body)
            .then(dbMarket => res.json(dbMarket))
            .catch(err => res.status(400).json(err));
    },
    getAllMarkets(req, res) {
        Market.find({})
            .then(dbMarket => res.json(dbMarket))
            .catch(err => res.status(400).json(err));
    },
    getMarketById({ params }, res) {
        Market.findOne({ _id: params.id })
            .then(dbMarket => {
                if (!dbMarket) {
                    res.status(404).json({ message: 'No market found with this id!' });
                    return;
                }
                res.json(dbMarket);
            })
            .catch(err => res.status(400).json(err));
    },
    updateMarket({ params, body }, res) {
        Market.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbMarket => {
                if (!dbMarket) {
                    res.status(404).json({ message: 'No market found with this id!' });
                    return;
                }
                res.json(dbMarket);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteMarket({ params }, res) {
        Market.findOneAndDelete({ _id: params.id })
            .then(dbMarket => {
                if (!dbMarket) {
                    res.status(404).json({ message: 'No market found with this id!' });
                    return;
                }
                res.json(dbMarket);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = marketController;