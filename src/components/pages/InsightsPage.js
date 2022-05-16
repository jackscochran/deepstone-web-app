import Hero from "../misc/Hero"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Row from "../layout/Row"
import Article from "../misc/Article"
import sectorIcons from "../../utils/specificIcons"

const InsightsPage = () => {
    const [companyList, setCompanyList] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
        if (!hasLoaded){
            fetchCompanyList()
            setHasLoaded(true)
        }
    })

    const fetchCompanyList = async() => {
        const res = await fetch(`https://deepstone-backend.herokuapp.com/api/trending`)
        const data = await res.json()
        setCompanyList(data)
    }

    return (
        <div className='narrow-container'>
            <Hero
                imgSrc='images/digitalArt2.jfif'
                title='Insights .'
                text={`We provides simplified stock market analysis for you to make the right decisions.`}
                textColor='black'
            />
            <div className='spacer-100'>
                <Row 
                    columns ={
                        companyList.map(company => (
                            <Link to={`/company/${company.ticker}`}>
                                <div className='card'>
                                    <Article key={company._id}
                                        icon={sectorIcons[company.sector]}
                                        title={company.companyName}
                                        secondary={company.ticker}
                                        body={company.industry}
                                    />
                                </div>
                            </Link>
                        ))
                    }
                />
            </div>
        </div>
    )
}

export default InsightsPage

