import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import whitelogo from "../../assets/horizontal-w.png";
import blacklogo from "../../assets/horizontal-b.png";
import { ThemeContext } from "../../context/ThemeContext";
import "./styles/Logo.css"; // Import the CSS file for additional styles if needed

function Logo() {
    const { theme } = useContext(ThemeContext);
    const logoSrc = theme === "dark" ? whitelogo : blacklogo;

    return (
        <NavLink to="/" className="logo-container">
            <img
                src={logoSrc}
                alt="Lyte CDN"
                className="h-8 logo-img transition sweep 0.3s ease-in-out forwards"
                onMouseEnter={(e) =>
                    (e.target.style.animation =
                        "sweep 0.3s ease-in-out forwards")
                }
                onMouseLeave={(e) =>
                    (e.target.style.animation =
                        "unsweep 0.25s ease-in-out forwards")
                }
            />
        </NavLink>
    );
}

export default Logo;
