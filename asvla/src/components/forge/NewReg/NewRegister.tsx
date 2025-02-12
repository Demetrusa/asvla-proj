import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./NewRegister.scss";

interface NewRegisterProps {
  onRegister: () => void;
}

const NewRegister: React.FC<NewRegisterProps> = ({ onRegister }) => {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    alert("Registration successful! You can now log in.");
    onRegister();

    // Redirect to the main page (or the desired page) after successful registration
    navigate("/Login"); // Redirect to the main page
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Repeat Password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default NewRegister;
