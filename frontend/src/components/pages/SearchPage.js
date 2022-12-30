import Hero from "../misc/Hero"
import SearchInterface from "../layout/SearchInterface"

const SearchPage = () => {
    return (
        <div className='narrow-container'>
            <Hero
                // imgSrc='images/digitalArt2.jfif'
                title='Search .'
                text={`Find stocks of your interest and use tools to provide deeper analysis.`}
                textColor='black'
            />
            <SearchInterface />
        </div>
    )
}

export default SearchPage