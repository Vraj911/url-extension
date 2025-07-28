import React from "react";
import './css/LoginForm.css';
const LoginForm = ({ formData, handleChange, handleSubmit, error, success }) => (
  <form onSubmit={handleSubmit} className="login-form">
    <label>Email:</label>
    <input type="email" name="email" required value={formData.email} onChange={handleChange} />
    <label>Password:</label>
    <input type="password" name="password" required value={formData.password} onChange={handleChange} />
    <button type="submit">Login</button>
    {error && <p className="error">{error}</p>}
    {success && <p className="success">{success}</p>}
  </form>
);
export default LoginForm;
