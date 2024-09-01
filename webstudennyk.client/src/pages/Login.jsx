import React, { useState } from "react";
import axios from "axios";
import "./Auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5139/api/accounts/authenticate",
        {
          email,
          password,
        }
      );

      if (response.data.isAuthSuccessful) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/userprofile";
      } else {
        setError("Invalid login credentials");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Вхід</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Увійти</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
