import React from "react";
import { motion } from "framer-motion";
import "../css/Features.css"; 
import { useNavigate } from "react-router-dom";
const features = [
  "Customizable short links",
  "Analytics to track link performance",
  "Easy integration with your applications",
  "Secure and reliable service",
  "User-friendly interface",
  "Allows sharing links via social media" 
];
const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="features-container">
      <h1 className="features-title">Features</h1>
      <p className="features-subtext">Discover the powerful features of our URL shortening service:</p>

      <div className="features-scroll">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 1.3 }}
            className="feature-card"
          >
            {feature}
          </motion.div>
        ))}
      </div>
 <button
                type="button"
                className="nav-button back-home"
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>    </div>
  );
};

export default Features;
