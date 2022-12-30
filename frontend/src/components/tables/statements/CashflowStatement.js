import Statement from "./Statement"

const CashflowStatement = ({ mainCompany, companies, statements, addCompany, removeCompany }) => {

    const getStatements = () => Object.keys(mainCompany).length > 0 ? [mainCompany.financials.cashflowStatement].concat(statements) : []

    const cashflowStatement = [
        {
            name: 'CASH FLOWS FROM OPERATING ACTIVITIES',
            values: [],
            cssClass: 'statement__header'
        },

        {
            name: 'Net Income' ,
            values: getStatements().map(statement => statement ? statement.netIncome : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Depreciation & Amortization' ,
            values: getStatements().map(statement => statement ? statement.depreciationAndAmortization : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Deferred Income Tax' ,
            values: getStatements().map(statement => statement ? statement.deferredIncomeTax : null),
            cssClass: 'statement__item'
        },
        {
            name: 'StockBasedCompensation' ,
            values: getStatements().map(statement => statement ? statement.stockBasedCompensation : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Change in Working Capital' ,
            values: getStatements().map(statement => statement ? statement.changeInWorkingCapital : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Accounts Receivables' ,
            values: getStatements().map(statement => statement ? statement.inventory : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Accounts Payables' ,
            values: getStatements().map(statement => statement ? statement.accountsPayables : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Working Capital' ,
            values: getStatements().map(statement => statement ? statement.otherWorkingCapital : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Non-Cash Items' ,
            values: getStatements().map(statement => statement ? statement.otherNonCashItems : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Cash Provided by Operating Activities' ,
            values: getStatements().map(statement => statement ? statement.netCashProvidedByOperatingActivities : null),
            cssClass: 'statement__line-item '
        },

        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'CASH FLOWS FROM INVESTING ACTIVITIES',
            values: [],
            cssClass: 'statement__header'
        },

        {
            name: 'Investments in Property Plant & Equipment' ,
            values: getStatements().map(statement => statement ? statement.investmentsInPropertyPlantAndEquipment : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Acquisitions Net' ,
            values: getStatements().map(statement => statement ? statement.acquisitionsNet : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Purchases of Investments' ,
            values: getStatements().map(statement => statement ? statement.purchasesOfInvestments : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Sales Maturities of Investments' ,
            values: getStatements().map(statement => statement ? statement.salesMaturitiesOfInvestments : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Investing Activites' ,
            values: getStatements().map(statement => statement ? statement.changeInWorkingCapital : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Cash Provided by Investing Activities' ,
            values: getStatements().map(statement => statement ? statement.netCashUsedForInvestingActivites : null),
            cssClass: 'statement__line-item '
        },


        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'CASH FLOWS FROM FINANCING ACTIVITIES',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: 'Debt Repayment' ,
            values: getStatements().map(statement => statement ? statement.debtRepayment : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Common Stock Issued' ,
            values: getStatements().map(statement => statement ? statement.commonStockIssued : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Common Stock Repurchased' ,
            values: getStatements().map(statement => statement ? statement.commonStockRepurchased : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Dividends Paid' ,
            values: getStatements().map(statement => statement ? statement.dividendsPaid : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Financing Activites' ,
            values: getStatements().map(statement => statement ? statement.otherFinancingActivites : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Net Cash Provided by Financing Activities' ,
            values: getStatements().map(statement => statement ? statement.netCashUsedProvidedByFinancingActivities : null),
            cssClass: 'statement__line-item '
        },

        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Effect of Forex Changes on cash' ,
            values: getStatements().map(statement => statement ? statement.effectOfForexChangesOnCash : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'NET CHANGE IN CASH',
            values: getStatements().map(statement => statement ? statement.netChangeInCash : null),
            cssClass: 'statement__header'
        },
        {
            name: 'Cash at the Beginning of the Period' ,
            values: getStatements().map(statement => statement ? statement.cashAtBeginningOfPeriod : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cash at the End of the Period' ,
            values: getStatements().map(statement => statement ? statement.cashAtEndOfPeriod : null),
            cssClass: 'statement__item'
        },
    ]

    return (
        <Statement 
            mainCompany={mainCompany.data}
            companies={companies} 
            statement={cashflowStatement} 
            addCompany={addCompany} 
            removeCompany={removeCompany}
            />
    )
}

export default CashflowStatement