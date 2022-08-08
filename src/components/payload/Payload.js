import {useContext} from 'react'
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext';
import './payload.css';

function Payload() {
    const {orden} = useContext(CartContext)

    if (orden.length == 0) {
        return (
            <div>
                <h3>Procesando...</h3>
            </div>
        )
    } else {
        return (
            <div className='divPayload'>
                <h3>Muchas gracias por su compra</h3>
                <h4>El numero de id de su compra es: {orden}</h4>
                <p>Nos estaremos comunicando con usted dentro de las 24hs</p>
                <Link to={"/"}>
                    <button id="botonEnviar" className="btnPayload">Volver al inicio</button>
                </Link>
            </div>
        )
    }
}

export default Payload