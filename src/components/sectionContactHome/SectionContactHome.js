import {useContext} from 'react';
import {HomeContext} from '../../context/HomeContext';
import { Link } from "react-router-dom";
import './sectionContact.css';

function SectionContactHome() {
    const {setQuestion, question, generateQuestion} = useContext(HomeContext)

    const onHandlerSubmit = (e) =>{
        e.preventDefault();
    }

    const validQuestion = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };


    return (
        <div className="sectionContact">
            <h2>Contacto</h2>
            <form onSubmit={onHandlerSubmit}>
                <div className="row mb-3 divBarraGral">
                    <label for="nombre" className="col-sm-2 col-form-label"></label>
                    <div>
                        <input name='nombre' onChange={(e) => {validQuestion(e);}} id="nombre" className="form-control formBarra" placeholder="NOMBRE Y APELLIDO" />
                    </div>
                </div>
                <div className="row mb-3 divBarraGral">
                    <label for="correo" className="col-sm-2 col-form-label"></label>
                    <div>
                        <input name='correo' onChange={(e) => {validQuestion(e);}} id="email" className="form-control formBarra" placeholder="EMAIL" />
                    </div>
                </div>
                <div className="row mb-3 divBarraGral">
                    <label for="telefono" className="col-sm-2 col-form-label"></label>
                    <div>
                        <input name='telefono' onChange={(e) => {validQuestion(e);}} id="telefono" className="form-control formBarra" placeholder="TELEFONO" />
                    </div>
                </div>
                <div className="row mb-3 divBarraGral">
                    <label for="pregunta" className="col-sm-2 col-form-label"></label>
                    <div>
                        <input name='pregunta' onChange={(e) => {validQuestion(e);}} id="ayuda" className="form-control formBarra" placeholder="En que te podemos ayudar?" />
                    </div>
                </div>
                <div className="divBotones">
                    <Link to={"/consulta"}>
                        <button onClick={generateQuestion} className="btn">Enviar</button>
                    </Link>
                    <button type="reset" className="btn">Resetear</button>
                </div>
            </form>
        </div>
    )
}

export default SectionContactHome