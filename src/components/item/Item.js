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
                  <p className='col-12'>{capacidad} - ${precio}</p>
                  <div>
                    <Link to={`/detalle/${id}`}>
                      <button type='button' className='btn btn-secondary col-6'> detalle </button>
                    </Link>
                    <button type='button' className='btn btn-secondary col-6'> agregar </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Item