import React from "react";
import "./NewRegister.scss";

interface NewLogoutProps {
  onLogout: () => void;
}

const NewLogout: React.FC<NewLogoutProps> = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged out successfully!");
    onLogout();
  
    // Dispatch custom event
    window.dispatchEvent(new Event("authStatusChanged"));
  };

  return (
    <div className="register-logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NewLogout;
