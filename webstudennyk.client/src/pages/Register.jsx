import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5139/register", {
        email,
        password,
      });
      console.log(response.data);
      setErrors([]);
      navigate("/userprofile");
    } catch (error) {
      console.error("Error registering:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = [];
        for (const key in error.response.data.errors) {
          if (error.response.data.errors[key]) {
            errorMessages.push(...error.response.data.errors[key]);
          }
        }
        setErrors(errorMessages);
      } else {
        setErrors(["Сталася невідома помилка."]);
      }
    }
  };

  return (
    <div className="auth-container">
      <h1>Реєстрація</h1>
      <form className="auth-form" onSubmit={handleRegister}>
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
        <button type="submit">Зареєструватися</button>
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <div key={index} className="error-message">
                {error}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
