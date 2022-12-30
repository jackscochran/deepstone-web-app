const Company = require('./model');
const marketPriceAdaptor = require('../marketPrice/adaptor')

const companyAdaptor = (() => {
    function getCompany(ticker){
        company = Company.find({ticker: ticker});
        return company;
    }

    function getAllCompanies(){
        companies = Company.find({})
        return companies
    }

    function getTrendingCompanies(n, companies, startDate, endDate){
        let trending = []

        companies.forEach((company, i) => {
            if (trending.length < n){
                trending.push(company)
                return
            }

            let swap = true
            trending.forEach((trend, i) => {   
                if (swap && Math.random() < 1/n){
                    trending[i] = company
                    swap = false
                }
            })

        })

        return trending
    }

    function filter(models, query){
        query=query.toLowerCase()
        filtered = []
        for (model of models){
            if(model.ticker.toLowerCase().includes(query) || model.companyName.toLowerCase().includes(query))
                filtered.push(model)
        }
        return filtered
    }

    return {
        getCompany,
        getAllCompanies,
        filter,
        getTrendingCompanies
    }
})()

module.exports = companyAdaptor
