import Row from '../layout/Row'

const DashboardPage = () => {
    
    const style = {
        page: {
            margin: '0 15%'
        },
        navBar: {
            width: '70%'
        },
        navItem: {

        }
    }

    return(
        <div style={style.page}>
            <div style={style.navBar}>
                <Row 
                    columns={[
                        <p>Dashboard</p>,
                        <p>Account</p>,
                        <p>Subscriptions</p>,
                        <p>Settings</p>,
                    ]}
                />
            </div>
        </div>
    )
}

export default DashboardPage