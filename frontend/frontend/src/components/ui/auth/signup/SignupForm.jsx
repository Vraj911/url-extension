import React from "react";
import "./css/SignupForm.css";
const SignupForm = ({ formData, handleChange, handleSubmit, error, success }) => (
  <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input
      type="text"
      name="username"
      required
      value={formData.username}
      onChange={handleChange}
    />
    <label>Email:</label>
    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
    />
    <label>Password:</label>
    <input
      type="password"
      name="password"
      required
      value={formData.password}
      onChange={handleChange}
    />
    <button type="submit">Sign Up</button>
    {error && <p className="error">{error}</p>}
    {success && <p className="success">{success}</p>}
  </form>
);
export default SignupForm;
