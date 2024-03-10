import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./styles/Logo.css"; // Import the CSS file for additional styles if needed

function Logo() {
    const { theme } = useContext(ThemeContext);
    let logo = "/assets/logo-pd.svg";
    const logoSrc = theme === "dark" ? logo : logo;

    return (
        <NavLink to="/" className="logo-container">
            <img
                src={logoSrc}
                alt="Satori Logo"
                className="h-8 logo-img transition-all duration-300 hover:-translate-y-1 scale-110"
            />
        </NavLink>
    );
    
}

export default Logo;
