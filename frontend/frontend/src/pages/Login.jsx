import React from "react";
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>This is where users can log in to their accounts.</p>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
        <button
                type="button"
                className="nav-button back-home"
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
    </div>
  );
};

export default Login;
