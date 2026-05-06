import { useState } from "react"
import { produce }  from "immer"

const App = () => {
    const [user, setUser] = useState({
        name: 'Bob',
        details: {
            age: 30,
            city: 'New York'
        }
    })

    const wrongUpdate = () => {
        user.name = 'Alice'
        setUser(user)
    }

    const updateUser = () => {
        setUser({...user, name: 'Alice'})
    }
    
    const updateLocation = () => {
        setUser({
            ...user,
            details:{
                ...user.details,
                city: 'Los Angeles'
            }   
        })
    }

    const updateAge = () => {
        setUser(produce(user, draft => {
            draft.details.age = 31
        }))
    }

    return (
       <>
            <button onClick={wrongUpdate} type="button">Wrong to Update</button>
            <br />
            <button onClick={updateUser} type="button">Update User</button>
            <br />
            <button onClick={updateLocation}>Update Location</button>
            <br />
            <button onClick={updateAge}>Update Age with Immer</button>
            <p>Name: {user.name}</p>
            <p>Age: {user.details.age}</p>
            <p>City: {user.details.city}</p>
       </>
    )
}

export default App