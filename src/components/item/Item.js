import React from 'react'
import {Link} from 'react-router-dom';
import './item.css';

function Item({prod}) {
    const { id, producto, linea, imagen, capacidad, precio } = prod;

  return (
    <>
        <div className='divProductos'>
            <div key={id} className='cardProductos'>
              <img src={imagen} alt="" />
              <h3>{producto} - {linea}</h3>
              <div className='container-fluid divContCard'>
                <div className='row'>
                  <p className='col-12'>{capacidad}</p>
                  <p className='col-12'>${precio}</p>
                  <Link to={`/detalle/${id}`}>
                    <button type='button' className='btn btn-secondary col-12'> detalle </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Item