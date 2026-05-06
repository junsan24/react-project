const App = () => {
    
    const handleClickEvent = (event) => {
        event.preventDefault()
        console.log('Link prevented')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted')
        const formData = new FormData(event.currentTarget)
        const message = formData.get('message')
        console.log('Message: '+ message)
    }

    return (
        <>
            <a href="https://example.com" onClick={handleClickEvent}>Link</a>
            <br/>
            <br/>
            <form onSubmit={handleFormSubmit} style={{display: 'flex', gap: '10px'}}>
                <input type="text" name="message" placeholder="Enter your message" style={{padding: '5px'}} />
                <button type="submit">Send Message</button>
            </form>
        </>
    )
}

export default App