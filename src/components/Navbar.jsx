import React from "react";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <img src="/assets/satori-logo.png" className="logo" />

      <input className="input" placeholder="Learn what you like" />
      <div className="nav-compo">
        <a >Courses</a>
        <a>About</a>
      </div>

      <button className="login">Login</button>
      <button className="signup">SignUp</button>
    </div>
  );
}

export {Navbar};