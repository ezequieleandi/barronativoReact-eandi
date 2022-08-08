import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {getDocs, collection, getFirestore, query, where} from 'firebase/firestore';
import ItemList from '../itemList/ItemList';
import '../navBar/navBar.css';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams();

    useEffect(()=>{
      const db = getFirestore();
      const queryCollection = collection(db, 'productos');
      const queryCollectionFilter = categoriaId ? query(queryCollection, where('producto', '==', categoriaId)) : queryCollection
      
      getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [categoriaId])
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navItem">
        <div className="collapse navbar-collapse headerDiv" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to='/producto/MATE'>
              <li className="nav-item">
                <p className="nav-link">Mates</p>
              </li>
            </Link>
            <Link to='/producto/CUENCO'>
              <li className="nav-item">
                <p className="nav-link">Cuencos</p>
              </li>
            </Link>
            <Link to='/producto/TAZA'>
              <li className="nav-item">
                <p className="nav-link">Tazas</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      {loading ? <h2>cargando...</h2>
        :
        (<ItemList producto={products} />)}
    </>
  )
}

export default ItemListContainer