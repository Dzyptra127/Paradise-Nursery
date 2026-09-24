import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);

  const ubahJumlah = (id, jumlahBaru) => {
    if (jumlahBaru < 1) return;
    dispatch(updateQuantity({ id, quantity: jumlahBaru }));
  };

  return (
    <div className="cart-page">
      <h2>Keranjang Belanja</h2>

      {items.length === 0 ? (
        <div>
          <p>Keranjang Anda masih kosong.</p>
          <p style={{ color: '#666', fontStyle: 'italic', margin: '1rem 0' }}>
            Segera Hadir: Sistem pembayaran dan pelacakan pesanan
          </p>
          <Link to="/products">
            <button className="continue-shopping-btn">Lanjutkan Belanja</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="total-info">
            <p>Jenis Barang: {items.length}</p>
            <p>Total Item: {totalItems}</p>
            <p>Total Belanja: Rp {totalPrice.toLocaleString('id-ID')}</p>
          </div>

          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Rp {item.price.toLocaleString('id-ID')} / buah</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => ubahJumlah(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => ubahJumlah(item.id, item.quantity + 1)}>+</button>
              </div>

              <p>Subtotal: Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Hapus
              </button>
            </div>
          ))}

          <p style={{ color: '#666', fontStyle: 'italic', marginTop: '1rem' }}>
            Segera Hadir: Sistem pembayaran dan pelacakan pesanan
          </p>

          <Link to="/products">
            <button className="continue-shopping-btn">Lanjutkan Belanja</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartItem;
