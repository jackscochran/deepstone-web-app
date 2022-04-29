import IncomeStatement from '../tables/IncomeStatement'
import BalanceSheet from '../tables/BalanceSheet'
import CashflowStatement from '../tables/CashflowStatement'
import FinancialMetrics from '../tables/FinancialMetrics'
import Banner from '../misc/Banner'
import timeUtil from '../../utils/time'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import Row from './Row'

const StatementComparator = ({ ticker }) => {

    const [dataIsReturned, setDataIsReturned] = useState(false)
    
    const [financials, setFinancials] = useState({})
    const [comparingFinancials, setComparingFinancials] = useState({})

    const [date, setDate] = useState(timeUtil.getCurrentDay())
    const [period, setPeriod] = useState('annual')

    const [selectedStatement, setSelectedStatement] = useState('incomeStatement')

    const statements = {
        'incomeStatement': [
            <IncomeStatement data={financials.incomeStatement}/>,
            <IncomeStatement data={comparingFinancials.incomeStatement}/>,
        ],
        'balanceSheet': [
            <BalanceSheet data={financials.balanceSheet}/>,
            <BalanceSheet data={comparingFinancials.balanceSheet}/>,
        ],
        'cashflowStatement': [
            <CashflowStatement data={financials.cashflowStatement}/>, 
            <CashflowStatement data={comparingFinancials.cashflowStatement}/>
        ],
        'financialMetrics': [
            <FinancialMetrics data={financials.financialMetrics}/>, 
            <FinancialMetrics data={comparingFinancials.financialMetrics}/>
        ],
    }

    const dateMessage = {
        'incomeStatement': `For the ${period === 'annual' ? 'year' : period} ending ${financials.date}`,
        'balanceSheet': `As at ${financials.date}`
    }

    useEffect(() => {
        if (!dataIsReturned)
            loadData()
    })

    const loadData = () => {

        const loadFinancials = async() => {
            const res = await fetch(`http://localhost:5000/api/financials?ticker=${ticker}&date=${date}&period=${period}`)
            const data = await res.json()
            setFinancials(data)
        }

        loadFinancials()
        setDataIsReturned(true)
        console.log('Data has been loaded')
    }

    return (
        <div>
            <Banner 
                topText = {<><BsArrowLeftCircle /> <p>{(period == 'annual' ? 'ANNUAL' : 'QUARTERLY')}</p> </>}
                primary={selectedStatement}
                secondary={dateMessage[selectedStatement]}
            />
            <hr/>
            <Row 
                columns={statements[selectedStatement]}
                verticalAlign='start'
            />
        </div>
    )
}

StatementComparator.defaultProps = {

}

export default StatementComparator