import IncomeStatement from './statements/IncomeStatement'
import BalanceSheet from './statements/BalanceSheet'
import CashflowStatement from './statements/CashflowStatement'
import FinancialMetrics from './statements/FinancialMetrics'
import Banner from '../misc/Banner'
import formatStringUtil from '../../utils/formatStrings'

import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import { useState } from 'react'
import timeUtil from '../../utils/time'

const StatementComparator = ({ company, companyPeers, date, period, changePeriod, addCompany, removeCompany, changeDate }) => {

    const [selectedStatement, setSelectedStatement] = useState('financialMetrics')
    

    const statementElements = {
        'incomeStatement': [
            <IncomeStatement
                mainCompany={company} 
                companies={companyPeers.map(company => company.data)}
                statements={companyPeers.map(company => company.financials ? company.financials.incomeStatement : null)}
                addCompany={addCompany}
                removeCompany={removeCompany}
            />,
        ],
        'balanceSheet': [
            <BalanceSheet
                mainCompany={company} 
                companies={companyPeers.map(company => company.data)}
                statements={companyPeers.map(company => company.financials ? company.financials.balanceSheet : null)}
                addCompany={addCompany}
                removeCompany={removeCompany}
        />,
        ],
        'cashflowStatement': [
            <CashflowStatement
                mainCompany={company} 
                companies={companyPeers.map(company => company.data)}
                statements={companyPeers.map(company => company.financials ? company.financials.cashflowStatement : null)}
                addCompany={addCompany}
                removeCompany={removeCompany}
        />, 
        ],
        'financialMetrics': [
            <FinancialMetrics
                mainCompany={company} 
                companies={companyPeers.map(company => company.data)}
                statements={companyPeers.map(company => company.financials ? company.financials.financialMetrics : null)}
                addCompany={addCompany}
                removeCompany={removeCompany}
        />, 
        ],
    }

    const getDateMessage = (statement) => {
        const messages = {            
            'incomeStatement': `For the ${period === 'annual' ? 'year' : period} ending `,
            'balanceSheet': `As at `,
            'financialMetrics': `As of `,
            'cashflowStatement': `For the ${period === 'annual' ? 'year' : period} ending `
        }   
        return messages[statement]
    } 

    const changeStatement = (direction) => {
        const statementList = Object.keys(statementElements)
        let newIndex = statementList.indexOf(selectedStatement) + direction

        if (newIndex < 0)
            newIndex = statementList.length - 1

        if (newIndex === statementList.length)
            newIndex = 0

        setSelectedStatement(statementList[newIndex])
    }

    return (
        <>
            <Banner 
                topText = {
                    <span className='highlight-black' onClick={() => changePeriod()}>
                        {period === 'annual' ? 'ANNUAL' : 'QUARTERLY'}
                    </span>
                    }
                primary={<>
                    <BsCaretLeft className='text-muted highlight-black' onClick={() => changeStatement(-1)}/> 
                    {` ${formatStringUtil.camelToTitleCase(selectedStatement)} `} 
                    <BsCaretRight className='text-muted highlight-black' onClick={() => changeStatement(1)}/>
                    </>}
                secondary={<>
                    {getDateMessage(selectedStatement)}
                    <BsCaretLeft className='text-muted highlight-black' onClick={() => changeDate(-1)}/> 
                    {date}
                    {timeUtil.getCurrentDay() > timeUtil.addDays(date, period==='annual'?370:100) && <BsCaretRight className='text-muted highlight-black' onClick={() => changeDate(1)}/>}
                    </>}
            />
            {statementElements[selectedStatement]}
        </>
    )
}

StatementComparator.defaultProps = {

}

export default StatementComparator