import React, { useEffect, useState } from "react";
import "../css/Result.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane,
  FaRedditAlien, FaPinterestP, FaTumblr, FaQuora, FaYoutube, FaSnapchatGhost
} from 'react-icons/fa';
const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const originalUrl = location.state?.originalUrl;
  const [shortUrl, setShortUrl] = useState("");
  useEffect(() => {
    if (!originalUrl) {
      navigate("/");
      return;
    }
   const fetchShortUrl = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}url/getshorturl`,
      { originalUrl } 
    );
    const fullUrl = `${import.meta.env.VITE_BACKEND_URL}${response.data.shortUrl}`;
    console.log("Requesting:", `${import.meta.env.VITE_BACKEND_URL}url/getshorturl`);
    setShortUrl(fullUrl);
  } catch (error) {
    console.error("Failed to fetch short URL", error);
    alert("Something went wrong. Try again.");
    navigate("/");
  }
};

    fetchShortUrl();
  }, [originalUrl, navigate]);
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => alert("Short URL copied to clipboard!"))
      .catch(err => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy. Please try again.");
      });
  };
  if (!shortUrl) return null;
  return (
    <div className="result-wrapper">
      <h2>Your Shortened URL</h2>
      <div className="shortened-url">
        <input type="text" value={shortUrl} readOnly />
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div className="share-container">
        <h3>Share your shortened URL:</h3>
        <div className="share-buttons">
          <button title="Share on Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`, '_blank')}><FaFacebookF /></button>
          <button title="Share on Twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check this out&url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaTwitter /></button>
          <button title="Share on LinkedIn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaLinkedinIn /></button>
          <button title="Share on WhatsApp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shortUrl)}`, '_blank')}><FaWhatsapp /></button>
          <button title="Share on Telegram" onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaTelegramPlane /></button>
          <button title="Share on Reddit" onClick={() => window.open(`https://reddit.com/submit?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaRedditAlien /></button>
          <button title="Share on Pinterest" onClick={() => window.open(`https://pinterest.com/pin/create/button?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaPinterestP /></button>
          <button title="Share on Tumblr" onClick={() => window.open(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(shortUrl)}`, '_blank')}><FaTumblr /></button>
          <button title="Share on Quora" onClick={() => window.open(`https://www.quora.com/share?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaQuora /></button>
          <button title="Share on YouTube" onClick={() => window.open(`https://www.youtube.com/share?url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaYoutube /></button>
          <button title="Share on Snapchat" onClick={() => window.open(`https://www.snapchat.com/share?text=${encodeURIComponent(shortUrl)}`, '_blank')}><FaSnapchatGhost /></button>
        </div>
      </div>
    </div>
  );
};
export default Result;
