import { BsSearch } from 'react-icons/bs'

import Row from '../layout/Row'
import Button from './Button'

const SearchBar = ({ onChange }) => {

    const style = {
        container: {
            textAlign: 'center'
            },
        bar: {
            width: '100%',
            height: '3.5rem',
            borderRadius: '15px',
            lineHieght: '2',
            fontSize: '18px'
        }
    }

    return (
        <div style={style.container}>
            <input onChange={(e) => onChange(e.target.value)} style={style.bar} autocomplete="off" placeholder="Netflix, NFLX " type="search" />,
        </div>
    )
}

export default SearchBar