import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Details from './Components/Details';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route axact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
