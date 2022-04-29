import Button from './Button'

const PricingPlan = ({ title, pricePerMonth, numOfInsights, numOfPortfolios }) => {
    
    const style = {
        section: {
            textAlign: 'left'
        },
        bold: {
            color: '#489fd9'
        }
    }
    
    return (
        <div style={style.section}>
            <h4>{title}</h4>
            <p>
                <b style={style.bold}>{pricePerMonth == 0 ? 'free' : `$${pricePerMonth}`}</b>
                {pricePerMonth != 0 && ' /month'}
            </p>
            <p>
                <b style={style.bold}>{numOfInsights < 0 ? 'Infinite' : numOfInsights}</b>
                {' Stock Insights'}
            </p>
            <p>
                <b style={style.bold}>{numOfPortfolios < 0 ? 'Infinite' : numOfPortfolios}</b>
                {' Personal Portfolio Analysis'}
            </p>
            <hr/>
            <p><b>Email</b> and <b>Phone</b> Support</p>
            <p><b>Monthly</b> Updates</p>
            <Button 
                text='Choose Plan'
                backgroundColor='black'
                textColor='white'
            />
        </div>
    )
}

export default PricingPlan