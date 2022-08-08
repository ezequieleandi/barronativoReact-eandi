import React from 'react';
import {Link} from 'react-router-dom';
import './confirmToBuy.css';

function ConfirmarCompra() {
  return (
    <div>
      <Link to="/carrito"> <button>Terminar compra</button> </Link>
      <Link to="/productos"> <button>Continuar Comprando</button> </Link>
    </div>
  )
}

export default ConfirmarCompra