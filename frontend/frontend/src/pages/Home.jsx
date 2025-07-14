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
    <div className="home-wrapper">
      <h2>Welcome!!</h2>
      <h3>Make your tidy URL short ...here</h3>
      <div className="container">
        <input type="text" value={longUrl} onChange={(e)=>{setLongUrl(e.target.value)}} placeholder="Enter your URL here"/>
        <Link to="/result"><button onClick={()=>{handleShorten}}>Shorten</button></Link>
      </div>
    </div>
  );
};

export default Home;
