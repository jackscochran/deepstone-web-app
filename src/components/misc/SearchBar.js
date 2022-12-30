const SearchBar = ({ onChange, query }) => {

    const style = {
        container: {
            textAlign: 'center'
            },
        bar: {
            width: '100%',
            height: '3.5rem',
            lineHieght: '2',
            fontSize: '18px'
        }
    }

    return (
        <div style={style.container}>
            <input value={query} onChange={(e) => onChange(e.target.value)} style={style.bar} autoComplete="off" placeholder="Netflix, NFLX " type="search" />,
        </div>
    )
}

SearchBar.defaultProps = {
    query: ''
}

export default SearchBar