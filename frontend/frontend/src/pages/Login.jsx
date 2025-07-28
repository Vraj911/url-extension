import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { loginUser } from "../services/authService";
import LoginHeader from "../components/ui/auth/login/LoginHeader";
import LoginForm from "../components/ui/auth/login/LoginForm";
import NavButtons from "../components/ui/auth/login/NavButtons";
const Login = () => {
  const { saveToken } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, message } = await loginUser(formData);
      saveToken(token);
      setSuccess(message);
      setError(null);
      navigate("/home");
    } catch (err) {
      setError(err.message || "Login failed");
      setSuccess(null);
    }
  };
  return (
    <div className="login-container">
      <LoginHeader />
      <LoginForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        success={success}
      />
      <NavButtons />
    </div>
  );
};
export default Login;
