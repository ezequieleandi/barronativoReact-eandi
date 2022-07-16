import {useState, useEffect} from 'react';
import { getProductos } from '../../helpers/GetProducts';
import ItemList from '../itemList/ItemList';
import {useParams} from 'react-router-dom';

function ItemListContainer() {
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams();

    useEffect(()=>{
      if(categoriaId){
        getProductos
        .then(respuesta=>{setProductos(respuesta.filter(produ => produ.producto === categoriaId))})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }else{
        getProductos
        .then(respuesta=>{setProductos(respuesta)})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }
    }, [categoriaId])
  return (
    <>
        {loading ? <h2>cargando...</h2> 
        : 
        (<ItemList producto = {products}/>)}
    </>
  )
}

export default ItemListContainer