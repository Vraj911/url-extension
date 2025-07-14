import React, { useState } from 'react';
import Header from '../components/Header.jsx';
const Contacts = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' }); 
  };
  return (
    <>
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", color:"rgba(199, 190, 202, 1)" }}>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out!</p>

        <form onSubmit={handleSubmit} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required style={{ padding: "0.75rem", fontSize: "1rem" }}/>
    <input type="text" name="name" value={formData.email} placeholder="Your Name" onChange={handleChange} required style={{ padding: "0.75rem", fontSize: "1rem" }}/>
          <textarea  name="message"  value={formData.message} placeholder="Your Message" onChange={handleChange} rows="5" required
            style={{ padding: "0.75rem", fontSize: "1rem", resize: "vertical" }}/>
          <button
  type="submit"
  style={{
    padding: "0.75rem",
    background: "rgba(52, 24, 103, 1)",
    color: "white",
    fontSize: "1rem",
    border: "1px solid white", 
    cursor: "pointer"
  }}
>
  Send Message
</button>

        </form>
      </div>
    </>
  );
};
export default Contacts;
