import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <h2>
            IE<i className="fas fa-cookie-bite logo-cookie"></i>T
          </h2>
        </div>
      </Link>
      <i className="fas fa-bars fa-2x hamburger-menu"></i>
    </nav>
  );
}

export default Navbar;
