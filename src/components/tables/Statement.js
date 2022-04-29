

const Statement = ({ statement }) => {
    return (
        <div>
            <table className='statement'>

                {statement && statement.map((item) => (
                    <tr className={item.cssClass}>
                        <td>{item.name}</td>
                        <td className='text-right'>{item.value}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default Statement