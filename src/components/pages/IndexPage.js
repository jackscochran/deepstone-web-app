import Hero from '../misc/Hero'
import Banner from '../misc/Banner'
import Button from '../misc/Button'
import Row from '../layout/Row'
import Image from '../misc/Image'
import Article from '../misc/Article'
import { BsLaptop, BsFillBarChartFill, BsServer, BsLightbulb, BsPieChart, BsCloudUpload } from 'react-icons/bs'
 

const IndexPage = () => {

    return (
        <div>
            <Hero 
                imgSrc='images/citySkyline.jpg'
                title='Investing Made Simple.'
                text='With over 100 million data points we offer market beating insights and portfolio analysis'
                button={<Button 
                        text='LEARN MORE'
                        type='light'
                        onClick={null}
                        />}
            />
            <div className='spacer-100'>
                <Banner 
                    primaryFirst={false}
                    secondary='WHAT WE BELIEVE IN' 
                    primary='With our machine learning and A.I models we want to help you beat the Market'
                />
            </div>
            
            <div>
                <div className='spacer-100'>
                    <Banner 
                        primaryFirst={true}
                        primary='Start to invest like a pro' 
                        secondary='Everything you need to make your wealth Today!' 
                    />
                    <Row 
                        columns = {[
                            <Image 
                                imgSrc='images/officeStock1.jpeg'
                                isRounded={true}
                                alt='Stock Office Image'
                            />,
                            <Article 
                                icon={<BsLaptop/>}
                                title='Stock Insights'
                                body='With our machine learning and A.I model we analyze a stock through different metrics as well as simulating potential outcomes of the stock. Based on this we give a rating to a stock from 0-10.'
                            />
                            
                        ]}
                        verticalAlignment = 'center'
                    />
                    <Row 
                        columns = {[
                            <Article 
                                icon={<BsFillBarChartFill/>}
                                title='Portfolio Analysis'
                                body='We will backtest your portfolio over 20 years as well as simulating potential outcomes using machine learning and A.I models. using this we will provide stock reccomdations to boost your portfolios returns.'
                            />,
                            <Image 
                                imgSrc='images/officeStock2.jpeg'
                                isRounded={true}
                                alt='Stock Office Image'
                            />  
                        ]}
                        verticalAlignment = 'center'
                    />

                </div>
                <div className=' narrow-container'>
                    <Row 
                        columns = {[
                            <Article 
                                icon={<BsServer/>}
                                title='Stock Data'
                                body='With 15 thousand stocks in our portfolio we have stock performance, financials and industry ratios!'
                            />,
                            <Article 
                                icon={<BsLightbulb/>}
                                title='Stock Insights'
                                body='With our machine learning and A.I models we provide insights on 15 thousands stocks!'
                            />,
                            <Article 
                                icon={<BsPieChart/>}
                                title='Portfolio Analysis'
                                body='With our machine learning and A.I models we provide portfolio analysis and stock picks to boost your return!'
                            />,
                            <Article 
                                icon={<BsCloudUpload/>}
                                title='Monthly Updates'
                                body='We update all of the reccomdations (aside from daily stock price) monthly so you aways up to date!'
                            />
                        ]}
                        verticalAlignment = 'start'
                    />
                </div>
            </div>
        </div>
    )
}

export default IndexPage