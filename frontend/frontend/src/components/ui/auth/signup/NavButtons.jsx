import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/NavButtons.css";
const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-buttons">
      <button className="nav-button" onClick={() => navigate("/login")}>
        Already have an account? Login
      </button>
      <button className="nav-button back-home" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};
export default NavButtons;
