import React from "react";
import "../css/Result.css";
import { useLocation,useNavigate } from "react-router-dom";
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
    </div>
  );
}
export default Result;