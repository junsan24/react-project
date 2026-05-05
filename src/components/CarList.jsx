const CarList = ({make}) => {
    
    const cars = [
        { id: 1, make: 'Toyota', model: 'Canary' },
        { id: 2, make: 'Tesla', model: 'Model 3' },
        { id: 3, make: 'Toyota', model: 'Corolla' },
        { id: 4, make: 'Tesla', model: 'Model S' }
    ]

    const filteredCars = cars.filter((car) => make ? car.make === make : cars)

    return (
        <>
            <h2>Car List</h2>
            <ul>
                {filteredCars.map((car) => (
                    <li key={car.id}>
                        <h3>Make: {car.make}</h3>
                        <p>Model: {car.model}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CarList