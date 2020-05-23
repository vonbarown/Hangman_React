import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const SideDrawer = ({ logoutUser, isUserLoggedIn, show, drawerClick }) => {
  // const handleScroll = () => {

  return (
    <nav className={show ? "not-logged-in open" : "side-drawer not-logged-in"}>
      <div className="app-logo">
        <Link to="/" onClick={drawerClick}>
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

export default SideDrawer;
