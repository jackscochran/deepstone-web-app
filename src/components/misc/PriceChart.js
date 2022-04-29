import { LineChart, Line, YAxis, XAxis, Tooltip, CartesianGrid } from 'recharts'

const PriceChart = ({ data }) => {
    return (
        <LineChart width={500} height={400} data={data}>
            <XAxis dataKey="date" />
             <YAxis />
             <Tooltip />
             <CartesianGrid strokeDasharray="6 6" />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
    )
}

export default PriceChart