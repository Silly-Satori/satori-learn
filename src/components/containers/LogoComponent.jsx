import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import logo from "../../../assets/logo-pd.svg";
import "./styles/Logo.css"; // Import the CSS file for additional styles if needed

function Logo() {
    const { theme } = useContext(ThemeContext);
    const logoSrc = theme === "dark" ? logo : logo;

    return (
        <NavLink to="/" className="logo-container">
            <img
                src={logoSrc}
                alt="Lyte CDN"
                className="h-16 logo-img"
            />
        </NavLink>
    );
    
}

export default Logo;
