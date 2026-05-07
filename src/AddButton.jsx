const AddButton = ({item, prices, color, addItem}) => {
    return (
        <div>
            <button onClick={() => addItem(item)}>Add {item} ({prices[item]*100}p) </button>
        </div>
    )
}

export default AddButton