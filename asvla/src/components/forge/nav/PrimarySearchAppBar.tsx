import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "./PrimarySearchAppBar.scss";

const PrimarySearchAppBar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
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
        <>
          <div className="authBox">
            <div className="loginButton">
              <Link to="/login">
                <button>
                  <FontAwesomeIcon icon={faUser} />{" "}
                  <span className="buttonText">Login</span>
                </button>
              </Link>
            </div>
            <div className="registerButton">
              <Link to="/register">
                <button>
                  <FontAwesomeIcon icon={faAddressCard} />{" "}
                  <span className="buttonText">Register</span>
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="logoutButton">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default PrimarySearchAppBar;
