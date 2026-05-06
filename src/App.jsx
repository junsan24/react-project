const App = () => {
    let count = 0

    const handleClick = () => console.log('React is fun again!')

    const handleIncrement = () => {
        count++
        console.log(count)
    }

    return (
        <>
            <button onClick={() => console.log('React is fun!')}>Click me</button>
            <br/><br/>
            <button onClick={handleClick}>Click me again</button>
            <br/><br/>
            <button onClick={handleIncrement}>Increment button</button>
        </>
    )
}

export default App