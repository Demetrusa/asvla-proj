import React from "react";
import { Link } from "react-router-dom";

const PrimarySearchAppBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/promo">Promo</Link>
        </li>
        <li>
          <Link to="/top-games">Top Games</Link>
        </li>
        <li>
          <Link to="/week-games">Week Games</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimarySearchAppBar;
