import React from "react";
import { useNavigate } from "react-router-dom";
import './css/NavButtons.css';
const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-buttons">
      <button className="nav-button" onClick={() => navigate("/signup")}>
        Don't have an account? Signup here
      </button>
      <button className="nav-button back-home" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};
export default NavButtons;
