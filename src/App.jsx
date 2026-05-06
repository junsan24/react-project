import Button from './components/Button'

const App = () => {
    
    const greetings = () => console.log('Hello World!')

    const changeToGreen = () => {
        document.body.style.backgroundColor = "lightgreen"
    }

    const changeToBlue = () => {
        document.body.style.backgroundColor = "lightblue"
    }

    return (
        <>
            <Button onButtonClick={greetings} >
                Greetings!
            </Button>
            <br/><br/>
            <Button onButtonClick={changeToGreen}>
                Change to Green
            </Button>
            <br/><br/>
            <Button onButtonClick={changeToBlue}>
                Change to Blue
            </Button>
        </>
    )
}

export default App