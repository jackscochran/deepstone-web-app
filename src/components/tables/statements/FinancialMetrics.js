import Statement from './Statement'

const FinancialMetrics = ({ mainCompany, companies, statements, addCompany, removeCompany }) => {

    const getStatements = () => Object.keys(mainCompany).length > 0 ? [mainCompany.financials.financialMetrics].concat(statements) : []
    
    let financialMetrics = [
        {
            name: 'PROFITIBILITY',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Margins',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Gross Profit',
            values: getStatements().map(statement => statement ? statement.grossProfitMargin : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Operating Profit',
            values: getStatements().map(statement => statement ? statement.operatingProfitMargin : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Pretax Profit',
            values: getStatements().map(statement => statement ? statement.pretaxProfitMargin : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Profit',
            values: getStatements().map(statement => statement ? statement.netProfitMargin : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Effective Tax Rate',
            values: getStatements().map(statement => statement ? -statement.effectiveTaxRate : null),
            cssClass: 'statement__item'
        },

        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Returns',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Return on Assets',
            values: getStatements().map(statement => statement ? statement.returnOnAssets : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Return on Equity',
            values: getStatements().map(statement => statement ? statement.returnOnEquity : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Return on Capital Employed',
            values: getStatements().map(statement => statement ? statement.returnOnCapitalEmployed : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Income per EBT',
            values: getStatements().map(statement => statement ? statement.netIncomePerEBT : null),
            cssClass: 'statement__item'
        },
        {
            name: 'EBT per EBIT',
            values: getStatements().map(statement => statement ? statement.ebtPerEbit : null),
            cssClass: 'statement__item'
        },
        {
            name: 'EBIT per Revenue',
            values: getStatements().map(statement => statement ? statement.ebitPerRevenue : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'LEVERAGE',
            values: [],
            cssClass: 'statement__header'
        },        
        {
            name: 'Debt Ratio',
            values: getStatements().map(statement => statement ? statement.debtRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Debt Equity Ratio',
            values: getStatements().map(statement => statement ? statement.debtEquityRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Long Term Debt to Capitalization',
            values: getStatements().map(statement => statement ? statement.longTermDebtToCapitalization : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Debt to Capitalization',
            values: getStatements().map(statement => statement ? statement.totalDebtToCapitalization : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Interest Coverage',
            values: getStatements().map(statement => statement ? statement.interestCoverage : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cash Flow to Debt Ratio',
            values: getStatements().map(statement => statement ? statement.cashFlowToDebtRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Company Equity Multiplier',
            values: getStatements().map(statement => statement ? statement.companyEquityMultiplier : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'LIQUIDITY',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Payback Ability',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Current Ratio',
            values: getStatements().map(statement => statement ? statement.currentRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Quick Ratio',
            values: getStatements().map(statement => statement ? statement.quickRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cash Ratio',
            values: getStatements().map(statement => statement ? statement.cashRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Cash Coverage',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Cash Flow Coverage',
            values: getStatements().map(statement => statement ? statement.cashFlowCoverageRatios : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Short Term Coverage',
            values: getStatements().map(statement => statement ? statement.shortTermCoverageRatios : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Capex Coverage',
            values: getStatements().map(statement => statement ? statement.capitalExpenditureCoverageRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Dividend Paid and Capex Coverage',
            values: getStatements().map(statement => statement ? statement.dividendPaidAndCapexCoverageRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'EFFICIENCY',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Turnover',
            values: [],
            cssClass: 'statement__line-item'
        },

        {
            name: 'Receivables Turnover',
            values: getStatements().map(statement => statement ? statement.receivablesTurnover : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Payables Turnover',
            values: getStatements().map(statement => statement ? statement.payablesTurnover : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Inventory Turnover',
            values: getStatements().map(statement => statement ? statement.inventoryTurnover : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Fixed Asset Turnover',
            values: getStatements().map(statement => statement ? statement.fixedAssetTurnover : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Asset Turnover',
            values: getStatements().map(statement => statement ? statement.assetTurnover : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Operations',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Days of Sales Outstanding',
            values: getStatements().map(statement => statement ? statement.daysOfSalesOutstanding : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Days of Inventory Outstanding',
            values: getStatements().map(statement => statement ? statement.daysOfInventoryOutstanding : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Operating Cycle',
            values: getStatements().map(statement => statement ? statement.operatingCycle : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Days of Payables Outstanding',
            values: getStatements().map(statement => statement ? statement.daysOfPayablesOutstanding : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cash Conversion Cycle',
            values: getStatements().map(statement => statement ? statement.cashConversionCycle : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'MARKET',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Multiples',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Price Book Value Ratio',
            values: getStatements().map(statement => statement ? statement.priceBookValueRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price to Book Ratio',
            values: getStatements().map(statement => statement ? statement.priceToBookRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price to Sales Ratio',
            values: getStatements().map(statement => statement ? statement.priceToSalesRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price Earnings Ratio',
            values: getStatements().map(statement => statement ? statement.priceEarningsRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price to Free Cash Flows Ratio',
            values: getStatements().map(statement => statement ? statement.priceToFreeCashFlowsRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price to Operating Cash Flows Ratio',
            values: getStatements().map(statement => statement ? statement.priceToOperatingCashFlowsRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price Cash Flow Ratio',
            values: getStatements().map(statement => statement ? statement.priceCashFlowRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price Earnings to Growth Ratio',
            values: getStatements().map(statement => statement ? statement.priceEarningsToGrowthRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price Sales Ratio',
            values: getStatements().map(statement => statement ? statement.priceSalesRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Dividend Yield',
            values: getStatements().map(statement => statement ? statement.dividendYield : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Enterprise Value Multiple',
            values: getStatements().map(statement => statement ? statement.enterpriseValueMultiple : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Price Fair Value',
            values: getStatements().map(statement => statement ? statement.priceFairValue : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Share Basis',
            values: [],
            cssClass: 'statement__line-item'
        },
        {
            name: 'Operating Cash Flow per Share',
            values: getStatements().map(statement => statement ? statement.operatingCashFlowPerShare : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Free Cash Flow per Share',
            values: getStatements().map(statement => statement ? statement.priceFairValue : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cash per Share',
            values: getStatements().map(statement => statement ? statement.cashPerShare : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Payout Ratio',
            values: getStatements().map(statement => statement ? statement.payoutRatio : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'GROWTH',
            values: [],
            cssClass: 'statement__header'
        },


    ]

    return (
        <Statement 
            mainCompany={mainCompany.data}
            companies={companies} 
            statement={financialMetrics} 
            addCompany={addCompany} 
            removeCompany={removeCompany}
            />
    )
}

export default FinancialMetrics