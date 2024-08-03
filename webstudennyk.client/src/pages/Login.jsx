import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5139/login", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      console.log("Login successful:", response.data);
      navigate("/userprofile");
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage(
        "Failed to log in. Please check your email and password."
      );
    }
  };

  return (
    <div className="auth-container">
      <h1>Вхід</h1>
      <form className="auth-form" onSubmit={handleLogin}>
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
