import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
const Header = () => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const warning = async (e) => {
    e.preventDefault(); 
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        const response = await fetch(`${BACKEND_URL}auth/logout`, {
          method: "POST",
          credentials: "include", 
        });
        if (response.ok) {
          alert("Logged out successfully.");
          navigate("/login"); 
        } else {
          const data = await response.json();
          alert(data.error || "Logout failed");
        }
      } catch (error) {
        console.error("Logout error:", error);
        alert("Something went wrong during logout.");
      }
    }
  };
  return (
    <header className="header">
      <Link to="/" className="logo" style={{ textDecoration: "none" }} onClick={warning}>
        🔗 <span>Shortify</span>
      </Link>
      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
