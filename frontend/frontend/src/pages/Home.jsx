import React from "react";
import "../css/Home.css";
import UrlShortener from "../components/ui/home/UrlShortener.jsx";
import Stats from "../components/ui/home/Stats.jsx";
import ReviewList from "../components/ui/home/ReviewList.jsx";
const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="gradient-text">Welcome!!</h1>
      <h3>Make your tidy URL short ...here</h3>
      <UrlShortener /> 
      <Stats /> 
      <ReviewList /> 
    </div>
  );
};
export default Home;
