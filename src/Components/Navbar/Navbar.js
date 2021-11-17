import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          IE<i className="fas fa-cookie-bite logo-cookie"></i>T
        </h2>
      </div>
      <i className="fas fa-bars fa-2x hamburger-menu"></i>
    </nav>
  );
}

export default Navbar;
