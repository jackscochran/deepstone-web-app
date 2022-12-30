import Logo from '../misc/Logo'

const Footer = () => {

    const style = {
        footer: {
            margin: '100px 15% 50px 15%'
        },
        copyright: {
            textAlign: 'center'
        }
    }

    return (
        <footer style={style.footer}>
            <div className='row'>
                <div className='col-sm-2 offset-sm-5'>
                    <Logo />
                </div>
                <div>
                    <p></p>
                </div>
            </div>
            <p style={style.copyright}><small>Copyright © 2022 Deepstone Capital.</small></p>
        </footer>
    )
}

export default Footer