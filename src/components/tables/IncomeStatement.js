import Statement from "./Statement"

const IncomeStatement = ({ data }) => {

    const statement = [
        {
            name: 'REVENUE',
            value: '$',
            cssClass: 'statement__header'
        },
        {
            name: 'Total Revenue',
            value: data ? data.revenue : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Cost of Goods Sold',
            value: data ? data.costOfRevenue : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Gross Profit',
            value: data ? data.grossProfit : null,
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            value: null,
            cssClass: 'statement__empty-row'
        },
        {
            name: 'OPERATING EXPENSES',
            value: null,
            cssClass: 'statement__header'
        },
        {
            name: 'General & Administrative',
            value: data ? data.generalAndAdministrativeExpenses : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Selling & Marketing',
            value: data ? data.sellingAndMarketingExpenses : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Selling General & Administrative',
            value: data ? data.sellingGeneralAndAdministrativeExpenses : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Research & Development',
            value: data ? data.researchAndDevelopmentExpenses : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Other Expenses',
            value: data ? data.otherExpenses : null,
            cssClass: 'statement__item'
        },
        {
            name: null,
            value: null,
            cssClass: 'statement__empty-row'
        },

        {
            name: 'Total Operating Expenses',
            value: data ? data.operatingExpenses : null,
            cssClass: 'statement__line-total'
        },
        {
            name: 'EBITDA',
            value: data ? data.grossProfit : null,
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            value: null,
            cssClass: 'statement__empty-row'
        },
        {
           name: 'Deprectiation & Ammortization',
           value: data ? data.depreciationAndAmortization : null,
           cssClass: 'statement__item' 
        },
        {
            name: 'Operating Profit',
            value: data ? data.grossProfit : null,
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            value: null,
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Interest Income',
            value: data ? data.interestIncome : null,
            cssClass: 'statement__item' 
         },
        {
           name: 'Less: Interest Expense',
           value: data ? data.interestExpense : null,
           cssClass: 'statement__item' 
        },
        {
            name: 'Income Before Taxes',
            value: data ? data.grossProfit : null,
            cssClass: 'statement__line-item'
        },
        {
            name: null,
            value: null,
            cssClass: 'statement__empty-row'
        },
        {
            name: 'Income Tax Expense',
            value: data ? data.interestIncome : null,
            cssClass: 'statement__item' 
         },
         {
            name: 'Net Income',
            value: data ? data.grossProfit : null,
            cssClass: 'statement__line-item'
        },

    ]

    return (
        <Statement statement={statement}/>
    )   
}

export default IncomeStatement