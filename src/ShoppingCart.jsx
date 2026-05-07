import { useState } from "react"
import CartDetails from "./CartDetails"
import AddButton from "./AddButton"

const ShoppingCart = () => {
    const [cart, setCart] = useState({})

    const prices = {
        "Apple": 0.20,
        "Banana": 0.50,
        "Orange": 0.75
    }

    const getTotal = () => {
        let total = 0
        for (const item in cart) {
            total += prices[item] * cart[item]
        }
        return total.toFixed(2)
    }

    const addItem = (item) => {
        setCart(prevCart => {
            const newCart = { ...prevCart }
            if (newCart[item]) {
                newCart[item] += 1
            } else {
                newCart[item] = 1
            }
            return newCart
        })
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div style={{display: "flex", gap: "0.5rem"}}>
                <AddButton addItem={addItem}  item="Apple" color="red" prices={prices} />
                <AddButton addItem={addItem}  item="Banana" color="yellow" prices={prices} />
                <AddButton addItem={addItem}  item="Orange" color="orange" prices={prices} />
            </div>
            <CartDetails cart={cart} prices={prices} getTotal={getTotal} />
        </div>
    )
}

export default ShoppingCart