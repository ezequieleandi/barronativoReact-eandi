import { getProductos } from '../../helpers/GetProducts';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function ItemDetail() {
  const [products, setProductos] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    if(id){
      getProductos
      .then(respuesta=>{setProductos(respuesta.filter(produ => produ.id == id))})
      .catch(error=>console.log(error))
    }else{
      getProductos
      .then(respuesta=>{setProductos(respuesta)})
      .catch(error=>console.log(error))
    }
  }, [])
  console.log(products)

  return (
    <div>
      <h1>EL PRODUCTO ELEGIDO ES {products.producto} - {products.linea}</h1>
    </div>
  )
}

export default ItemDetail