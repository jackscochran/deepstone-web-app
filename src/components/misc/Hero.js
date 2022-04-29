const Hero = ({ imgSrc, title, text, button}) => {

    const style = {
        container: {
            backgroundImage: `url(${imgSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '8% 5% 15% 5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '25px',
        },
        text: {
            textAlign: 'center',
            color: 'white',
        },
    }

    return(
        <div style={style.container}>
            {title && <h1 className='display-1' style={style.text}>{title}</h1>}
            {text && <p style={style.text}>{text}</p>}
            <br/>
            {button && button}
        </div>
    )
}

export default Hero