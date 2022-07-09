import Item from '../item/Item';
import './itemList.css';

function ItemList({producto}) {

  return (
    <>
        {producto.map((element)=>(
          <Item prod={element} key={element.id} />
        ))}
    </>
  )
}

export default ItemList