import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ logo }) => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Items', path: '/items' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          {logo ? (
            <img src={logo} alt="TechStore Logo" className="logo-img" />
          ) : (
            <h1 className="title">TechStore</h1>
          )}
        </Link>
      </div>
      <nav className="nav">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
