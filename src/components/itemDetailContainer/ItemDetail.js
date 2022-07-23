import ItemCount from '../ItemCount/ItemCount';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {getDocs, collection, getFirestore, getDoc, doc} from 'firebase/firestore';

function ItemDetail() {
  const [products, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState();
  const {addItem} = useContext(CartContext)
  const {id} = useParams();

  const contador = (contador)=>{
    setCantidad(contador)
    const producto = {item: products, quantity: contador}
    addItem(producto)
  }

  useEffect(()=>{
    if(id){
      const db = getFirestore();
      const queryProduct = doc(db, 'productos', id)
      getDoc(queryProduct)
      .then(resp=>setProductos({id: resp.id, ...resp.data()}))
      .catch(error=>console.log(error))
    }else{
      const db = getFirestore();
      const queryCollection = collection(db, 'productos');
      getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(error => console.log(error))
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