// LoginForm.tsx
import React, { useState } from "react";
import "./LoginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoginDataSave = () => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the correct content type
    },
    body: JSON.stringify({
      username: "mor_2314", // Example username
      password: "83r5^_", // Example password
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (json.token) {
        // Save the token to localStorage
        localStorage.setItem("authToken", json.token);
      }
    })
    .catch((err) => {
      console.error("Login failed:", err);
    });
};

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the login data to an API and handle the response (token)
    console.log("Logging in:", { email, password });
    // If success, save token to localStorage or sessionStorage
  };

  return (
    <form onSubmit={handleLogin} className="LogForm">
      <FontAwesomeIcon icon={faUser} className="LogLogo" />

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={LoginDataSave}>
        Login
      </button>
    </form>
  );
};
// localStorage.setItem("token", "your-jwt-token");

export default LoginForm;
