import Row from '../layout/Row'
import Banner from '../misc/Banner'
import PricingPlan from '../misc/PricingPlan'
import { Link } from 'react-router-dom'

const PlansAndPricingTable = () => {

    const style = {
        section: {
            textAlign: 'center'
        }
    }

    return (
        <div style={style.section}>
            <Banner 
                primary = 'Plans & Pricing'
                secondary = '30-Day money back gaurentee!'
            />
            <Row
                columns ={[
                    <PricingPlan
                        title='Free'
                        pricePerMonth={0}
                        numOfInsights={250}
                        numOfPortfolios={1}
                    />,
                    <PricingPlan
                        title='Starter'
                        pricePerMonth={3}
                        numOfInsights={1000}
                        numOfPortfolios={2}
                    />,
                    <PricingPlan
                        title='Pro'
                        pricePerMonth={5}
                        numOfInsights={2000}
                        numOfPortfolios={5}
                    />,
                    <PricingPlan
                        title='Pro+'
                        pricePerMonth={10}
                        numOfInsights={-1}
                        numOfPortfolios={-1}
                    />,
                ]}
                verticalAlignment='start'
            />
            <p>Neet More Information? Please</p>
            <Link to='/'>contact us</Link>
        </div>
    )
}

export default PlansAndPricingTable