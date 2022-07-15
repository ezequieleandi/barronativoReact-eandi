import {useState, useEffect, useContext} from 'react';
//import { getProductos } from '../../helpers/GetProducts';
import ItemList from '../itemList/ItemList';
import {ProductsContext} from '../../context/ProductContext';
import {useParams} from 'react-router-dom';

function ItemListContainer() {
    //const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useContext(ProductsContext)
    const {categoriaId} = useParams();

    useEffect(()=>{
      if(categoriaId){
        product
        .then(respuesta=>{setProduct(respuesta.filter(produ => produ.producto === categoriaId))})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }else{
        product
        .then(respuesta=>{setProduct(respuesta)})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }
    }, [categoriaId])
  return (
    <>
        {loading ? <h2>cargando...</h2> 
        : 
        (<ItemList producto = {product}/>)}
    </>
  )
}

export default ItemListContainer