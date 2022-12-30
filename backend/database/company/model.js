const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    ticker:{
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    profile: {
        type: JSON,
        required: true
    }
});

// create and export model
const Company = mongoose.model('company', CompanySchema);
module.exports = Company