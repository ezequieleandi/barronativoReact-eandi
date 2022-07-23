import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const inCart = isInCart(item.item.id)
        if (inCart === -1) {
            const producto = item
            cart.push(producto)
        } else {
            cart[inCart].quantity += item.quantity
            setCart([...cart])
        }
    }
    const precioTotal = () => {
        return cart.reduce((count, prodObj)=> count = count + (prodObj.precio * prodObj.quantity), 0)
    }
    const cantidadTotal = () => {
        return cart.reduce((contador, prodObj)=> contador +=  prodObj.quantity, 0)
    }
    const removeItem = (itemId) => {
        setCart(cart.filter(prod=>prod.id !== itemId))
    }
    const clear = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.findIndex(elemento => elemento.item.id == id);
    }
    
    return(
        <CartContext.Provider value={{addItem, clear, removeItem, isInCart, cart, setCart, precioTotal, cantidadTotal, removeItem} }>
            {children}
        </CartContext.Provider>
    )
}