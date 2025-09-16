import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Sample product data - in a real app, this would come from an API
  const products = {
    '1': {
      name: 'Premium Headphones',
      price: '$299',
      category: 'Audio',
      image: 'https://via.placeholder.com/500x400/3498db/ffffff?text=Premium+Headphones',
      description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and premium materials.',
      features: ['Wireless Bluetooth 5.0', 'Active Noise Cancellation', '30-hour battery life', 'Premium leather padding', 'Quick charge technology'],
      specifications: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32 ohms',
        'Weight': '250g',
        'Connectivity': 'Bluetooth 5.0, 3.5mm jack'
      }
    },
    '2': {
      name: 'Smart Watch',
      price: '$199',
      category: 'Wearables',
      image: 'https://via.placeholder.com/500x400/e74c3c/ffffff?text=Smart+Watch',
      description: 'Stay connected and track your fitness with our advanced smartwatch. Features heart rate monitoring, GPS, and week-long battery life.',
      features: ['Heart Rate Monitor', 'GPS Tracking', '7-day battery life', 'Water resistant', 'Sleep tracking'],
      specifications: {
        'Display': '1.4" AMOLED',
        'Battery': '7 days',
        'Water Resistance': '5ATM',
        'Sensors': 'Heart rate, GPS, Accelerometer',
        'Compatibility': 'iOS & Android'
      }
    },
    '3': {
      name: 'Wireless Speaker',
      price: '$149',
      category: 'Audio',
      image: 'https://via.placeholder.com/500x400/2ecc71/ffffff?text=Wireless+Speaker',
      description: 'Powerful portable speaker with 360-degree sound. Perfect for parties, outdoor activities, or home entertainment.',
      features: ['360-degree sound', 'Waterproof design', '12-hour battery', 'Voice assistant compatible', 'Multi-device pairing'],
      specifications: {
        'Power Output': '20W',
        'Battery Life': '12 hours',
        'Connectivity': 'Bluetooth 5.0, Wi-Fi',
        'Water Rating': 'IPX7',
        'Dimensions': '200 x 85 x 85mm'
      }
    }
  };

  // Special EXP4 product data
  const exp4Product = {
    name: 'EXP4 Revolutionary Device',
    price: '$499',
    category: 'Innovation',
    image: 'https://via.placeholder.com/500x400/9b59b6/ffffff?text=EXP4+Device',
    description: 'The future is here with EXP4! This revolutionary device combines cutting-edge technology with innovative design to deliver an unprecedented user experience.',
    features: ['AI-powered interface', 'Holographic display', 'Quantum processing', 'Neural connectivity', 'Unlimited possibilities'],
    specifications: {
      'Processor': 'Quantum Core X1',
      'Display': 'Holographic 3D',
      'Memory': '1TB Neural Storage',
      'Connectivity': 'Quantum Link, 6G',
      'Power': 'Perpetual Energy Cell'
    }
  };

  // Determine which product to show
  const isExp4 = window.location.pathname === '/exp4';
  const product = isExp4 ? exp4Product : products[id];

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="back-btn">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/products">Products</Link> / 
          <span>{product.name}</span>
        </div>

        <div className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            {isExp4 && <div className="exp4-badge">EXP4 SPECIAL</div>}
          </div>

          <div className="product-info">
            <div className="category">{product.category}</div>
            <h1>{product.name}</h1>
            <div className="price">{product.price}</div>
            <p className="description">{product.description}</p>

            <div className="features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="specifications">
          <h2>Specifications</h2>
          <div className="spec-grid">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="spec-item">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </div>

        {isExp4 && (
          <div className="exp4-special">
            <h2>🚀 You've Discovered EXP4!</h2>
            <p>Congratulations! You've found our most exclusive product. EXP4 represents the pinnacle of innovation and technology.</p>
            <div className="exp4-features">
              <div className="feature-highlight">
                <h4>Revolutionary Technology</h4>
                <p>Experience the future with quantum processing and AI integration.</p>
              </div>
              <div className="feature-highlight">
                <h4>Exclusive Access</h4>
                <p>Limited availability - only for our most valued customers.</p>
              </div>
              <div className="feature-highlight">
                <h4>Unlimited Potential</h4>
                <p>Adapt and evolve with your needs using neural connectivity.</p>
              </div>
            </div>
          </div>
        )}

        <div className="navigation">
          <Link to="/products" className="back-btn">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
