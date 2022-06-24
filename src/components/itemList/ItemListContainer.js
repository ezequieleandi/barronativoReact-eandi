import './itemList.css';

function ItemListContainer({saludos}) {
  return (
    <div className="divItem">
        <p>{saludos}</p>
    </div>
  )
}

export default ItemListContainer