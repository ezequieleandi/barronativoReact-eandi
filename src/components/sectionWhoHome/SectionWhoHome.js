import naturaleza1 from '../../imgBarronativo2/naturaleza2.jpeg';
import './sectionWho.css';

function SectionWhoHome() {
  return (
    <div className="sectionQuienesSomos">
        <div className="flexPresentacion">
            <img src={naturaleza1} alt="imagen naturaleza 1"/>
            <div>
              <h2>¿Quiénes somos?</h2>
              <p>Hola! Somos Coty y Fede, expresándonos a través de la cerámica y alfarería, con alegría de poder compartirles pedacitos de Barro Nativo.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionWhoHome