import React from "react";
import './css/UrlPreview.css';
const UrlPreview = ({ originalUrl }) => (
  <div className="preview">
    <h3>Preview:</h3>
    <iframe
      src={originalUrl}
      title="URL Preview"
      width="100%"
      height="500px"
      frameBorder="0"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      allowFullScreen
    ></iframe>
    <p className="preview-note">
      Note: Some websites may not allow embedding in iframes.
    </p>
  </div>
);
export default UrlPreview;
