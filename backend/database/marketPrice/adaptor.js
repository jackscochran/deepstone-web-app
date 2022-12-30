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

    async function getPerformance(ticker, startDate, endDate){
        console.log()

        return (await getPrice(ticker, endDate)) / (await getPrice(ticker, startDate))
    }

    return {
        getHistoricalPrices,
        formatPricesIntoTimeSeries,
        getPrice,
        getPerformance
    }
})()

module.exports = marketPriceAdaptor
