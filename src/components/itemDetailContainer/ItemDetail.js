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
  }, [id])

  return (
    <div>
      {products.map((element)=>(
        <h1>EL PRODUCTO ELEGIDO ES: {element.producto} - {element.linea}</h1>
      ))}
    </div>
  )
}

export default ItemDetail