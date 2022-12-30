import Hero from '../misc/Hero'
import Banner from '../misc/Banner'
import Row from '../layout/Row'
import Article from '../misc/Article'
import { BsBarChartLine, BsChevronDoubleRight, BsBucket, BsCalculator, BsXDiamond, BsAward } from 'react-icons/bs'


const AboutPage = () => {
    
    return(
        <>
            <div className='narrow-container'>
                <Hero 
                    imgSrc='images/digitalArt3.jpg'
                    title='About Us'
                    textColor='black'
                />
            </div>
            <div className='narrow-container'>
                <Banner 
                    primary='Bridging the gap between you and the stock market pros.'
                />
                <hr/>
                <br/>
                <p className='double-space text-center'>Our purpose is to help make young investors comfortable when making investments in the stock market, through a simple online stock analysis tool, backed by A.I.At ALIIAS we understand that when you start investing it can be overwhelming, but that is common. There can be a lot of confusing terms, concepts and trades that can seem like only rich or institutional investors (such as hedge funds) can invest and make good returns. But at ALIIAS we can give you the edge with investing you didn't think you had before. With in-depth stock analysis such as stock ratings, company financials and a A.I generated stock portfolio with returns that beat the S&P each year, you can grow your wealth like the stock market pros.</p>
                <br/>
                <hr/>
                <Banner 
                    primaryFirst={false}
                    secondary='WHAT WE ARE BEST AT'
                    primary='Our services'
                />
                <Row 
                    columns ={[
                        <Article
                            icon={<BsChevronDoubleRight/>}
                            title='Web Crawling'
                            body='Our software continously scrapes stock market and financial data for over 10,000 companies. We collect various points of historical data, including share price and quote data along with income, balance, and cash flow statements.'
                        />,
                        <Article
                            icon={<BsBucket/>}
                            title='Data Cleaning'
                            body='During and after collection, we clean and format the data for the companies we have collected. This includes joining information gathered from different sources and removing any companies with "dirty" data which could skew our results.'
                        />,
                        <Article
                            icon={<BsCalculator/>}
                            title='Ratio Calculations'
                            body='Using the data collected, for each company we calculate ratios such as EPS, profit margins, ROA, etc. These metrics are industry standards and are very effective at assesing both the financial health and historical stock performance of a business.
                            '
                        />,
                        <Article
                            icon={<BsXDiamond/>}
                            title='Training the Algorithm'
                            body='Using the clean and formatted data, our algorithm can learn from 10 years worth of company data and stock performance to find which metrics are the most reflective of future stock performance. This is done everyday using new data that has been collected.'
                        />,
                        <Article
                            icon={<BsAward/>}
                            title='Stock Ratings'
                            body="Now that the algorithm has been trained on past data, we can feed any current stock along with its ratios and metrics to get a rating that represents it's potential for future returns. Using this, everyday we collect data on and rate companies who have released their financials."
                        />,
                        <Article
                            icon={<BsBarChartLine/>}
                            title='Portfolio Creation'
                            body='Every month, we sell the stocks that have been held for a year and replace them with the top rated companies in our database. This creates a portfolio of companies that stand out amoung the rest, and offers strong yearly returns.'
                        />
                    ]}
                    verticalAlignment='start'
                />
            </div>
        </>
    )
}

export default AboutPage