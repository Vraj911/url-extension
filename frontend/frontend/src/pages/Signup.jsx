import React, { useState } from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";
import SignupHeader from "../components/ui/auth/signup/SignupHeader";
import SignupForm from "../components/ui/auth/signup/SignupForm";
import NavButtons from "../components/ui/auth/signup/NavButtons";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signupUser(formData);
      setSuccess(data.message);
      setError(null);
      navigate("/home");
    } catch (err) {
      setError(err.message || "Registration failed");
      setSuccess(null);
    }
  };
  return (
    <div className="signup-container">
      <SignupHeader />
      <SignupForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        success={success}/>
      <NavButtons />
    </div>
  );
};
export default Signup;
