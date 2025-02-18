import React from "react";
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="Container">
        <div className="left-container">
          <div className="left-heading-content">
            <h3 className="left-heading">Share Your Files Easily</h3>
            <h6 className="left-sub-heading">No Limits, No Hassle - Just Share with a Link! </h6>
          </div>
          <div className="left-footer"></div>
        </div>
        <div className="right-container">
          <div className="login-in-box">
            <h2 className="welcome-heading"> Welcome Back!</h2>
            <div className="login-deatils"> 
              <form >
                <input type="email" name="email" placeholder="user@Example.com" className="email"  required/>
                <br></br>
                <input type="password" name="password" placeholder="Password" className="password" required />
                <br></br>
              </form>
              <div className="button"><button type="submit" className="login-btn">Login</button></div>
              <div className="right-footer"  onClick={() => navigate('/login')}>Don't have an account <a href="/register">register</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
