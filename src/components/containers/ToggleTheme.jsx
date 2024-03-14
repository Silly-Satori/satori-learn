import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "./Button";

const LightDarkModeToggle = (props) => {
    const { theme, setTheme } = React.useContext(ThemeContext); // Fix the useContext hook here

    useEffect(() => {
        applyTheme(theme); // Apply the initial theme on load
      }, [theme]);

    let texttouse = props.text;

    let darkModeVariables = {
        "--text": "#E0EFFB",
        "--bg": "#04101A",
        "--primary": "#1EFBD6",
        "--secondary": "#E0AA1F",
        "--accent": "#38FF98",
        "--bgcontrast": "#071928",
        "--shadow": "#010101",
        "--inverttext": "#010101",
    };

    let lightModeVariables = {
        "--text": "#010101",
        "--bg": "#fafafa",
        "--primary": "#91aa09",
        "--secondary": "#7be28a",
        "--secondarydark": "#7be28a",
        "--accent": "#cff20d",
        "--primarycontrast": "#64d97b",
        "--secondarycontrast": "#64d97b",
        "--accentcontrast": "#ff8f8f",
        "--textcontrast": "#64d97b",
        "--bgcontrast": "#64d97b",
        "--shadow": "#010101",
        "--inverttext": "#ffffff",
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setTheme("light");
            applyTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    const applyTheme = (theme) => {
        var root = document.querySelector(":root");

        if (theme === "dark") {
            for (const key in darkModeVariables) {
                root.style.setProperty(key, darkModeVariables[key]);
            }
        } else {
            for (const key in lightModeVariables) {
                root.style.setProperty(key, lightModeVariables[key]);
            }
        }
    };

    return (
        <div className="">
            <Button
                onClick={toggleTheme}
                stylevar="bg-nav font-semibold text-text hover:bg-text hover:text-invert-text p-2 rounded transition duration-500 ease-in-out"
                text={texttouse}
            />
        </div>
    );
};

export default LightDarkModeToggle;