import React from "react";
import satoriLogo from "../images/satori-logo.png";
export default function Navbar() {
  return (
    <div className="nav">
      <img src={satoriLogo} className="logo" />

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
