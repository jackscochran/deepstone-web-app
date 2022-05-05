const Banner = ({ primaryFirst, primary, secondary, topText}) => {

    const style = {
        banner: {
            textAlign: 'center',
            margin: '80px 60px'
        }
    }

    return (
        <div style={style.banner}>
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