import PropTypes from 'prop-types'

const Banner = ({ primaryFirst, primary, secondary, topText}) => {

    const bannerStyle = {
        textAlign: 'center',
        margin: '120px 60px 50px 60px'
    }

    return (
        <div style={bannerStyle}>
            {topText && <p>{topText}</p>}
            {!primaryFirst && <h4><small class='text-muted'>{secondary}</small></h4>}
            <h3>{primary}</h3>
            {primaryFirst && <h4><small class='text-muted'>{secondary}</small></h4>}
        </div>
    )
}

Banner.defaultProps = {
    primaryFirst: true
}

export default Banner