import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Banner from '../misc/Banner'
import PriceChart from '../misc/PriceChart'
import Row from '../layout/Row'

import timeUtil from '../../utils/time'
// import StatementCarousel from '../layout/StatementComparator'

const CompanyPage = () => {

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

    const getProfileItems = () => {
        const column1 = []
        const column2 = []
        var i = 0
        for (const item in companyData.profile){
            if (i < Object.keys(companyData.profile).length/2){
                column1.push(
                    <p><b>{item}</b>: {companyData.profile[item]}</p>
                )
            }else{
                column2.push(
                    <p><b>{item}</b>: {companyData.profile[item]}</p>
                )
            }
            i = i + 1
        }
        return <Row columns={[column1, column2]} verticalAlignment='start'/>
    }

    const ticker = useParams().ticker

    const style = {
        dateText: {
            textAlign: 'right',
            margin: '15px 30% 15px 10%'
        },
        dateInput: {
            marginLeft: '15px'
        }
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
                        {getProfileItems()}
                    </div>,
                    <div>
                        <Banner 
                            primary='Daily Price Data'
                            secondary={`Company: ${ticker}`}
                        />
                        <hr/>
                        <div style={style.dateText}>
                            <label for='startDate'>Start: </label><input style={style.dateInput} name='startDate' type='date' onChange={(e) => setPriceStart(e.target.value)} value={priceStart}></input>
                        </div>
                        <div style={style.dateText}>
                            <label for='endDate'>End: </label><input style={style.dateInput} name='endDate' type='date' onChange={(e) => setPriceEnd(e.target.value)} value={priceEnd}></input>
                        </div>
                        <br/>
                        <PriceChart data={priceData}/>
                    </div>
                
                ]}
                verticalAlignment='start'
            />
            {/* <StatementCarousel ticker={ticker}/> */}

        </div>
    )
}

export default CompanyPage