import Statement from "./Statement"

const BalanceSheet = ({ data }) => {

    const statement = [
        {
            name: 'ASSETS',
            value: '$',
            cssClass: 'statement__header'
        },
        {
            name: 'Current Assets',
            value: null,
            cssClass: 'statement__line-item'
        },
        {
            name: 'Cash & Cash Equivalents',
            value: data ? data.cashAndCashEquivalents : null,
            cssClass: 'statement__item'
    },
        {
            name: 'Short-Term Investments',
            value: data ? data.shortTermInvestments : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Net Receivables',
            value: data ? data.netReceivables : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Inventory',
            value: data ? data.inventory : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Other Current Assets',
            value: data ? data.otherCurrentAssets : null,
            cssClass: 'statement__item'
        },
        {
            name: 'Total Current Assets',
            value: data ? data.totalCurrentAssets : null,
            cssClass: 'statement__line-item'
        },
    ]

    return(
        <Statement statement={statement} />
    )
}

export default BalanceSheet