import React, { useState } from "react";
import "../css/Reviews.css";
import { useAppContext } from "../context/AppContext";
import { submitReview } from "../services/reviewService";
import ReviewHeader from "../components/ui/review/ReviewHeader";
import ReviewForm from "../components/ui/review/ReviewForm";
import BackButton from "../components/layout/BackButton";
const Reviews = () => {
  const { token } = useAppContext();
  const [formData, setFormData] = useState({ name: "", email: "", review: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await submitReview(formData, token);
      alert("Review sent successfully!");
      setFormData({ name: "", email: "", review: "" });
    } catch (err) {
      console.error("Error submitting review:", err);
      alert(err.message || "Failed to send review");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contact-container">
      <ReviewHeader />
      <ReviewForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        loading={loading} 
      />
      <BackButton />
    </div>
  );
};
export default Reviews;
