import {useState, useEffect} from 'react';
import { getProductos } from '../../helpers/GetProducts';
import ItemList from '../itemList/ItemList';

function ItemListContainer() {
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getProductos
        .then(respuesta=>{setProductos(respuesta)})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }, [])
  return (
    <div>
        {loading ? <h2>cargando...</h2> 
        : 
        (<ItemList producto = {products}/>)}
    </div>
  )
}

export default ItemListContainer