import React, { useState } from "react";
import "./LoginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Define the type for the props
interface LoginFormProps {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginDataSave = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the correct content type
      },
      body: JSON.stringify({
        username: email, // Example username
        password: password, // Example password
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          // Save the token to localStorage
          localStorage.setItem("authToken", json.token);
          setToken(json.token); // Pass the token to the parent via setToken
          console.log(
            "Token saved to localStorage",
            localStorage.getItem("authToken")
          );
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  return (
    <form onSubmit={LoginDataSave} className="LogForm">
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
