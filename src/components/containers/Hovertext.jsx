import React, { useState } from "react";
import "./styles/Hovertext.css"; // Import your CSS file for styling

const Hovertext = ({ children, hoverText }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="hovertext-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hovertext-child">{children}</div>
            {isHovered && <div className="hovertext-overlay">{hoverText}</div>}
        </div>
    );
};

export default Hovertext;
