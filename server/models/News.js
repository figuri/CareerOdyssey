// create news model to hande all current events concerning specific stocks

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String, required: true
    },

    description: {
        type: String, required: true
    },

    url: {
        type: String, required: true
    },

    date: {
        type: Date, default: Date.now
    },

    stockSymbol: {
        type: String, required: true
    },

    source: {
        type: String, required: true
    }
});

// create model with mongoose

const News = mongoose.model('News', NewsSchema);

module.exports = News;