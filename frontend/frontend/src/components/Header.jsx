import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
  <Link to="/" className="logo" style={{ textDecoration: "none", }}>
        🔗 Shortify
      </Link>      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
