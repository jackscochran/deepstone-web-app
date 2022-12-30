const Row = ({ columns, verticalAlignment }) => {


    return (
        <div className={`row align-items-${verticalAlignment} center-content`}>
            {columns.map((column, index) => (
                <div key={index} className='col-lg-3 col-md-6 row__column'>{column}</div>
            ))}
            
        </div>
    )
}

Row.defaultProps = {
    verticalAlignment: 'start'
}

export default Row 