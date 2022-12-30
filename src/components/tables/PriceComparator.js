import PriceChart from '../charts/PriceChart'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import Banner from '../misc/Banner'

const PriceComparator = ( {companyData, companyPeers, priceStart, changePriceStart, priceEnd, changePriceEnd, dateUnit, toggleDateUnit, dateRange, iterateDateRange} ) => {

    const getDateUnitString = (isPlural) => {
        const unitStrings = {
            'day': 'Day',
            'month': 'Month',
            'year': 'Year'
        }

        if(isPlural)
            return unitStrings[dateUnit] + 's'

        return unitStrings[dateUnit]
    }

    const style = {
        dateText: {
            margin: '15px 30% 15px 10%',
            width: '100%',
        },
        dateInput: {
            marginLeft: '15px',
            // width: '50%'
        }
    }

    if (companyData)
        return (
            <div className='narrow-container'>
                <div className=''>
                    <Banner 
                        primary='Daily Price Data'
                        secondary={<>
                            <BsCaretLeft className='highlight-black' onClick={() => iterateDateRange(-1)}/> {dateRange} <span className='highlight-black' onClick={() => toggleDateUnit()}>{getDateUnitString(dateRange > 1)}</span> <BsCaretRight className='highlight-black' onClick={() => iterateDateRange(1)}/></>}
                    />
                </div>
                <div className='price-chart__control'>
                    <div style={{width: '100%'}} className='price-chart__control-date-values'>
                        <div style={style.dateText}>
                            <label htmlFor='startDate'>Start: </label><input style={style.dateInput} name='startDate' type='date' onChange={(e) => changePriceStart(e.target.value)} value={priceStart}></input>
                        </div>
                        <div style={style.dateText}>
                            <label htmlFor='endDate'>End: </label><input style={style.dateInput} name='endDate' type='date' onChange={(e) => changePriceEnd(e.target.value)} value={priceEnd}></input>
                        </div>
                    </div>
                </div>
                <div>
                    <PriceChart data={companyData.prices}/>
                </div>
            </div>
        )

}

export default PriceComparator