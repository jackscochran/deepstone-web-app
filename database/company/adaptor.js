const Company = require('./model');

const companyAdaptor = (() => {
    function getCompany(ticker){
        company = Company.find({ticker: ticker});
        return company;
    }

    function getAllCompanies(){
        companies = Company.find({})
        return companies[20]
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
        filter
    }
})()

module.exports = companyAdaptor
