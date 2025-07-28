import React from "react";
import "../css/Howitworks.css";
const Howitworks = () => {
  const steps = [
    {
      title: "1. Enter Your URL",
      description: "Paste your long URL into the input box on the homepage.",
    },
    {
      title: "2. Click Shorten",
      description: "Our system instantly generates a short, shareable link for you.",
    },
    {
      title: "3. Share & Track",
      description: "Copy the shortened link, share it anywhere, and track its performance!",
    },
  ];
  return (
    <div className="howitworks-container">
      <h2 className="title">🚀 How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Howitworks;
