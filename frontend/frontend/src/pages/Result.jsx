import React from "react";
import "../css/Result.css";
import { useLocation,useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaRedditAlien, FaPinterestP, FaTumblr, FaQuora, FaYoutube, FaSnapchatGhost } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';
const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const shortUrl= location.state?.shortUrl || "No URL shortened yet";
    if(!shortUrl) {
        navigate("/");
        return null; 
    }
    const handlecopy=()=> {
        navigator.clipboard.writeText(shortUrl)
            .then(() => {
                alert("Short URL copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy. Please try again.");
            });
    }
  return (
    <div className="result-wrapper">
      <h2>Your Shortened URL</h2>
      <div className="shortened-url">
        <input type="text" value={shortUrl} readOnly />
        <button onClick={()=>{handlecopy}}>Copy</button>
      </div>
<div className="share-container">
        <h3>Share your shortened URL:</h3>
     <div className="share-buttons">
  <button title="Share on Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`, '_blank')}><FaFacebookF /></button>
  <button title="Share on Twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check%20this%20out&url=${encodeURIComponent(shortUrl)}`, '_blank')}><FaTwitter /></button>
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
}
export default Result;