import React, { useState } from 'react';
import './ProductsPage.css';

const CART_KEY = 'cartItems';
const addToCart = (product) => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const current = raw ? JSON.parse(raw) : [];
    const existing = current.find((it) => it.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      current.push({ id: product.id, name: product.name, price: Number(product.price.replace('$','')), image: product.image, qty: 1 });
    }
    localStorage.setItem(CART_KEY, JSON.stringify(current));
  } catch {}
};

const ProductsPage = () => {
  const [products] = useState([
    { id: 1, name: 'Premium Headphones', price: '$299', category: 'Audio', image: '/assets/headphone.jpeg' },
    { id: 2, name: 'Smart Watch', price: '$199', category: 'Wearables', image: '/assets/watch.jpeg' },
    { id: 3, name: 'Wireless Speaker', price: '$149', category: 'Audio', image: '/assets/wireless.jpeg' },
    { id: 4, name: 'Laptop Pro', price: '$1299', category: 'Computers', image: '/assets/laptop.jpeg' },
    { id: 5, name: 'Gaming Mouse', price: '$79', category: 'Accessories', image: '/assets/mouse.jpeg' },
    { id: 6, name: 'Mechanical Keyboard', price: '$159', category: 'Accessories', image: '/assets/keyboard.jpeg' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Audio', 'Wearables', 'Computers', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <p className="products-subtitle">Explore our latest tech picks</p>
      </div>

      {/* Category Filter */}
      <div className="filters-section">
        <div className="filters-row">
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
