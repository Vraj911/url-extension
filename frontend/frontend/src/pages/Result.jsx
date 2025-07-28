import React, { useEffect, useState } from "react";
import "../css/Result.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { fetchShortUrl } from "../services/urlService";
import ShortUrlBox from "../components/ui/result/ShortUrlBox";
import ShareButtons from "../components/ui/result/ShareButtons";
import UrlPreview from "../components/ui/result/UrlPreview";
import BackButton from "../components/layout/BackButton";
const Result = () => {
  const { token } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const originalUrl = location.state?.originalUrl;
  const [shortUrl, setShortUrl] = useState("");
  useEffect(() => {
    if (!originalUrl) {
      navigate("/");
      return;
    }
    const fetchUrl = async () => {
      try {
        const response = await fetchShortUrl(originalUrl, token);
        const fullUrl = `${import.meta.env.VITE_BACKEND_URL}url/${response}`;
        setShortUrl(fullUrl);
      } catch (error) {
        console.error("Failed to fetch short URL", error);
        alert("Something went wrong. Try again.");
        navigate("/");
      }
    };
    fetchUrl();
  }, [originalUrl, navigate, token]);
  if (!shortUrl) return null;
  return (
    <div className="result-wrapper">
      <h2>Your Shortened URL</h2>
      <ShortUrlBox shortUrl={shortUrl} />
      <ShareButtons shortUrl={shortUrl} />
      <UrlPreview originalUrl={originalUrl} />
      <BackButton />
    </div>
  );
};
export default Result;
