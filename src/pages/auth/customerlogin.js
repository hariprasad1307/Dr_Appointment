import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css"; // Importing styles

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/customer/login", {
        email,
        password,
      });

      if (response.data.success) {
        alert("Login Successful!");
        navigate("/customer-home");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Customer Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          className="login-input"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>

        <div className="auth-links">
          <a onClick={() => alert("Forgot Password Feature Coming Soon!")}>Forgot Password?</a>
          <a onClick={() => navigate("/signup")}>Sign Up</a>
        </div>

        <button className="doctor-login" onClick={() => navigate("/doctor-login")}>
          Doctor Login
        </button>
      </form>
    </div>
  );
};

export default CustomerLogin;
