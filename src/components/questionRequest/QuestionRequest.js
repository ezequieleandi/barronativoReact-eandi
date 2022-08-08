import {useContext} from 'react';
import { Link } from "react-router-dom";
import {HomeContext} from '../../context/HomeContext';
import './questionRequest.css';

function QuestionRequest() {
    const {id} = useContext(HomeContext)
    return (
        <div className='divQuestion'>
            <h3>Hemos tomado su consulta</h3>
            <h4>El numero de id de su consulta es: {id}</h4>
            <p>Nos estaremos comunicando con usted dentro de las 24hs</p>
            <Link to={"/"}>
                <button className="btnQuestion">Volver al inicio</button>
            </Link>
        </div>
    )
}

export default QuestionRequest