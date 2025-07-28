import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../../services/reviewService";
import { useAppContext } from "../../../context/AppContext";
import './css/ReviewList.css';
const ReviewList = () => {
  const { token } = useAppContext();
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);
  useEffect(() => {
    const loadReviews = async () => {
      const data = await fetchReviews(token);
      setReviews(data);
    };
    loadReviews();
  }, [token]);
  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };
  return (
    <div className="reviews-container">
      <h3>User Reviews</h3>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.slice(0, visibleReviews).map((review, idx) => (
            <div key={idx} className="review-card">
              <h4>{review.name}</h4>
              <p className="review-email">{review.email}</p>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
      {visibleReviews < reviews.length && (
        <button
          className="load-more-btn"
          onClick={handleLoadMore}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "rgb(149, 149, 247)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }} >
          Load More
        </button>
      )}
    </div>
  );
};
export default ReviewList;
