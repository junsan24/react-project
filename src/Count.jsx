import { useState } from "react";

const Count = () => {
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('black')

    let count = 0;
    
    const increment = () => {
        count++;
        console.log(count)
    }

    

    const incrementCounter = () => {
        let newCounter = counter + 1
        
        newCounter%2==0 ? setColor('green') : setColor('blue')
        
        setCounter(newCounter)
        console.log('Counter: '+ counter)
        console.log('New Counter: '+ newCounter)  
    }

    return(
        <>
            Count: {count} 
            <br />
            <button onClick={increment}>Increment</button>
            <br /><br />
            <span style={{color}}>Counter: {counter}</span>
            <br />
            <button onClick={incrementCounter}>Increment Counter</button>
        </>
    )
}

export default Count