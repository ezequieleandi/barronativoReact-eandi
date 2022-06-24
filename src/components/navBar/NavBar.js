import logo from '../../imgBarronativo2/extras/logo22.jpg'
import './navBar.css'

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
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./index.html">INICIO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#entrega">ENTREGA</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contacto">CONTACTO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./views/productos.html">PRODUCTOS</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
  )
}

export default NavBar;