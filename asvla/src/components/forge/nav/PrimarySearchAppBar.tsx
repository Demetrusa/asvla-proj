import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "./PrimarySearchAppBar.scss";

interface PrimarySearchAppBarProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const PrimarySearchAppBar: React.FC<PrimarySearchAppBarProps> = ({
  token,
  setToken,
}) => {
  const logout = () => {
    localStorage.clear();
    setToken(null);
    console.log(localStorage, " deme");
  };
  return !!token ? (
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
      <button onClick={logout}>logout</button>
    </nav>
  ) : (
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
      <div className="sighIn">
        <div className="RegissTerLogo">
          <Link to="/register">
            <span className="desktopLoginText">Register</span>
            <FontAwesomeIcon icon={faAddressCard} className="mobileLogin" />
          </Link>
        </div>
        <div className="LoginLogo">
          <Link to="/login">
            <span className="desktopLoginText">Login</span>
            <FontAwesomeIcon icon={faUser} className="mobileLogin" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PrimarySearchAppBar;
