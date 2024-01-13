import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Footer() {
    return (
        <footer className="flex shadow bg-secondary bottom-0 w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-2">
                <div className="sm:flex sm:items-center sm:justify-center text-center ">
                    <a
                        href="%PUBLIC_URL%/about"
                        className="flex items-center mb-2 sm:mb-0 hover:scale-[103%] md:hover:scale-105 transform transition-all duration-300 ease-in-out"
                    >
                        <span className="self-center font-semibold break-words text-text text-lg lg:text-xl">
                            <Link to="/about">
                                Made by Manas, Chinmay, Shruti and Parth.
                            </Link>
                            
                        </span>
                    </a>
                </div>
                <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <span className="block text-xs text-center">
                    © 2024 . No rights reserved. For now.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
