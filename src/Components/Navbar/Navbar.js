import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import NavLinks from "../SideDrawer/NavLinks";
import Backdrop from "../SideDrawer/Backdrop";
import "./Navbar.css";

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <h2>
            IE<i className="fas fa-cookie-bite logo-cookie"></i>T
          </h2>
        </div>
      </Link>
      <i
        className="fas fa-bars fa-2x hamburger-menu"
        onClick={openDrawerHandler}
      ></i>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <div className="drawer-nav">
          <NavLinks />
        </div>
      </SideDrawer>
    </nav>
  );
}

export default Navbar;
