import { useState } from "react"
import { produce } from "immer"
import { Trash, RefreshCcw, Pointer} from 'lucide-react'


const App = () => {
    const [animals, setAnimals] = useState([
        { id: 1, name: "Cheetah", speed: 120 },
        { id: 2, name: "Peregrine Falcon", speed: 389 },
        { id: 3, name: "Sailfish", speed: 110 },
        { id: 4, name: "Pronghorn Antelope", speed: 88 }
    ])

    const animalOptions = [
        { id: 5, name: "Sloth", speed: 23 },
        { id: 6, name: "Jaguar", speed: 150 },
        { id: 7, name: "Greyhound", speed: 72 },
        { id: 8, name: "Horse", speed: 88 },
        { id: 9, name: "Lion", speed: 80 },
        { id: 10, name: "Kangaroo", speed: 71 }
    ]
    
    const addAnimal = () => {
        const newAnimal = { id: 5, name: "Sloth", speed: 66 }
        setAnimals([...animals, newAnimal]) // Correct way to add an animal
    }

    const addIncorrect = () => {
        const newAnimal = animals
        newAnimal.push({ id: 11, name: "Sloth", speed: 89 })
        setAnimals(newAnimal)
    }

    const addAnimalImmer = () => {
        setAnimals(produce(animals, draft => {
            let x = Math.floor(Math.random() * animalOptions.length)
            let newAnimal = animalOptions[x]
            console.log(newAnimal)
            let findAnimal = animals.find(animal => animal.id === newAnimal.id);
            !findAnimal && draft.push(newAnimal)                  
        }))
    }

    const removeAnimal = (id) => {
        setAnimals(animals.filter(animal => animal.id !== id))
    }

    const refreshAnimal = (id) => {
        const availableAnimals = animalOptions.filter(animal => id !== animal.id)
        const replaceAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)]
        let findAnimal = animals.find(animal => animal.id === replaceAnimal.id);
        !findAnimal && setAnimals(animals.map(animal => animal.id === id ? {...animal, ...replaceAnimal} : animal))
    }

    const sortAnimal = () => {
        setAnimals([...animals].sort((a, b) => {
            return a.speed - b.speed
        }))
    }

    return (
       <div style={{padding: "20px", fontFamily: "Arial"}}>
            <h2>Animals and their Speeds</h2>
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id} style={{ marginBottom: "10px" }}>
                        <strong>{animal.name}</strong>: {animal.speed} km/h
                        <RefreshCcw onClick={() => refreshAnimal(animal.id)} style={{cursor: "pointer", marginLeft: '10px'}} />
                        <Trash onClick={() => removeAnimal(animal.id)} style={{cursor: "pointer", marginLeft: '5px'}} />
                    </li>
                ))}
            </ul>
            <button onClick={addIncorrect}>Add Animal Incorrect</button>
            <br /><br />
            <button onClick={addAnimal}>Add Animal Correctly</button>
            <br /><br />
            <button onClick={addAnimalImmer}>Add Animal using Immer</button>
            <br /><br />
            <button onClick={sortAnimal}>Sort Animal</button>            
       </div>
    )
}

export default App