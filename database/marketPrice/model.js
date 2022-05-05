const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketPriceSchema = new Schema({
    ticker:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true 
    },
    value: {
        type: Number,
        required: true
    }
});

// create and export model
const MarketPrice = mongoose.model('marketPrice', MarketPriceSchema);
module.exports = MarketPrice