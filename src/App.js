
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer saludos="gracias por visitarnos, saludos" />
    </div>
  );
}

export default App;
