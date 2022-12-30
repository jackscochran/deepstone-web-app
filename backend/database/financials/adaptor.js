const Financials = require('./model')

const financialsAdaptor = (() => {

    function getFinancials(ticker, date, period){
        financials = Financials.findOne({ticker: ticker, date: {$lte: date}, period: period}).sort('field -date');
        return financials;
    }

    function getHistoricalFinancials(ticker, period){
        historicalFinancials = Financials.find({ticker: ticker, period: period});
        return historicalFinancials;
    }

    return {
        getFinancials,
        getHistoricalFinancials
    }

})()

module.exports = financialsAdaptor;