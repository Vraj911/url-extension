import React from "react";
import './css/ShareButtons.css';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp,
  FaTelegramPlane, FaRedditAlien, FaPinterestP,
  FaTumblr, FaQuora, FaYoutube, FaSnapchatGhost
} from 'react-icons/fa';
const ShareButtons = ({ shortUrl }) => {
  const openShare = (url) => window.open(url, "_blank");
  return (
    <div className="share-container">
      <h3>Share your shortened URL:</h3>
      <div className="share-buttons">
        <button title="Facebook" onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortUrl)}`)}><FaFacebookF /></button>
        <button title="Twitter" onClick={() => openShare(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shortUrl)}`)}><FaTwitter /></button>
        <button title="LinkedIn" onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shortUrl)}`)}><FaLinkedinIn /></button>
        <button title="WhatsApp" onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(shortUrl)}`)}><FaWhatsapp /></button>
        <button title="Telegram" onClick={() => openShare(`https://t.me/share/url?url=${encodeURIComponent(shortUrl)}`)}><FaTelegramPlane /></button>
        <button title="Reddit" onClick={() => openShare(`https://reddit.com/submit?url=${encodeURIComponent(shortUrl)}`)}><FaRedditAlien /></button>
        <button title="Pinterest" onClick={() => openShare(`https://pinterest.com/pin/create/button?url=${encodeURIComponent(shortUrl)}`)}><FaPinterestP /></button>
        <button title="Tumblr" onClick={() => openShare(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(shortUrl)}`)}><FaTumblr /></button>
        <button title="Quora" onClick={() => openShare(`https://www.quora.com/share?url=${encodeURIComponent(shortUrl)}`)}><FaQuora /></button>
        <button title="YouTube" onClick={() => openShare(`https://www.youtube.com/share?url=${encodeURIComponent(shortUrl)}`)}><FaYoutube /></button>
        <button title="Snapchat" onClick={() => openShare(`https://www.snapchat.com/share?text=${encodeURIComponent(shortUrl)}`)}><FaSnapchatGhost /></button>
      </div>
    </div>
  );
};
export default ShareButtons;
