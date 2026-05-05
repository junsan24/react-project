const BlueComponent = () => {
    return (
        <div style={{color: 'blue'}}>
            <h1>Blue Component</h1>
        </div>
    )
}

const GreenComponent = (props) => {
    return (
        <div style={{color: props.color}}>
            <h1>Green Component</h1>
            {props.children}
        </div>
    )
}

const OrangeComponent = ({color, children}) => {
    return (
        <div style={{color: color}}>
            <h1>Orange Component</h1>
            {children}
        </div>
    )
}

const RedComponent = ({color = 'red'}) => {
    return (
        <div style={{color: color}}>
            <h1>Red Component</h1>
        </div>
    )
}

const ColorComponent = ({color}) => {
    return (
        <div style={{color: color || 'blue'}}>
            <h1>{color || 'Blue'} Component</h1>
        </div>
    )
}

const UserDetails = (props) => {
    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Company: {props.company}</p>
        </div>
    )
}


const App = () => {
    
    const color = 'green'
    const userDetails = {
        name: 'John Doe',
        age: 30,
        company: 'Tech Company'
    }

    return (
        <>
            <BlueComponent />
            
            <GreenComponent color={color}>
                <p>This is a child element of GreenComponent.</p>
            </GreenComponent>

            <OrangeComponent color="orange">
                <p>This is a child element of OrangeComponent.</p>
            </OrangeComponent>

            <RedComponent />

            <ColorComponent color="purple" />

            <ColorComponent />

            <UserDetails name={userDetails.name} age={userDetails.age} company={userDetails.company} />

            <UserDetails {...userDetails} />
        </>
    )
}

export default App