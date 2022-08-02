import {useContext} from 'react'
import {CartContext} from '../../context/CartContext';

function FormularioCompra() {
    const {user, setUser, generateOrder} = useContext(CartContext)

    const onHandlerSubmit = (e) =>{
        e.preventDefault()
    }

    const validToUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

  return (
      <div>
          <h2 id="contactoH2">Datos para el envio</h2>
          <form onSubmit={onHandlerSubmit} id="formularioId">
              <div className="row mb-3 divBarraGral">
                  <label for="nombre" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-6">
                      <input type="text" name='nombre' onChange={(e) => {validToUser(e);}} className="form-control formBarra" id="nombre" placeholder="NOMBRE Y APELLIDO" />
                  </div>
              </div>
              <div className="row mb-3 divBarraGral">
                  <label for="email" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-6">
                      <input type="email" name='correo' onChange={(e) => {validToUser(e);}} className="form-control formBarra" id="correo" placeholder="EMAIL" />
                  </div>
              </div>
              <div className="row mb-3 divBarraGral">
                  <label for="telefono" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-6">
                      <input type="number" name='telefono' onChange={(e) => {validToUser(e);}} className="form-control formBarra" id="telefono" placeholder="TELEFONO" />
                  </div>
              </div>
              <div className="row mb-3 divBarraGral">
                  <label for="ayuda" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-6">
                      <input type="text" name='direccion' onChange={(e) => {validToUser(e);}} className="form-control formBarra" id="direccion" placeholder="DIRECCION" />
                  </div>
              </div>
              <div className="divBotones">
                  <a>
                      <button id="botonEnviar" onClick={generateOrder} className="btn">Enviar</button>
                  </a>
                  <button type="reset" className="btn">Resetear</button>
              </div>
          </form>
      </div>
  )
}

export default FormularioCompra