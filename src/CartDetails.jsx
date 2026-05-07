const CartDetails = ({ cart, prices, getTotal}) => {

    return (
        <div>
            <h3>Items in Cart</h3>
            {
                Object.keys(cart).length === 0 ? <p>Your cart is empty.</p>
                : (
                    <ul>
                        {Object.entries(cart).map(([item, quantity]) => (
                            <li key={item}>
                                {item}: {quantity} x ${prices[item].toFixed(2)} = ${(prices[item] * quantity).toFixed(2)}
                            </li>
                        ))}
                        <li><strong>Total: ${getTotal()}</strong></li>                 
                    </ul>
                )
            }
        </div>
    )
}

export default CartDetails