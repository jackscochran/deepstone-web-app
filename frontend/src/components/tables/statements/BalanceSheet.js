import Statement from "./Statement"

const BalanceSheet = ({ mainCompany, companies, statements, addCompany, removeCompany }) => {

    const getStatements = () => Object.keys(mainCompany).length > 0 ? [mainCompany.financials.balanceSheet].concat(statements) : []

    const balanceSheet = [
        {
            name: 'ASSETS',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Cash & Cash Equivalents',
            values: getStatements().map(statement => statement ? statement.cashAndCashEquivalents : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Short-Term Investments',
            values: getStatements().map(statement => statement ? statement.shortTermInvestments : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Receivables',
            values: getStatements().map(statement => statement ? statement.netReceivables : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Inventory',
            values: getStatements().map(statement => statement ? statement.inventory : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Current Assets',
            values: getStatements().map(statement => statement ? statement.otherCurrentAssets : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Current Assets',
            values: getStatements().map(statement => statement ? statement.totalCurrentAssets : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Net Property Plant Equipment',
            values: getStatements().map(statement => statement ? statement.propertyPlantEquipmentNet : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Goodwill',
            values: getStatements().map(statement => statement ? statement.goodwill : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Tax Assets',
            values: getStatements().map(statement => statement ? statement.taxAssets : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Assets',
            values: getStatements().map(statement => statement ? statement.otherAssets : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Non-Current Assets',
            values: getStatements().map(statement => statement ? statement.totalNonCurrentAssets : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'TOTAL ASSETS',
            values: getStatements().map(statement => statement ? statement.totalAssets : null),
            cssClass: 'statement__line-item statement__header'
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
            name: 'LIABILITIES AND SHAREHOLDERS EQUITY',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Liabilities',
            values: [],
            cssClass: 'statement__line-item statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Accounts Payables',
            values: getStatements().map(statement => statement ? statement.accountPayables : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Short Term Debt',
            values: getStatements().map(statement => statement ? statement.shortTermDebt : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Taxes Payables',
            values: getStatements().map(statement => statement ? statement.taxPayables : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Current Liabilities',
            values: getStatements().map(statement => statement ? statement.otherCurrentLiabilities : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Current Liaiblities',
            values: getStatements().map(statement => statement ? statement.totalCurrentLiabilities : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Long Term Debt',
            values: getStatements().map(statement => statement ? statement.longTermDebt : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Non-Current Deferred Revenue',
            values: getStatements().map(statement => statement ? statement.deferredRevenueNonCurrent : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Liabilities',
            values: getStatements().map(statement => statement ? statement.otherLiabilitiess : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Non-Current Liabilities',
            values: getStatements().map(statement => statement ? statement.totalNonCurrentLiabilities : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'TOTAL LIABILITIES',
            values: getStatements().map(statement => statement ? statement.totalNonCurrentAssets : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Shareholders Equity',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Preferred Stock',
            values: getStatements().map(statement => statement ? statement.preferredStock : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Retained Earnings',
            values: getStatements().map(statement => statement ? statement.retainedEarnings : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Accumulated Other Comprehensive Income Loss',
            values: getStatements().map(statement => statement ? statement.accumulatedOtherComprehensiveIncomeLoss : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Minority Interest',
            values: getStatements().map(statement => statement ? statement.minorityInterest : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Total Investments',
            values: getStatements().map(statement => statement ? statement.totalInvestments : null),
            cssClass: 'statement__item'
        },
        {
            name: 'TOTAL SHAREHOLDERS EQUITY',
            values: getStatements().map(statement => statement ? statement.othertotalStockholdersEquity : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'TOTAL LIABILITIES AND SHAREHOLDERS EQUITY',
            values: getStatements().map(statement => statement ? statement.totalLiabilitiesAndStockholdersEquity : null),
            cssClass: 'statement__line-item statement__header'
        },
    ]

    return (
        <Statement 
            mainCompany={mainCompany.data}
            companies={companies} 
            statement={balanceSheet} 
            addCompany={addCompany} 
            removeCompany={removeCompany}
            />
    )
}

export default BalanceSheet