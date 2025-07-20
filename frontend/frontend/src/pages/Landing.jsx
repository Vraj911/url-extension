import React from "react";
import '../css/Landing.css';
import {useNavigate} from "react-router-dom";
const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-container">
            <h1>Welcome to Shortify</h1>
            <p>Less is more — shorten your links with style.</p>
            <button onClick={() => navigate('/signup')}>Get Started</button>
        </div>
    );
}
export default Landing;