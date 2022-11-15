import React from "react";
import Logo from "./images/logo.svg";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-light ">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="DSA Tracker" width="150px" />
          </a>
          <div>
            <a href="/tutorials" className="btn btn-sm btn-dark mr-2">
              Tutorials
            </a>
            <a href="/settings" className="btn btn-sm btn-dark">
              Settings
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
