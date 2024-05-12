import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header';
import ProductsListContainer from './Components/ProductsListContainer/ProductsListContainer';
import Cart from './Components/Cart/Cart';
import ProductsProvider from './Context/productsContext';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ProductDetailContainer from './Components/ProductDetailContainer/ProductDetailContainer';
import CartProvider from './Context/cartContext';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';


function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductsListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/product/:productId' element={<ProductDetailContainer />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/about' element={<About/>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App; 
