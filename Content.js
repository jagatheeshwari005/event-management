import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <section className="Content">
      <div className="content-text">
        <h2>Premium Electronics for Modern Life</h2>
        <p>
          Discover a curated selection of laptops, audio gear, and wearables
          engineered for performance and style. We focus on quality, value, and
          fast delivery so you can shop with confidence.
        </p>
        <div className="content-actions">
          <Link to="/products" className="btn primary">Shop Now</Link>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
        <div className="badges">
          <span className="badge">Free Shipping</span>
          <span className="badge">24/7 Support</span>
          <span className="badge">Secure Checkout</span>
        </div>
      </div>
      <div className="content-image">
        <img src="/assets/laptop.jpeg" alt="Featured Tech Product" />
      </div>
    </section>
  );
};

export default Content;
