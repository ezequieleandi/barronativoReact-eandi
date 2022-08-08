import {CartContext} from '../../context/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../imgBarronativo2/extras/logo22.jpg';
import imgCarrito from '../../imgBarronativo2/carritoImg.svg';
import './navBar.css';

function NavBar() {
  const {cantTotal} = useContext(CartContext)

  return (
    <header className='header'>
      <div className='headerDiv'>
        <a href="./index.html"><img src={logo} alt="logo barronativo" /></a>
        <h1>BARRONATIVO</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light navItem">
        <div className="container-fluid headerDiv">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse headerDiv" id="navbarNavDropdown">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
              <Link to='/'>
                <li className="nav-item">
                  <p className="nav-link" aria-current="page">INICIO</p>
                </li>
              </Link>
              <li className="nav-item">
                <p className="nav-link">ENTREGA</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">CONTACTO</p>
              </li>
              <Link to='/productos'>
                <li className="nav-item">
                  <p className="nav-link">PRODUCTOS</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to='/carrito'>
          <button type="button" class="position-relative"><img title='ver carrito' src={imgCarrito} alt="Carrito de compras" /><span class="position-absolute top-100 end-50 translate-middle badge rounded-pill bg-danger">{cantTotal}</span></button>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar;