import React from 'react';
import './List.css';

const products = [
  { 
    id: 1, 
    name: 'Premium Watch', 
    description: 'High-quality watch with excellent features and elegant design.', 
    image: '/assets/watch.jpeg',
    fallbackImage: '/assets/watch.jpeg'
  },
  { 
    id: 2, 
    name: 'Premium Headphones', 
    description: 'Innovative design with modern functionality and superior sound quality.', 
    image: '/assets/headphone.jpeg',
    fallbackImage: '/assets/headphone.jpeg'
  },
  { 
    id: 3, 
    name: 'Premium Laptop', 
    description: 'Top-tier quality laptop with exceptional performance and reliability.', 
    image: '/assets/laptop.jpeg',
    fallbackImage: '/assets/laptop.jpeg'
  },
];

const List = () => {
  const handleImageError = (e, fallbackImage) => {
    e.target.src = fallbackImage;
  };

  return (
    <section className="content">
      <h2 className="products-heading">Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name}
              onError={(e) => handleImageError(e, product.fallbackImage)}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
