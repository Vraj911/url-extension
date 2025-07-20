import React from "react";
import '../css/Signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <p>This is where users can create a new account.</p>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>

            <button
                type="button"
                className="nav-button full-width"
                onClick={() => navigate('/login')}
            >
                Already have an account? Login
            </button>

           

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

export default Signup;
