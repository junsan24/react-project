import TodoItem from "./TodoItem"

const TodoList = () => {
    
    const headerStyle = {
        marginLeft: '50px',
        fontFamily: 'Arial, sans-serif',
        color: '#444'
    }

    return (
        <div>
            <h1 style={headerStyle}>My Todo Lists</h1>
            <ul>
                <TodoItem description="Groceries" status={false} />
                <TodoItem description="Take a bath" status={true} />
                <TodoItem description="Eat lunch" status={true} />
            </ul>
        </div>
    )
}

export default TodoList