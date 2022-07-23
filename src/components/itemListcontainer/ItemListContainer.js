import {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import {useParams} from 'react-router-dom';
import {getDocs, collection, getFirestore, query, where} from 'firebase/firestore';

function ItemListContainer() {
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams();

    useEffect(()=>{
      if(categoriaId){
        const db = getFirestore();
        const queryCollection = collection(db, 'productos');
        const queryCollectionFilter = query(queryCollection, where('producto', '==', categoriaId))
        getDocs(queryCollectionFilter)
          .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
          .catch(error => console.log(error))
          .finally(() => setLoading(false))
      }else{
        const db = getFirestore();
        const queryCollection = collection(db, 'productos');
        getDocs(queryCollection)
          .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
          .catch(error => console.log(error))
          .finally(() => setLoading(false))
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