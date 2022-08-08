import {useState} from 'react';
import './itemCount.css';

function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(0)

    const subtractCount = () =>{
        if(count > 0){
          setCount(count - 1)
        }
    }
    const addCount = () =>{
        if(count < stock){
          setCount(count + 1)
        }
    }
  return (
    <div>
      <div className='divCount'>
        <button className='btnCount' onClick={subtractCount}>-</button>
        <p className='pCount'>{count}</p>
        <button className='btnCount' onClick={addCount}>+</button>
      </div>
      <button className='btnDetail' disabled={count === 0} onClick={() => onAdd(count)}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount