const App = () => {
    
    const userName = 'Jack'
    const grettings = (userName) => (<h2>Hello {userName}</h2>) 

    const userInfo = {
        name: 'Jane',
        age: 23
    }

    const headerStyles = {
        color: 'blue',
        fontSize: 32
    }

    return (
        <>
            <h1>Hello World!</h1>
            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</p>
            <img src="images/nature.jpg" width="400" alt="Nature" />
            <br />
            <input type="text" name="name" placeholder="Enter your name" autoComplete="off" />
            
            <h2>Hi {userName}!</h2>
            {grettings(userName)}
            <div>Name is {userInfo.name} and age is {userInfo.age}</div>
            <h2 style={headerStyles}>Header Style</h2>
        
        </>
    )
}

export default App