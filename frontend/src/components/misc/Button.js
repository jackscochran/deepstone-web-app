import { useState } from 'react'

const Button = ({ text, backgroundColor, textColor, onClick, width}) => {

    const [isSelected, setIsSelected] = useState(false)

    const style = {
        button: {
            color: textColor,
            backgroundColor: backgroundColor,
            padding: '20px',
            border: 'none',
            opacity: isSelected ? 0.8 : 1,
            width: width,
        }
    }

    return (
        <button 
            onMouseOver={() => {setIsSelected(true)}} 
            onMouseLeave={() => {setIsSelected(false)}} 
            type="button" 
            style={style.button} onClick={onClick}
        >{text}</button>
    )
}

export default Button