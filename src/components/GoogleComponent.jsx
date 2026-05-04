const GoogleComponent = () => {
    
    const paragraph = {
        color: 'green',
        fontSize: '1.3em'
    }

    return (
        <div style={{color: 'blue', fontFamily: 'Arial, sansserif', textAlign: 'center', margin: '20px'}}>
            <h1>Google</h1>
            <p style={paragraph}>Organizing the world's information.</p>
        </div>
    )
}

export default GoogleComponent