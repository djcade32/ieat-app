import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">VIEW MAP</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">SETTINGS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">SIGN OUT</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
