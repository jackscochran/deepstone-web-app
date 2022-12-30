import Row from "../layout/Row"
import Banner from "../misc/Banner"
import formatStringUtil from "../../utils/formatStrings"

const CompanyPortfolio = ({ ticker, companyData }) => {
    
    const getProfileItems = () => {

        if (!companyData || !companyData.profile)
            return
        
        const items = ['price', 'beta', 'mktCap', 'exchange', 'website', 'fullTimeEmployees']
        const profile = {}

        for (const item of items){
            profile[item] = companyData.profile[item]
        }

        const column1 = []
        const column2 = []
        var i = 0
        for (const item in profile){
            if (i < Object.keys(profile).length/2){
                column1.push(
                    <p><b>{item}</b>: {formatStringUtil.addCommasToNum(profile[item])}</p>
                )
            }else{
                column2.push(
                    <p><b>{item}</b>: {formatStringUtil.addCommasToNum(profile[item])}</p>
                )
            }
            i = i + 1
        }
        return <>
            <br/>
            <p>{companyData.profile['description']}</p>
            <br/>
            <Row columns={[column1, column2]} verticalAlignment='start'/>
        </>
    }

    if (companyData)
        return (
            <>
                <Banner 
                    primaryFirst={false}
                    primary={companyData.companyName}
                    secondary={ticker.toUpperCase()}
                />
                <h5 >{companyData.sector}</h5>
                <h6>{companyData.industry}</h6>
                <br/>
                <hr/>
                {getProfileItems()}
            </>
        )
}

export default CompanyPortfolio