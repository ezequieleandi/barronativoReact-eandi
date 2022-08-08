import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import CartItems from '../cartItems/CartItems';
import FormToBuy from '../formToBuy/FormToBuy';
import './cart.css';

function Cart() {
  const {cart, precioTotal, removeItem, clear} = useContext(CartContext)
  
  return (
    <div>
      {cart.length === 0 ?
        <div className='divCartEmpty'>
          <p>El carrito de compras esta vacio</p>
          <Link to="/productos"> <button>Comprar</button> </Link>
        </div> :
        <div className='divCart'>
          <h2 className='center'>Productos</h2>
          <ul className='list-group center'>
            {cart.map((el) => (
              <CartItems cart={el} removeItem={removeItem} />
            ))}
          </ul>
          <p className='list-group-item center'>Total a Pagar: ${precioTotal()} </p>
          <button onClick={clear}>Eliminar todo</button>
          <FormToBuy />
        </div>
      }
    </div>
  )
}

export default Cart