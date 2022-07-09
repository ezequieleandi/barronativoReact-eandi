import logo from '../../imgBarronativo2/extras/logo22.jpg';
import imgCarrito from '../../imgBarronativo2/carritoImg.svg';
import {Link} from 'react-router-dom';
import './navBar.css';

function NavBar() {
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
            </div>
            <Link to='/carrito'>
              <img src={imgCarrito} alt="carrito de compras"/>
            </Link>
          </nav>
    </header>
  )
}

export default NavBar;