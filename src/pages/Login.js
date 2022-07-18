import React from "react";
import "../assets/css/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-side-img">
        <img src="/Logo.png" alt="" className="login-logo" />
      </div>
      <form className="login-form">
        <div className="login-top">
          <p>
            Welcome to Page<br></br>
            Please Sign in to your account
          </p>
        </div>
        <div className="login-input">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-buttons">
          <input
            type="submit"
            className="button login-button"
            value="Sign In"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
