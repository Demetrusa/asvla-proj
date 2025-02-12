import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "./PrimarySearchAppBar.scss";
import NewLogout from "../NewReg/NewLogout";

const PrimarySearchAppBar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("authToken");
      setIsAuthenticated(!!token);
    };

    // Check initial authentication status
    checkAuthStatus();

    // Set up an event listener to update the state when the localStorage changes
    window.addEventListener("storage", checkAuthStatus);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/new-login");
  };

  return (
    <nav className="navigationHeader">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/promo">Promo</Link>
      </div>
      <div>
        <Link to="/top-games">Top Game</Link>
      </div>
      <div>
        <Link to="/week-games">Week Games</Link>
      </div>
      {!isAuthenticated ? (
        <div className="authBox">
          <div className="loginButton">
            <Link to="/new-login">
              <button>
                <FontAwesomeIcon icon={faUser} />{" "}
                <span className="buttonText">Login</span>
              </button>
            </Link>
          </div>
          <div className="registerButton">
            <Link to="/new-register">
              <button>
                <FontAwesomeIcon icon={faAddressCard} />{" "}
                <span className="buttonText">Register</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="logoutButton">
          <button onClick={handleLogout}>Logout</button>
        </div>
        // <NewLogout />
      )}
    </nav>
  );
};

export default PrimarySearchAppBar;
