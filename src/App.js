import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListcontainer/ItemListContainer';
import Cart from './components/cart/Cart';
import ItemDetail from './components/itemDetailContainer/ItemDetail';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/producto/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/detalle/:id' element={<ItemDetail/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
