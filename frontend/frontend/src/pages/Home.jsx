import React, { useState } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
    const navigate=useNavigate();
    const [longUrl, setLongUrl] = useState("");
      const handleShorten = async () => {
    try {
     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api`, {
  longUrl: longUrl
});
      const shortUrl = response.data.shortUrl;
      navigate("/result", { state: { shortUrl } });
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten. Please try again.");
    }
  };
  return (
    <div className="home-wrapper"><h1 className="gradient-text">Welcome!!</h1>
      <h3>Make your tidy URL short ...here</h3>
      <div className="container">
        <input type="text" value={longUrl} onChange={(e)=>{setLongUrl(e.target.value)}} placeholder="Enter your URL here"/>
        <Link to="/result"><button onClick={()=>{handleShorten}}>Shorten</button></Link>
      </div>
       <div className="testimonials">
  <h3>Testimonials</h3>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p>"This service is amazing! It made sharing my links so much easier!"</p>
      <span>- User A</span>
    </div>
    <div className="testimonial-card">
      <p>"I love how quick and simple it is to shorten URLs. Highly recommend!"</p>
      <span>- User B</span>
    </div>
    <div className="testimonial-card">
      <p>"Great tool for managing my links. The sharing options are a bonus!"</p>
      <span>- User C</span>
    </div>
  </div>
</div>
<div className="stats">
  <h3>Statistics</h3>
  <div className="stat-cards">
    <div className="stat-card">
      <h4>Total URLs Shortened</h4>
      <p>0</p>
    </div>
    <div className="stat-card">
      <h4>Users Registered</h4>
      <p>0</p>
    </div>
    <div className="stat-card">
      <h4>Average Clicks per URL</h4>
      <p>0</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
