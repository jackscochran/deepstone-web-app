import SearchBar from "../misc/SearchBar"
import Banner from '../misc/Banner'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Article from "../misc/Article"
import Row from "./Row"

const SearchInterface = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const updateQuery = (newQuery) => {
        setQuery(newQuery)
        fetchSearchResults(newQuery)
    }

    const fetchSearchResults = async(query) => {
        const res = await fetch(`/api/company-search?query=${query}`)
        const data = await res.json()
        setResults(data)
    }

    return(
        <div className='container'>
            <Banner 
                primaryFirst={false}
                secondary='FIND DATA'
                primary='Search through our database of over 10,000 stocks'
            />
            <SearchBar onChange={updateQuery} query={query}/>
            <Row
                columns = {results.map((company) => (
                    <Link to={`/company/${company.ticker}`}>
                        <Article key={company._id}
                            title={company.companyName}
                            body={company.sector}
                        />
                        <hr/>
                    </Link>
                ))}
                verticalAlignment='start'
            />

        </div>
    )
}  

export default SearchInterface