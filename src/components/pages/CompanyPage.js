import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import timeUtil from '../../utils/time'
import StatementComparator from '../tables/StatementComparator'
import CompanyPortfolio from '../tables/CompanyPortfolio'
import PriceComparator from '../tables/PriceComparator'

const CompanyPage = () => {

    const ticker = useParams().ticker

    const [dataIsReturned, setDataIsReturned] = useState(false)
    const [companyData, setCompanyData] = useState({})
    const [companyPeers, setCompanyPeers] = useState(
        [
            // {
            //     ticker: ticker,
            //     data: company,
            //     prices: {},
            //     financials: {}
            // }
        ]
    )

    const [dateUnit, setDateUnit] = useState('month')
    const [dateRange, setDateRange] = useState(6)
    const [priceEnd, setPriceEnd] = useState(timeUtil.getCurrentDay())
    const [priceStart, setPriceStart] = useState(timeUtil.addDays(priceEnd, -6*30))


    const [financialsDate, setFinancialsDate] = useState(timeUtil.getCurrentDay())
    const [period, setPeriod] = useState('quarter')

    useEffect(() => {
        if (!dataIsReturned){
            loadData(ticker, priceStart, priceEnd, financialsDate, period)
        }
    })
    const loadData = async(ticker, priceStart, priceEnd, financialsDate, period) => {
        setCompanyData(await fetchCompany(ticker, priceStart, priceEnd, financialsDate, period))
        setDataIsReturned(true)
    }
    const loadPeerData = async(companyPeers, priceStart, priceEnd, financialsDate, period) => {
        let newPeers = []
        for(let i=0; i<companyPeers.length; i++){
            const newPeer = await fetchCompany(companyPeers[i].ticker, priceStart, priceEnd, financialsDate, period)
            newPeers.push(newPeer)
        }
        setCompanyPeers(newPeers)
    }
    const reload = async(companyPeers, priceStart, priceEnd, financialsDate, period) => {
        loadData(ticker, priceStart, priceEnd, financialsDate, period)  
        loadPeerData(companyPeers, priceStart, priceEnd, financialsDate, period)
    }


    const addCompany = async(ticker) => {
        let newCompany = await fetchCompany(ticker, priceStart, priceEnd, financialsDate, period)
        if(newCompany.data && (companyPeers.length === companyPeers.filter(peer => peer.ticker !== ticker).length)){
            companyPeers.push(newCompany)
            setCompanyPeers(companyPeers)
        }
        reload(companyPeers, priceEnd, priceEnd, financialsDate, period)
        
    }
    const removeCompany = (ticker) => {
        setCompanyPeers(companyPeers.filter(peer => peer.ticker !== ticker))
    }
    const fetchCompany = async(ticker, priceStart, priceEnd, financialsDate, period) => {
        const fetchCompanyData = async(ticker) => {
            const res = await fetch(`https://deepstone-backend.herokuapp.com/api/company?ticker=${ticker}`)
            return await res.json()
        }
        const fetchPriceData = async(ticker, priceStart, priceEnd) => {
            const res = await fetch(`https://deepstone-backend.herokuapp.com/api/market-prices?ticker=${ticker}&startDate=${priceStart}&endDate=${priceEnd}`)
            return res.json()
        }
        const fetchFinancials = async(ticker, date, period) => {
            const res = await fetch(`http://deepstone-backend.herokuapp.com/api/financials?ticker=${ticker}&date=${date}&period=${period}`)
            return res.json()
        }
        const financials = await fetchFinancials(ticker, financialsDate, period)
        if (financials)
            setFinancialsDate(financials.date)
        return {
            ticker: ticker,
            data: (await fetchCompanyData(ticker))[0],
            prices: await fetchPriceData(ticker, priceStart, priceEnd),
            financials: financials
        }
    }


    const changePriceStart = (newDate) => {
        setPriceStart(newDate)
        reload(companyPeers, newDate, priceEnd, financialsDate, period)
        loadDateRange(newDate, priceEnd)
    }   
    const changePriceEnd = (newDate) => {
        setPriceEnd(newDate)
        reload(companyPeers, priceStart, newDate, financialsDate, period)
        loadDateRange(priceStart, newDate)
    }   

    const loadDateRange = (startDate, endDate) => {
        const differenceInDays = timeUtil.getDifferenceInDays(startDate, endDate)
        if (differenceInDays < 30){
            setDateUnit('day')
            setDateRange(differenceInDays)
            return
        }
        const differenceInMonths = Math.round(differenceInDays / 30)
        if (differenceInMonths < 12){
            setDateUnit('month')
            setDateRange(differenceInMonths)
            return
        }
        const differenceInYears = Math.round(differenceInMonths / 12)
        setDateUnit('year')
        setDateRange(differenceInYears)
    }
    const iterateDateRange = (direction) => {
        let newDateRange = dateRange + direction
        if (newDateRange < 1)
            toggleDateUnit()
        else
            changeDateRange(newDateRange, dateUnit)
    }
    const toggleDateUnit = () => {
        if (dateUnit === 'year'){
            changeDateRange(6, 'month')
        }else if(dateUnit === 'month'){
            changeDateRange(7, 'day')
        }else{
            changeDateRange(2, 'year')
        }
    }
    const changeDateRange = (newRange, newUnit) => {
        const getDateRangeInDays = (range) => {
            const days = {
                'day': range,
                'month': range * 30,
                'year': range * 360
            }
            return days[newUnit]
        }
    
        const newPriceStart = timeUtil.addDays(priceEnd, -getDateRangeInDays(newRange)) 
        setPriceStart(newPriceStart)
        setDateRange(newRange)
        setDateUnit(newUnit)
        reload(companyPeers, newPriceStart, priceEnd, financialsDate, period)
    }


    const changeFinancialsDate = (direction) => {

        let newDate = timeUtil.addDays(financialsDate, 
            (period === 'annual' ? 
                (direction > 0) ? 370 : -360
                :
                (direction > 0) ? 100 : -90
            )
        )
        
        setFinancialsDate(newDate)
        reload(companyPeers, priceStart, priceEnd, newDate, period)
    }
    const changePeriod = () => {
        let newPeriod = period === 'annual' ? 'quarter' : 'annual'
        setPeriod(newPeriod)
        reload(companyPeers, priceStart, priceEnd, financialsDate, newPeriod)
    }

    return (
        <div className='container'>
            <div  className='narrow-container'>
                <CompanyPortfolio 
                    ticker={ticker} 
                    companyData={companyData.data}
                />
            </div>
            <div  className='card vertical-space'>
                <PriceComparator 
                    companyData={companyData} 
                    companyPeers={companyPeers}
                    priceStart={priceStart} 
                    changePriceStart={changePriceStart}
                    priceEnd={priceEnd}
                    changePriceEnd={changePriceEnd}
                    dateUnit={dateUnit}
                    toggleDateUnit={toggleDateUnit}
                    dateRange={dateRange}
                    iterateDateRange={iterateDateRange}
                />
            </div>
            <div>
                <StatementComparator 
                    company={companyData}
                    companyPeers={companyPeers}
                    date={financialsDate}
                    period={period}
                    changePeriod={changePeriod}
                    addCompany={addCompany}
                    removeCompany={removeCompany}
                    changeDate = {changeFinancialsDate}
                />
            </div>

        </div>
    )
}


export default CompanyPage