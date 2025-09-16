import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>My Website</h3>
          <p>Exploring innovative experiments and creative solutions.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </nav>
        </div>
        <div className="footer-section">
          <h4>Experiments</h4>
          <div className="experiments-simple">
            {Array.from({ length: 10 }, (_, i) => {
              const expNumber = i + 1;
                let linkTo;
                switch(expNumber) {
                  case 1: linkTo = "/"; break;
                  case 2: linkTo = "/user-profile"; break;
                  case 3: linkTo = "/calculator"; break;
                  case 4: linkTo = "/"; break;
                  case 5: linkTo = "/counter"; break;
                  default: linkTo = `/exp${expNumber}`;
                }
                return (
                  <Link key={expNumber} to={linkTo}>
                    Exp{expNumber}
                  </Link>
                );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
