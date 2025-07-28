import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { shortenUrl } from "../../../services/urlService";
import './css/UrlShortener.css';
const UrlShortener = () => {
  const { token } = useAppContext();
  const navigate = useNavigate();
  const [longUrl, setLongUrl] = useState("");
  const handleShorten = async () => {
    try {
      await shortenUrl(longUrl, token);
      navigate("/result", { state: { originalUrl: longUrl } });
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten. Please try again.");
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter your URL here"
      />
      <button onClick={handleShorten}>Shorten</button>
    </div>
  );
};
export default UrlShortener;
