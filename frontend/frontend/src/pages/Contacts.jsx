import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import '../css/Contacts.css';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}url/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-subtext">If you have any questions or feedback, feel free to reach out!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="contact-input"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <textarea
            className="contact-textarea"
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            rows="5"
            required
          />
          <button className="contact-button" type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
