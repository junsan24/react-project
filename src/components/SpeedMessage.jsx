const SpeedMessage = ({speed}) => {
    const speedLimit= 50

    const message = speed > speedLimit ? "You are speeding!" : "You are within the speed limit."

    const backgroundColor = speed > speedLimit ? "red" : "green"

    const messageStyle = {
        backgroundColor,
        color: '#333',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }

    return (
        <div style={messageStyle} >
            <p>Your Speed: {speed} km/h</p>
            <p>{message}</p>
        </div>
    )
}

export default SpeedMessage