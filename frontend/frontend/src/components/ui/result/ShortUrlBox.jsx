import React from "react";
import './css/ShortUrlBox.css';
const ShortUrlBox = ({ shortUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => alert("Short URL copied to clipboard!"))
      .catch(() => alert("Failed to copy. Please try again."));
  };
  const handleVisit = () => {
    if (shortUrl) window.open(shortUrl, "_blank");
    else alert("Short URL not available!");
  };
  return (
    <div className="shortened-url">
      <input type="text" value={shortUrl} readOnly />
      <button onClick={handleCopy}>Copy</button>
      <button onClick={handleVisit}>Visit</button>
    </div>
  );
};
export default ShortUrlBox;
