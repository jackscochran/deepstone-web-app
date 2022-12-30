const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    userId: {
        type: Reference,
        required:true
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true
    },
    assets: {
        type: Array,
        required: true
    },
    distribution: {
        type: Array,
        required: true
    }
});

// create and export model
const Portfolio = mongoose.model('portfolio', PortfolioSchema);
module.export = Portfolio