import Banner from '../misc/Banner'
import Row from '../layout/Row'

const ContactPage = () => {

    return (
            <div className='center-content'>
                <div className='panel'>
                    <Banner 
                        topText='Let us know your thoughts!'
                        primary='Send us a message'
                    />
                </div>
                <div className='panel'>
                    <Banner 
                        topText='Know how to get it touch.'
                        primary='Our contact information'
                    />
                </div>
            </div>
        )
}

export default ContactPage