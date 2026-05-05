const ShoppingList = ({items}) => {

    const extendedItems = [
        ...items,
        { id: 4, name: 'Cocomilk'}
    ]

    return (
        <ul>
            {extendedItems.map((item) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    )
}

const App = () => {
    
    const items = [
        { id: 1, name: 'Bread' },
        { id: 2, name: 'Milk' },
        { id: 3, name: 'Eggs' },
    ]
    
    return (
        <>
            <ShoppingList items={items} />
        </>
    )
}

export default App