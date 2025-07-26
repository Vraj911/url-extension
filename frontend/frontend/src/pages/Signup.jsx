import React, { useState } from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setError(null);
        navigate("/login");
      } else {
        setError(data.error || "Registration failed");
        setSuccess(null);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while signing up.");
      setSuccess(null);
    }
  };
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>This is where users can create a new account.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" required value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button type="button" className="nav-button full-width" onClick={() => navigate("/login")}>
        Already have an account? Login
      </button>
      <button type="button" className="nav-button back-home" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Signup;
