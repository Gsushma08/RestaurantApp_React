import React, { useState } from "react";
import "../styles/LoginRegister.css";

const LoginRegister = ({ isOpen, onClose }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted:", { loginEmail, loginPassword });
    window.location.href = "/";
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Register submitted:", {
      registerName,
      registerEmail,
      registerMobile,
      registerPassword,
    });
    setShowLogin(true);
  };

  const handleClose = () => {
    onClose();
    window.location.href = "/";
  };

  if (!isOpen) return null;

  return (
    <div className="login-register-overlay">
      <div className={showLogin ? "login-content" : "register-content"}>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {showLogin ? (
          <>
            <h2 className="login-register-title">Login</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
            <p className="toggle-form" onClick={() => setShowLogin(false)}>
              Don't have an account? Register
            </p>
          </>
        ) : (
          <>
            <h2 className="login-register-title">Register</h2>
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="Name"
                required
              />
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <label className="form-label">Mobile</label>
              <input
                className="form-input"
                type="tel"
                value={registerMobile}
                onChange={(e) => setRegisterMobile(e.target.value)}
                placeholder="Mobile Number"
                required
              />
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-button">
                Register
              </button>
            </form>
            <p className="toggle-form" onClick={() => setShowLogin(true)}>
              Already have an account? Login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;

