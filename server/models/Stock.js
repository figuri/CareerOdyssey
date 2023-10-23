// stock model for individual stocks not saved by user

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    }
});

const StockSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    trend: {
        type: String,
        enum: ['bullish', 'bearish', 'neutral'], default: 'neutral'
    },
    // store historical prices in an array of objects
    historicalPrices: [priceSchema]
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;