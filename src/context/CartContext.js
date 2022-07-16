import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const posicion_carrito = cart.findIndex(elemento => elemento.item.id == item.item.id);
        if (posicion_carrito === -1) {
            console.log("no hay elementos iguales")
        } else {
            console.log("SIIIII")
        }  
    }
    const removeItem = (itemId) => {

    }
    const clear = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.find((item) => item.id === id) ? true : false;
    }
    return(
        <CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}