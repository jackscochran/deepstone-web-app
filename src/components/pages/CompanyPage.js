import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Banner from '../misc/Banner'
import PriceChart from '../misc/PriceChart'
import Row from '../layout/Row'

import timeUtil from '../../utils/time'
import StatementCarousel from '../layout/StatementComparator'

const CompanyPage = () => {

    const [ticker, setTicker] = useState(useParams().ticker)
    const [dataIsReturned, setDataIsReturned] = useState(false)
    const [companyData, setCompanyData] = useState({})

    const [priceData, setPriceData] = useState({})
    const [priceStart, setPriceStart] = useState('2020-04-01')
    const [priceEnd, setPriceEnd] = useState(timeUtil.getCurrentDay())

    useEffect(() => {
        if (!dataIsReturned)
            loadData()
    })

    const loadData = () => {
        const loadCompany = async() => {
            const res = await fetch(`http://localhost:5000/api/company?ticker=${ticker}`)
            const data = await res.json()   
            setCompanyData(data[0])
        }

        const loadPriceData = async() => {
            const res = await fetch(`http://localhost:5000/api/market-prices?ticker=${ticker}&startDate=${priceStart}&endDate=${priceEnd}`)
            const data = await res.json()
            setPriceData(data)
        }

        loadCompany()
        loadPriceData()
        setDataIsReturned(true)
    }

    return (
        <div className='container'>
            <Row
                columns={[
                    <div>
                        <Banner 
                            primaryFirst={false}
                            primary={companyData.companyName}
                            secondary={ticker.toUpperCase()}
                        />
                        <hr/>
                    </div>,
                    <div>
                        <PriceChart data={priceData}/>
                    </div>
                
                ]}
                verticalAlignment='start'
            />
            <StatementCarousel ticker={ticker}/>

        </div>
    )
}

export default CompanyPage