import React from "react";
import { motion } from "framer-motion";
import "../css/Features.css"; 

const features = [
  "Customizable short links",
  "Analytics to track link performance",
  "Easy integration with your applications",
  "Secure and reliable service",
  "User-friendly interface"
];

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Features</h1>
      <p className="features-subtext">Discover the powerful features of our URL shortening service:</p>

      <div className="features-scroll">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 1.3 }}
            className="feature-card"
          >
            {feature}
          </motion.div>
        ))}
      </div>

      <p className="features-footer">Experience the convenience and efficiency of Shortify!</p>
    </div>
  );
};

export default Features;
