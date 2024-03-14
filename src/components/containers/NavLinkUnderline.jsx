import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkUnderlined = ({ to, children, onClick }) => {
    return (
        <NavLink
            onClick={onClick ? onClick : null}
            to={to}
            className="text-primary hover:text-text transition underline-animation lg:text-text lg:hover:text-primary"
        >
            {children}
        </NavLink>
    );
};