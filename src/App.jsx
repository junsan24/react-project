const App = () => {
    
    const onClickParent = () => console.log('Parent clicked.')

    const onClickChild = () => console.log('Child clicked.')

    const onClickSecondChild = (e) => {
        e.stopPropagation()
        console.log('Second Child clicked')
    }

    return (
        <>
            <div onClick={onClickParent} style={{
                padding: '40px',
                textAlign: 'center',
                backgroundColor: 'lightgreen'
            }}>
                Parent
                <div onClick={onClickChild} style={{
                    padding: '40px',
                    marginTop: '20px',
                    textAlign: 'center',
                    backgroundColor: 'lightblue'
                }}>
                    Child
                </div>
                <div onClick={onClickSecondChild} style={{
                    padding: '40px',
                    marginTop: '20px',
                    textAlign: 'center',
                    backgroundColor: 'lightblue'
                }}>
                    Second Child
                </div>
            </div>
        </>
    )
}

export default App