import React, { useState } from "react";

const NewRegister: React.FC<{ onRegister: () => void }> = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    const user = { username, email, password, token: Math.random().toString(36).substring(2) };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    onRegister();
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

const NewLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("authToken", token);
      console.log("Token generated:", token);
      alert("Login successful! Token generated.");
      onLogin();
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const NewLogout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged out successfully!");
    onLogout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <NewRegister onRegister={handleLogin} />
          <NewLogin onLogin={handleLogin} />
        </>
      ) : (
        <NewLogout onLogout={handleLogout} />
      )}
    </div>
  );
};

export { NewRegister, NewLogin, NewLogout, App };