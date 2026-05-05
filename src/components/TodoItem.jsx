const TodoItem = ({description, status}) => {
    
    const listStyle = {
        padding: '10px',
        margin: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <>
            <li style={listStyle}>
                {description} {status && ' ✔️.'}
            </li>
        </>
    )
}

export default TodoItem