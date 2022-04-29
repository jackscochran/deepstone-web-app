const Row = ({ columns, verticalAlignment }) => {

    const style = {
        row: {
            margin: '80px 0'
        },
        column: {
            margin: '0 20px'
        }
    }

    return (
        <div style={style.row} className={`row align-items-${verticalAlignment}`}>
            {columns.map(column => (
                <div style={style.column} className='col-sm'>{column}</div>
            ))}
            
        </div>
    )
}

export default Row 