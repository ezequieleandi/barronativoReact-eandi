import { getProductos } from '../../helpers/GetProducts';
import ItemCount from '../ItemCount/ItemCount';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import {CartContext} from '../../context/CartContext';

function ItemDetail() {
  const [products, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState();
  const [addItem] = useContext(CartContext)
  const {id} = useParams();

  const contador = (contador)=>{
    setCantidad(contador)
    const producto = {item: products, quantity: contador}
    addItem(producto)
    console.log(producto)
  }

  useEffect(()=>{
    if(id){
      getProductos
      .then(respuesta=>{setProductos(respuesta.find(produ => produ.id == id))})
      .catch(error=>console.log(error))
    }else{
      getProductos
      .then(respuesta=>{setProductos(respuesta)})
      .catch(error=>console.log(error))
    }
  }, [id])

  return (
    <div>
      <h1>EL PRODUCTO ELEGIDO ES:</h1>
      <h3>{products.producto} - {products.linea}</h3>
      {cantidad ? 
      <Link to="/carrito"> <button>Terminar compra</button> </Link> : 
      <ItemCount stock={products.stock} onAdd={contador}/>}
    </div>
  )
}

export default ItemDetail