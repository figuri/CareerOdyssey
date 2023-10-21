// userStock will have user id, stock id, and quantity(probably the amount the user has of that stock)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserStockSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    stockId: {
        type: Schema.Types.ObjectId,
        ref: 'Stock'
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserStock = mongoose.model('UserStock', UserStockSchema);

module.exports = UserStock;