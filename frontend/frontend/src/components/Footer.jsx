import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">🔗 Shortify</div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/how-it-works">How It Works</Link>
        </nav>
        <p className="footer-text">&copy; {new Date().getFullYear()} Shortify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
