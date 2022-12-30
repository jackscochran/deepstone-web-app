const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FinancialsSchema = new Schema({
    ticker:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    incomeStatment: {
        type: JSON,
        required: true
    },
    balanceSheet: {
        type: JSON,
        required: true
    },
    cashFlowStatement: {
        type: JSON,
        required: true
    },
    financialMetrics: {
        type: JSON,
        required: true
    }
});

// create and export model
const Financials = mongoose.model('financials', FinancialsSchema);
module.exports = Financials