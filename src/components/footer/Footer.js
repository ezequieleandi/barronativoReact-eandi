import mail from '../../imgBarronativo2/imgInternet/mail.png';
import facebook from '../../imgBarronativo2/imgInternet/facebook.png';
import instagram from '../../imgBarronativo2/imgInternet/instagram.png';
import whatsapp from '../../imgBarronativo2/imgInternet/whatsapp.png';
import './footer.css';

function Footer() {
  return (
    <>
        <footer className='footerGral'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4 flexElementFooter">
                        <h2 className="titFooter">Entrega</h2>
                        <div className="entregaP">
                            <p>CORDOBA CAPITAL Y SIERRAS CHICAS Entregas a domicilio o coordinamos un punto</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 flexElementFooter">
                        <h2 className="titFooter">Formas de pago</h2>
                        <div className="pagosP">
                            <p>Transferencia</p>
                            <p>Mercado pago</p>
                            <p>Efectivo</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 flexElementFooter">
                        <div>
                            <h2 className="titFooter titContactos">Contactanos</h2>
                        </div>
                        <div className="redesIconos">
                            <img className="iconosRedes" src={mail} alt="logo barronativo"/>
                            <img className="iconosRedes" src={facebook} alt="logo barronativo"/>
                            <img className="iconosRedes" src={instagram} alt="logo barronativo"/>
                            <img className="iconosRedes" src={whatsapp} alt="logo barronativo"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer