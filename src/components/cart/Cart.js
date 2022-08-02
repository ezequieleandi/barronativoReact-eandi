import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartItems from '../cartItems/CartItems';
import {Link} from 'react-router-dom';
import FormularioCompra from '../formularioCompra/FormularioCompra';



function Cart() {
  const {cart, precioTotal, removeItem, clear} = useContext(CartContext)
  

  return (
    <div>
      {cart.length === 0 ? 
        <div>
          <p>El carrito de compras esta vacio</p>
          <Link to="/productos"> <button>Comprar</button> </Link>
        </div> : 
        <div>
          <h3 className='center'>Productos</h3>
          <ul className='list-group center'>
            {cart.map((el) => (
              <CartItems cart={el} removeItem={removeItem} />
            ))}
          </ul>
          <p className='list-group-item center'>Total a Pagar: {precioTotal()} </p>
          <button onClick={clear}>eliminar todo</button>
          <FormularioCompra />
        </div>
    }
    </div>
  )
}

export default Cart