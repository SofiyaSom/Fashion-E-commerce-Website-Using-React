import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import menBanner from './Components/Assets/banner_mens.png';
import womenBanner from './Components/Assets/banner_women.png';
import kidBanner from './Components/Assets/banner_kids.png';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={menBanner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={womenBanner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kidBanner} category="kid" />} />
          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* Top-level Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
