import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import { HomeProvider } from './context/HomeContext';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListcontainer/ItemListContainer';
import Cart from './components/cart/Cart';
import ItemDetail from './components/itemDetailContainer/ItemDetail';
import Footer from './components/footer/Footer';
import Payload from './components/payload/Payload';
import QuestionRequest from './components/questionRequest/QuestionRequest';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <HomeProvider>
        <BrowserRouter>
          <div>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/producto/:categoriaId' element={<ItemListContainer />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/detalle/:id' element={<ItemDetail />} />
              <Route path="/payload" element={<Payload />} />
              <Route path="/consulta" element={<QuestionRequest />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </HomeProvider>
    </CartProvider>
  );
}

export default App;
