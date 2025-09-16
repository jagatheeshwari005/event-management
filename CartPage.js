import React, { useEffect, useMemo, useState } from 'react';
import './CartPage.css';

const CART_KEY = 'cartItems';

const readCart = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

const CartPage = () => {
  const [items, setItems] = useState(() => readCart());

  useEffect(() => {
    writeCart(items);
  }, [items]);

  const total = useMemo(() => {
    return items.reduce((sum, it) => sum + it.price * it.qty, 0);
  }, [items]);

  const increment = (id) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  };

  const decrement = (id) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <section className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            <div className="cart-items">
              {items.map((it) => (
                <div key={it.id} className="cart-item">
                  <img src={it.image} alt={it.name} />
                  <div className="info">
                    <h3>{it.name}</h3>
                    <div className="meta">
                      <span className="price">${it.price.toFixed(2)}</span>
                    </div>
                    <div className="qty">
                      <button onClick={() => decrement(it.id)}>-</button>
                      <span>{it.qty}</span>
                      <button onClick={() => increment(it.id)}>+</button>
                    </div>
                  </div>
                  <div className="actions">
                    <button className="remove" onClick={() => removeItem(it.id)}>Remove</button>
                    <div className="subtotal">${(it.price * it.qty).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="summary">
              <h2>Summary</h2>
              <div className="line">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="clear" onClick={clearCart}>Clear Cart</button>
              <button className="checkout">Checkout</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;

