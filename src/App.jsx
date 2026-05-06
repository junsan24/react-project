import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    const icrementFunction = () => {
        setCount(a => a + 1)
        setCount(b => b + 1)
        setCount(c => c + 1)
    }

    return (
        <div style={{textAlign: 'center', marginTop: '40px'}}>
            Count: {count}
            <br />
            <button onClick={increment}>Increment</button>
            <br /><br />
            <button onClick={icrementFunction}>Increment Function</button>
        </div>
    )
}

export default App