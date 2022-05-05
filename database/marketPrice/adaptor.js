const MarketPrice = require('./model');

const marketPriceAdaptor = (()=>{
    function getHistoricalPrices(ticker, startDate, endDate){
        prices = MarketPrice.find({ticker: ticker, date: {$gte: startDate, $lte: endDate}}).sort('field -date');
        return prices;
    }

    function formatPricesIntoTimeSeries(priceModels){
        timeSeries = [];
        for (const priceModel of priceModels){
            timeSeries.push({
                date: priceModel.date,
                price: priceModel.value
            });
        };
        return timeSeries.reverse();
    }
    
    function getPrice(ticker, date){
        price = MarketPrice.find({ticker: ticker, date: date});
        return price;
    }

    return {
        getHistoricalPrices,
        formatPricesIntoTimeSeries,
        getPrice
    }
})()

module.exports = marketPriceAdaptor
