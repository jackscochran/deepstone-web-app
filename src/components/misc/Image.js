
const Image = ({ imgSrc, isRounded, alt }) => {
    const style = {
        image: {
            borderRadius: isRounded ? '10%' : '0',
            maxWidth: '100%'
        }
    }

    return (
        <img style={style.image} src={imgSrc} alt={alt}></img>
    )
}

export default Image