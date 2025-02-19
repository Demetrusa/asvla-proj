import React, { useState } from "react";
import "./NewRegister.scss";
import { useNavigate } from "react-router-dom";

interface NewLoginProps {
  onLogin: () => void;
}

const NewLogin: React.FC<NewLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("authToken", token);
      alert("Login successful!");
      onLogin();

      navigate("/");

      window.dispatchEvent(new Event("authStatusChanged"));
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="register-box">
      <h2>Logino</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default NewLogin;
