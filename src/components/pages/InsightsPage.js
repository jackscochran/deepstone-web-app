import Hero from "../misc/Hero"
import SearchInterface from "../layout/SearchInterface"

const InsightsPage = () => {
    return (
        <div>
            <Hero
                imgSrc='images/virtualBrain.jpg'
                title='Insights'
                text={`We provides simplified stock market analysis for you to make the right decisions.`}
            />
            <SearchInterface />
        </div>
    )
}

export default InsightsPage