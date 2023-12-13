import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './components/ProductList';
import WhatsAppPage from './components/WhatsAppPage';
import Sucursales from './components/Sucursales';
import Footer from './components/Footer';
import "./index.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la Tienda!" />} />
          <Route path='/productos' element={<ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route
          path="/whatsapp"
          element={<WhatsAppPage allProducts={allProducts} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
