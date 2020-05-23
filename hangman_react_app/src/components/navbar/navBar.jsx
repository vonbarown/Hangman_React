import React from "react";
import { Link } from "react-router-dom";
import { DrawerToggleButton } from "./drawerToggle";
import "./navbar.css";

const Navbar = ({ drawerClick }) => {
  return (
    <nav className={"logged-in navbar"}>
      <div className="sidebar-toggle-button">
        <DrawerToggleButton click={drawerClick} />
      </div>
      <div className="app-logo">
        <Link to="/">
          <div className="logo">
            <h2>Home</h2>
          </div>
        </Link>{" "}
      </div>
      <div className="nav-items">
        <Link className="navbar-links" to="/hangman/general">
          General Game
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
