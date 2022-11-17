import React from "react";
import Logo from "./images/logo.svg";

const Header = () => {
  const style = {
    btn: {
      backgroundImage: "linear-gradient(grey,black)",
              color: "white",
              fontWeight:"bold",
             width : "100px"
    }
  }
  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="DSA Tracker" 
            />
          </a>
          <div>
            <a href="/tutorials" 
            
            style={style.btn}
          className="btn btn-sm btn-dark mr-2">
              Tutorials
              
            </a>
            <a href="/settings" 
            style={style.btn}
            className="btn btn-sm btn-dark">
              Settings
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
