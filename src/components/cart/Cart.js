import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartItems from '../cartItems/CartItems';



function Cart() {
  const {cart, precioTotal, removeItem, clear} = useContext(CartContext)
  

  return (
    <div>
      <h3 className='center'>Productos</h3>
      <ul className='list-group center'>
        {cart.map((el) => (
          <CartItems cart={el} removeItem= {removeItem} />
        ))}
      </ul>
      <p className='list-group-item center'>Total a Pagar: {precioTotal()} </p>
      <button onClick={clear}>eliminar todo</button>
    </div>
  )
}

export default Cart