import {useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {getDocs, collection, getFirestore, getDoc, doc} from 'firebase/firestore';
import ConfirmToBuy from '../confirmToBuy/ConfirmToBuy';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

function ItemDetail() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState();
  const {addItem, cantidadTotal} = useContext(CartContext)
  const {id} = useParams();

  const counter = (counter)=>{
    setAmount(counter)
    const producto = {item: products, quantity: counter}
    addItem(producto)
    cantidadTotal()
  }

  useEffect(()=>{
    if(id){
      const db = getFirestore();
      const queryProduct = doc(db, 'productos', id)
      getDoc(queryProduct)
      .then(resp=>setProducts({id: resp.id, ...resp.data()}))
      .catch(error=>console.log(error))
    }else{
      const db = getFirestore();
      const queryCollection = collection(db, 'productos');
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(error => console.log(error))
    }
  }, [id])

  return (
    <div className='divDetail'>
      <img src={products.imagen} alt="" />
      <div className='divDetailInt'>
        <h1>{products.producto} - {products.linea}</h1>
        <h3>{products.capacidad} - ${products.precio}</h3>
        {amount ?
          <ConfirmToBuy /> :
          <ItemCount stock={products.stock} onAdd={counter} />}
      </div>
    </div>
  )
}

export default ItemDetail