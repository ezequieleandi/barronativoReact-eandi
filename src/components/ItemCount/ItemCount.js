import {useState} from 'react';
import './itemCount.css';

function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(0)

    const restarCount = () =>{
        if(count > 0){
          setCount(count - 1)
        }
    }
    const sumarCount = () =>{
        if(count < stock){
          setCount(count + 1)
        }
    }
  return (
        <div>
          <div className='divCount'>
              <button onClick={restarCount}>-</button>
              <p>{count}</p>
              <button onClick={sumarCount}>+</button>
          </div>
          <button disabled={count===0} onClick={()=>onAdd(count)}>agregar al carrito</button>
        </div>
  )
}

export default ItemCount