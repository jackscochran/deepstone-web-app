import { LineChart, Line, YAxis, XAxis, Tooltip, CartesianGrid } from 'recharts'

const PriceChart = ({ data }) => {

    const didStockIncrease = () => {
        if (data)
            return data[0]['price'] < data[data.length - 1]['price']
    }

    const conditionalStyle = () => {
        return {
            color: didStockIncrease() ? 'green' : 'red'
        }
    }

    if (data && data.length > 0)
        return ( 
            <div className='center-content'>
                <LineChart width={800} height={300} data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="6 6" />
                    <Line type="monotone" dataKey="price" stroke={didStockIncrease() ? 'green' : 'red'} dot={false}/>
                </LineChart>
                <div style={{margin: '50px'}}>
                    <h1 style={conditionalStyle()} className='display-5'>{Math.round(((data[data.length-1]['price'] / data[0]['price'])-1)*10000)/100}%</h1>
                    <h2 className=' text-muted'>{didStockIncrease() ? 'increase.' : 'decrease.'}</h2>
                </div>
            </div>
        )
}

export default PriceChart