import { BsBarChart } from 'react-icons/bs'

const Article = ({ icon, title, body }) => {

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
            <h4 style={style.text}>{title}</h4>
            <p style={style.text}>{body}</p>
        </div>
    )
}

Article.defaultProps = {
    icon: <BsBarChart/>
}

export default Article