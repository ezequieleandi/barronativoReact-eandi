import {useState, useEffect} from 'react';
import {getProductos} from '../itemList/ItemListContainer';
import './itemList.css';

function ItemList() {
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
        products.map(prod =>
          <div key={prod.id} className='cardProductos'>
            <img src={prod.imagen} alt="" />
            <h3>{prod.producto} - {prod.linea}</h3>
            <div className='container-fluid divContCard'>
              <div className='row'>
                <p className='col-12'>{prod.capacidad}</p>
                <p className='col-12'>${prod.precio}</p>
                <button type='button' className='btn btn-secondary col-12'> añadir </button>
              </div>
            </div>
          </div>)}

        
    </div>
  )
}

export default ItemList