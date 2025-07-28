import React from "react";
import { useNavigate } from "react-router-dom";
import './css/BackButton.css';
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="back-button">
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default BackButton;
