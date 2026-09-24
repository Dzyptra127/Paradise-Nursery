import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [started, setStarted] = useState(false);
  const cartTotalItems = useSelector(state => state.cart.totalItems);

  if (!started) {
    return (
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>Tanaman Hias Berkualitas untuk Rumah Anda</p>
        <button
          className="get-started-btn"
          onClick={() => setStarted(true)}
        >
          Mulai
        </button>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/">Beranda</Link>
            <Link to="/products">Tanaman</Link>
            <Link to="/about">Tentang Kami</Link>
          </div>
          <Link to="/cart" className="cart-icon">
            Keranjang
            <span className="cart-count">{cartTotalItems}</span>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="products-container">
              <h2>Selamat Datang di Paradise Nursery</h2>
              <p>Pilih tanaman favorit Anda dari katalog kami.</p>
              <Link to="/products" style={{color: '#2e7d32', fontWeight: 'bold'}}>
                Lihat Daftar Tanaman →
              </Link>
            </div>
          } />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
