import React from "react";
//import "./styles/Navbar.css";
import { useState, useEffect } from "react";
import Button from "./containers/Button";
import LogoComponent from "./containers/LogoComponent";
import { NavLinkUnderlined } from "./containers/NavLinkUnderline";
import axios from "axios";

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        try {
            let session = localStorage.getItem("session");
            if (session) {
                // send a post request to the backend to get the user profile
                axios
                    .post("http://localhost:8000/user/info", {
                        token: session,
                    })
                    .then((res) => {
                        setUser(res.data);
                    });
            }
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <nav className="bg-bg-contrast transition duration-200 ease-in-out">
            <div className="flex justify-between items-center py-4 px-8 m-0 z-1 w-full h-20 bg-bg-contrast text-[#E0EFFB]">
                <LogoComponent />

                {/* <input className="input lg:flex hidden bg-nav " placeholder="Learn what you </div>like" /> */}
                <input
                    className="h</NavLinkUnderlined>-10 w-1/2 h-14 hidden md:flex border-text border-2 bg-[#a0a0a000] rounded-[16px] px-4 py-6"
                    placeholder="Learn what you like"
                />
                <div className="items-center justify-between gap-auto space-x-5 hidden lg:flex">
                    <NavLinkUnderlined to="/courses" text="Courses">
                        Courses
                    </NavLinkUnderlined>
                    <NavLinkUnderlined to="/about" text="About">
                        About
                    </NavLinkUnderlined>
                </div>

                <div className="flex flex-row items-center gap-3 ml-5 -mr-5">
                    {user ? (
                        <div
                            className="flex items-center"
                            onClick={() => {
                                localStorage.removeItem("session");
                                setUser(null);
                            }}
                        >
                            <img
                                src={(String(user.picture).split("="))[0]}
                                alt="user image"
                                className="rounded-full h-10 w-10"
                            />
                        </div>
                    ) : (
                        <Button
                            text="Login"
                            stylevar="font-semibold text-primary bg-[#00000000] hover:bg-primary hover:text-bg p-2 rounded transition duration-500 ease-in-out border-2 border-primary py-2 rounded-[16px] hover:shadow-md hover:text-white"
                            onClick={() => {
                                let auth_link =
                                    "http://localhost:8000/auth/login";
                                window.location.href = auth_link;
                            }}
                        />
                    )}
                    <div className="lg:hidden">
                        <button
                            className="fa-solid fa-bars mx-2 fa-2xl ml-2 text-text"
                            onClick={toggleNavbar}
                        ></button>
                    </div>
                </div>
            </div>
            <div
                className={`lg:hidden ${
                    isExpanded ? "block" : "hidden"
                } bg-bg-contrast`}
            >
                <div className="flex flex-col mt-4 pb-3">
                    <div className="text-text font-semibold mb-2 text-right space-y-3 pr-5">
                        <div className="inline-flex flex-col">
                            <NavLinkUnderlined to="/courses" text="Courses">
                                Courses
                            </NavLinkUnderlined>
                            <NavLinkUnderlined to="/about" text="About">
                                About
                            </NavLinkUnderlined>
                        </div>
                    </div>
                    <div className="flex justify-end"></div>
                </div>
            </div>
        </nav>
    );
}
/*
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./containers/ToggleTheme";
import Underlined from "./containers/Underlined";
import Links from "../Links";
import {useGoogleLogin, googleLogout } from "@react-oauth/google";
import LogoComponent from "./containers/LogoComponent";
import axios from "axios";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    // fetch theme from local storage

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    const login = () => {
        let auth_link = Links.backend + "/auth/login";
        console.log(auth_link);
        // redirect 
        window.location.href = auth_link;
    }

    const logOut = () => {
        googleLogout();
        setUser(null);
    };

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                    console.log(res.data)
                })
                .catch((err) => console.log(err));
        }
        else {
            setProfile(null);
        }
    }, [user]);

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    let classNames = "text-text font-semibold mb-2 text-right";
    return (
        <nav className="bg-bg-contrast p-4 transition duration-200 ease-in-out">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-text mr-4 font-bold">
                        <NavLink to="/">
                            <LogoComponent />
                        </NavLink>
                    </div>
                    <div className="hidden md:flex">
                    </div>
                </div>

                <div className="hidden md:flex">
                    {
                    profile ? <div className="flex items-center">
                        <img src={profile.picture} alt="user image" className="rounded-full h-10 w-10" />
                        </div> :
                    <button className="text-text font-semibold mr-4" onClick={() => login()}>
                        Login
                    </button>

}*/

export { Navbar };
