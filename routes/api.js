const express = require('express');
const router = express.Router();
const companyAdaptor = require('../database/company/adaptor')
const marketPriceAdaptor = require('../database/marketPrice/adaptor')
const financialsAdaptor = require('../database/financials/adaptor')
const userAdaptor = require('../database/users/adaptor')

router.get('/company', (req, res, next) => {
    companyAdaptor.getCompany(req.query.ticker)
    .then(data => res.json(data))
    .catch(next);
});

router.get('/company-search', (req, res, next) => {
    companyAdaptor.getAllCompanies()
    .then(data => companyAdaptor.filter(data, req.query.query))
    .then(data = data[20])
    .then(data => res.json(data))
    .catch(next)
})

router.get('/financials', (req, res, next) => {
    financialsAdaptor.getFinancials(
        req.query.ticker,
        req.query.date,
        req.query.period
    )
    .then(data => res.json(data))
    .catch(next);
});

router.get('/historical-financials', (req, res, next) => {
    financialsAdaptor.getHistoricalFinancials(
        req.query.ticker,
        req.query.period
    )
    .then(data => res.json(data))
    .catch(next);
});

router.get('/market-price', (req, res, next) => {
    marketPriceAdaptor.getPrice(
        req.query.ticker,
        req.query.date
    )
    .then(data=>data[0])
    .then(data=>res.json(data))
    .catch(next);
});

router.get('/market-prices', (req, res, next) => {
    marketPriceAdaptor.getHistoricalPrices(
        req.query.ticker,
        req.query.startDate,
        req.query.endDate
    )
    .then(data => marketPriceAdaptor.formatPricesIntoTimeSeries(data))
    .then(data => res.json(data))
    .catch(next);
});


router.post('/register', (req, res, next) => {
    userAdaptor.register(
        req.body.username,
        req.body.email,
        req.body.password
    )
    .then(data => res.json(data))
    .catch(data => res.json(data))
});

router.post('/login', (req, res, next) => {
    userAdaptor.login(
        req.body.email,
        req.body.password
    )
    .then(data => res.json(data))
    .catch(data => res.json(data))
})

router.get('/user-exists', (req, res, next) => {
    userAdaptor.doesUserExist(req.query.email)
    .then(data => res.json(data))
    .catch(next)
})

router.post('/delete-user', (req, res, next) => {
    userAdaptor.deleteUser(
        req.body.email,
        req.body.password
    )
    .then(data => res.json(data))
    .catch(data => res.json(data))
})


router.post('/portfolio', (req, res, next) => {
    portfolioAdaptor.addPortfolio()
});

router.get('/portfolio', (req, res, next) => {
    portfolioAdaptor.getCurrentPortfolio(req.query.userId)
    .then(data => res.json(data))
    .catch(next);
});

router.get('/portfolios', (req, res, next) => {
    portfolioAdaptor.getPortfolios(req.query.userId)
    .then(data => res.json(data))
    .catch(next);
});

router.get('/backtest/company', (req, res, next) => {
});

router.get('/backtest/portfolio', (req, res, next) => {
});


module.exports = router;