import React from 'react';
import './cartItems.css';

function CartItems({cart, removeItem}) {
   
  return (
    <>
      <li className='list-group-item center liCart'>
        {cart.item.producto} - {cart.item.linea} - ${cart.item.precio} x {cart.quantity}
        <button onClick={() => removeItem(cart.item.id)}>eliminar</button>
      </li>
    </>
  )
}

export default CartItems