import formatStringUtil from '../../../utils/formatStrings'
import { BsPlusCircle, BsX } from 'react-icons/bs'
import { useState } from 'react'

const Statement = ({ mainCompany, companies, statement, addCompany, removeCompany }) => {

    const [results, setResults] = useState([])

    const fetchSearchResults = async(query) => {
        const res = await fetch(`https://deepstone-backend.herokuapp.com/api/company-search?query=${query}&n=7`)
        const data = await res.json()
        setResults(data)
    }

    const addToStatement = (ticker) => {
        addCompany(ticker)
        document.getElementById('searchBar').value = ''
    }

    const getColorGradient = (value, values) => {
        if (values.length === 1)
            return 'white'

        let sum = 0
        for (let i=0; i<values.length; i++)
            sum += values[i]

        let gradient = Math.abs(value/sum)*0.5
        if (value < 0)
            return `rgba(204, 75, 55, ${gradient})`
        else
            return `rgba(58, 219, 118, ${gradient})`
    }

    if(companies)
        return (
            <div className='center-content'>
                    <table className='statement'>
                        <thead>
                            <tr>
                                <td></td>
                                {mainCompany && <th className='text-right statemnet__header'>
                                    <span className=''>{mainCompany.companyName}</span>
                                </th>}
                                {companies && companies.map(company => (
                                    <th className='text-right'>
                                        <span 
                                            className='highlight-black' 
                                            onClick={()=>{
                                                window.location = `/company/${company.ticker}`
                                            }}
                                        >{company && company.companyName}</span>
                                        <span onClick={() => {removeCompany(company.ticker)}} className='highlight-black'><BsX className='statement__header'/></span>
                                    </th>
                                    ))}
                                <th className='text-muted statement__add'>
                                    <input 
                                        id='searchBar'
                                        list="browsers" 
                                        onKeyPress={(e) => (e.key === 'Enter' && addToStatement(e.target.value))}
                                        placeholder='Compare'
                                        onChange={(e) => fetchSearchResults(e.target.value)}
                                    /> <BsPlusCircle onClick={() => addToStatement(document.getElementById('searchBar').value)}/>
                                    <datalist id="browsers">
                                        {results.map((result) => (
                                            <option value={result.ticker}/>
                                        ))}
                                    </datalist>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {statement && statement.map((item) => (
                                <tr className={item.cssClass}>
                                    <td>{item.name}</td>
                                    {item.values.map((value) => (
                                        <td 
                                        style={{'backgroundColor': getColorGradient(value, item.values)}} 
                                        className='text-right'>
                                            {value === '' || !value ? 'N / A' : formatStringUtil.addCommasToNum(value)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        )
}

export default Statement