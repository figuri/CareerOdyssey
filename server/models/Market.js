// create market model to handle larger trends in the market and indices.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarketSchema = new Schema({
// name of market index (DOW, NASDAQ, S&P)
    indexName: {
        type: String, required: true
    },
// symbol of market index (^GSPC, ^IXIC, ^DJI)
    indexSymbol: {
        type: String, required: true
    },
// value of current index
    currentValue: {
        type: Number, required: true
    },
// change can be absolute or percentage
    change: {
        type: Number, required: true
    },
// change type will be either positive or negative
    changeType: {
        type: String, 
        enum: ['positive', 'negative', 'neutral'], 
        default: 'neutral' ,
        required: true
    }
});

// create model with mongoose

const Market = mongoose.model('Market', MarketSchema);

module.exports = Market;