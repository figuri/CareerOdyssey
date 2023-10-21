// event model will be similar to news model but for information not related to the stocks that may still affect the market

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({

    title: {
        type: String, required: true
    },

    description: {
        type: String, required: true
    },

    date: {
        type: Date, default: Date.now
    },

    stockSymbol: {
        type: String, required: true
    },

    eventType: {
        type: String, required: true
    }
});

// create model with mongoose

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;