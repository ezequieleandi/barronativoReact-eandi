import React from 'react'

function CartItems({cart, removeItem}) {
   
  return (
    <>
        <li className='list-group-item center'>
            {cart.item.producto} - {cart.item.linea} - ${cart.item.precio} x {cart.quantity}
            <button onClick={ ()=>removeItem(cart.item.id) }>eliminar</button>
        </li> 
    </>
  )
}

export default CartItems