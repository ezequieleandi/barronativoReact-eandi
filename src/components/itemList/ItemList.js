import Item from '../item/Item';
import './itemList.css';

function ItemList({producto}) {
  return (
    <div className='divProducts'>
      {producto.map((element) => (
        <Item prod={element} key={element.id} />
      ))}
    </div>
  )
}

export default ItemList