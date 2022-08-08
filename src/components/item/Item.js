import React from 'react'
import {Link} from 'react-router-dom';
import './item.css';

function Item({prod}) {
  const { id, producto, linea, imagen } = prod;

  return (
    <>
      <div className='divProducts'>
        <div key={id} className='cardProducts'>
          <img src={imagen} alt="" />
          <h3>{producto}</h3>
          <h3>{linea}</h3>
          <div className='container-fluid divContCard'>
            <Link to={`/detalle/${id}`}>
              <button type='button' className='btn btn-secondary col-6'> Detalle </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item