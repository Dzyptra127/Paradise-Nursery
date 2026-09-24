import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Pohon Kelapa Hias', category: 'Tanaman Tinggi', price: 85000, image: 'https://images.unsplash.com/photo-1598623218710-3a2d5a9c48c8?w=300' },
  { id: 2, name: 'Bunga Mawar Merah', category: 'Bunga', price: 45000, image: 'https://images.unsplash.com/photo-1518882605630-8b1b46e45b60?w=300' },
  { id: 3, name: 'Sukulen Mini', category: 'Tanaman Hias Meja', price: 25000, image: 'https://images.unsplash.com/photo-1518882605630-8b1b46e45b61?w=300' },
  { id: 4, name: 'Pakis Hias', category: 'Tanaman Daun', price: 38000, image: 'https://images.unsplash.com/photo-1598623218711-3a2d5a9c48c9?w=300' },
  { id: 5, name: 'Lidah Mertua', category: 'Tanaman Hias Meja', price: 52000, image: 'https://images.unsplash.com/photo-1518882605631-8b1b46e45b62?w=300' },
  { id: 6, name: 'Bunga Melati', category: 'Bunga', price: 32000, image: 'https://images.unsplash.com/photo-1518882605632-8b1b46e45b63?w=300' },
  { id: 7, name: 'Monstera', category: 'Tanaman Daun', price: 75000, image: 'https://images.unsplash.com/photo-1598623218712-3a2d5a9c48ca?w=300' }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(products.map(p => p.category))];

  const sudahDiKeranjang = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="products-container">
      <h2>Daftar Tanaman Paradise Nursery</h2>

      {categories.map(kategori => (
        <div key={kategori} className="category-section">
          <h3>{kategori}</h3>
          <div className="product-grid">
            {products
              .filter(p => p.category === kategori)
              .map(produk => (
                <div key={produk.id} className="product-card">
                  <img src={produk.image} alt={produk.name} />
                  <h4>{produk.name}</h4>
                  <p>Rp {produk.price.toLocaleString('id-ID')}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addItem(produk))}
                    disabled={sudahDiKeranjang(produk.id)}
                  >
                    {sudahDiKeranjang(produk.id) ? 'Sudah di Keranjang' : 'Tambahkan ke Keranjang'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
