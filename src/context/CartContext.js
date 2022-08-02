import { createContext, useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cantTotal, setCantTotal] = useState();
    const [orden, setOrden] = useState([]);
    const [user, setUser] = useState([]);

    const guardarLocalStorage = (clave, valor) => {
        localStorage.setItem(clave,JSON.stringify(valor))    
    }
    //agregar al carrito general
    const addItem = (item) => {
        const inCart = isInCart(item.item.id)
        if (inCart === -1) {
            guardarLocalStorage('cartList', [ ...cart, item]) 
            const producto = item
            cart.push(producto)
        } else {
            cart[inCart].quantity += item.quantity
            setCart([...cart])
            guardarLocalStorage('cartList', [...cart])
        }
    }
    //precio total de lo que esta en el carrito
    const precioTotal = () => {
        console.log(cart)
        return cart.reduce((count, prodObj)=> count = count + (prodObj.item.precio * prodObj.quantity), 0)
    }
    //cantidad de productos en el carrito
    const cantidadTotal = () => {
        const cantidadTotal = cart.reduce((contador, prodObj)=> contador +=  prodObj.quantity, 0)
        setCantTotal(cantidadTotal)
    }
    //remover un item especifico del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(prod=>prod.item.id !== itemId))
    }
    //eliminar todo el carrito
    const clear = () => {
        setCart([]);
    }
    //Este producto ¿esta en el carrito?
    const isInCart = (id) => {
        return cart.findIndex(elemento => elemento.item.id == id);
    }

    const generateOrder = () => {
        const orden = {};
        orden.buyer = {
          nombre: user.nombre,
          email: user.correo,
          telefono: user.telefono,
          direccion: user.direccion,
        };
        orden.items = cart.map((prod) => {
          const id = prod.item.id;
          const producto = prod.item.producto;
          const linea = prod.item.linea;
          const quantity = prod.quantity;
          return { id, producto, linea, quantity };
        });
        const db = getFirestore();
        const queryInsert = collection(db, "ordenes");
        addDoc(queryInsert, orden)
          .then((resp) => {
            setOrden(resp.id);
          })
          .catch((err) => console.log(err))
          .finally(() => clear());
      };


    return(
        <CartContext.Provider value={{addItem, clear, removeItem, isInCart, cart, cantTotal, setCart, precioTotal, cantidadTotal, setOrden, orden, setUser, user, generateOrder}}>
            {children}
        </CartContext.Provider>
    )
}