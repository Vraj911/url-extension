import React from "react";
import './css/ReviewForm.css';
const ReviewForm = ({ formData, handleChange, handleSubmit, loading }) => (
  <form className="contact-form" onSubmit={handleSubmit}>
    <input
      className="contact-input"
      type="text"
      name="name"
      value={formData.name}
      placeholder="Your Name"
      onChange={handleChange}
      required/>
    <input
      className="contact-input"
      type="email"
      name="email"
      value={formData.email}
      placeholder="Your Email"
      onChange={handleChange}
      required/>
    <textarea
      className="contact-textarea"
      name="review"
      value={formData.review}
      placeholder="Your Reviews"
      onChange={handleChange}
      rows="5"
      required />
    <button className="contact-button" type="submit" disabled={loading}>
      {loading ? "Sending..." : "Send"}
    </button>
  </form>
);
export default ReviewForm;
