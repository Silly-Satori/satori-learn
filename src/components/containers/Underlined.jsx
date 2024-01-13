import React from "react";
import { NavLink } from "react-router-dom";

function Underlined  ({ to, children, onClick }) {
    return (
        <NavLink
            onClick={onClick ? onClick : null}
            to={to}
            className="text-text hover:text-secondary font-semibold transition underline-animation mx-2"
        >
            {children}
        </NavLink>
    );
};

export default Underlined;
