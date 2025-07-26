import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccess(data.message);
        setError(null);
        navigate("/home");
      } else {
        setError(data.error || "Login failed");
        setSuccess(null);
      }
    } catch (err) {
      console.log("Sending login data:", formData);

      console.error(err);
      setError("An error occurred while logging in.");
      setSuccess(null);
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>This is where users can log in to their accounts.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button
        type="button"
        className="nav-button back-home"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};
export default Login;
