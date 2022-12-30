import { BsBarChart } from 'react-icons/bs'

const Article = ({ icon, title, secondary, body }) => {

    const style = {
        container: {
        },
        text: {
            margin: '10px 0'
        }
    }

    return (
        <div style={style.container}>
            {icon && icon}
            <h4 style={style.text} >{title}</h4>
            <h5 className='text-muted'>{secondary}</h5>
            <hr/>
            <p >{body}</p>
        </div>
    )
}

Article.defaultProps = {
    icon: <BsBarChart/>
}

export default Article