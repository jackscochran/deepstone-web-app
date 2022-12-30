import Statement from "./Statement"

const IncomeStatement = ({ mainCompany, companies, statements, addCompany, removeCompany }) => {

    const getStatements = () => Object.keys(mainCompany).length > 0 ? [mainCompany.financials.incomeStatement].concat(statements) : []

    const incomeStatement = [
        {
            name: 'REVENUE',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: 'Total Revenue',
            values: getStatements().map(statement => statement ? statement.revenue : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Cost of Goods Sold',
            values: getStatements().map(statement => statement ? statement.costOfRevenue : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Gross Profit',
            values: getStatements().map(statement => statement ? statement.grossProfit : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'OPERATING EXPENSES',
            values: [],
            cssClass: 'statement__header'
        },
        {
            name: 'General & Administrative',
            values: getStatements().map(statement => statement ? statement.generalAndAdministrativeExpenses : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Selling & Marketing',
            values: getStatements().map(statement => statement ? statement.sellingAndMarketingExpenses : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Selling General & Administrative',
            values: getStatements().map(statement => statement ? statement.sellingGeneralAndAdministrativeExpenses : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Research & Development',
            values: getStatements().map(statement => statement ? statement.researchAndDevelopmentExpenses : null),
            cssClass: 'statement__item'
        },
        {
            name: 'Other Expenses',
            values: getStatements().map(statement => statement ? statement.otherExpenses : null),
            cssClass: 'statement__item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Total Operating Expenses',
            values: getStatements().map(statement => statement ? statement.operatingExpenses : null),
            cssClass: 'statement__line-total'
        },
        {
            name: 'EBITDA',
            values: getStatements().map(statement => statement ? statement.ebitda : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
           name: 'Deprectiation & Ammortization',
           values: getStatements().map(statement => statement ? statement.depreciationAndAmortization : null),
           cssClass: 'statement__item' 
        },
        {
            name: 'Operating Profit',
            values: getStatements().map(statement => statement ? statement.operatingIncome : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Interest Income',
            values: getStatements().map(statement => statement ? statement.interestIncome : null),
            cssClass: 'statement__item' 
         },
        {
           name: 'Less: Interest Expense',
           values: getStatements().map(statement => statement ? -statement.interestExpense : null),
           cssClass: 'statement__item' 
        },
        {
            name: 'Income Before Taxes',
            values: getStatements().map(statement => statement ? statement.incomeBeforeTax : null),
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            values: [],
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Income Tax Expense',
            values: getStatements().map(statement => statement ? statement.incomeTaxExpense : null),
            cssClass: 'statement__item' 
         },
         {
            name: 'Net Income',
            values: getStatements().map(statement => statement ? statement.netIncome : null),
            cssClass: 'statement__line-item'
        },

    ]

    return (
        <Statement 
            mainCompany={mainCompany.data}
            companies={companies} 
            statement={incomeStatement} 
            addCompany={addCompany} 
            removeCompany={removeCompany}
            />
    )   
}

export default IncomeStatement