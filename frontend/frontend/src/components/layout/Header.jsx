import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Header.css";
import { useAppContext } from "../../context/AppContext";
import { logoutUser } from "../../services/authService";
const Header = () => {
  const navigate = useNavigate();
  const { clearToken } = useAppContext();
  const handleLogoutClick = async (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      const success = await logoutUser();
      if (success) {
        clearToken();
        alert("✅ Logged out successfully.");
        navigate("/login");
      } else {
        alert("❌ Logout failed. Please try again.");
      }
    }
  };
  return (
    <header className="header">
      <Link to="/" className="logo" style={{ textDecoration: "none" }} onClick={handleLogoutClick}>
        🔗 <span>Shortify</span>
      </Link>
      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/howitworks">How It Works</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
    </header>
  );
};
export default Header;
