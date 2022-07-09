import './sectionContact.css';

function SectionContactHome() {
  return (
    <div className="sectionContacto">
        <h2>Contacto</h2>
        <form>
            <div className="row mb-3 divBarraGral">
                <label for="nombre" className="col-sm-2 col-form-label"></label>
                <div>
                    <input id="nombre" className="form-control formBarra" placeholder="NOMBRE Y APELLIDO"/>
                </div>
            </div>
            <div className="row mb-3 divBarraGral">
                <label for="email" className="col-sm-2 col-form-label"></label>
                <div>
                    <input id="email" className="form-control formBarra" placeholder="EMAIL"/>
                </div>
            </div>
            <div className="row mb-3 divBarraGral">
                <label for="telefono" className="col-sm-2 col-form-label"></label>
                <div>
                    <input id="telefono" className="form-control formBarra" placeholder="TELEFONO"/>
                </div>
            </div>
            <div className="row mb-3 divBarraGral">
                <label for="ayuda" className="col-sm-2 col-form-label"></label>
                <div>
                    <input id="ayuda" className="form-control formBarra" placeholder="En que te podemos ayudar?"/>
                </div>
            </div>
            <div className="divBotones">
                <button className="btn">Enviar</button>
                <button className="btn">Resetear</button>
            </div>
        </form>
    </div>
  )
}

export default SectionContactHome