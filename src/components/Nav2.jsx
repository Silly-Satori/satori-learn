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
        <nav className="bg-primary p-4 transition duration-200 ease-in-out">
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
}
                    <ToggleButton
                        text={
                            <i class="fa-solid fa-circle-half-stroke fa-flip-horizontal fa-xl"></i>
                        }
                    />
                </div>

                <div className="md:hidden">
                    <button
                        className="fa-solid fa-bars mx-2 fa-2xl ml-3"
                        onClick={toggleNavbar}
                    ></button>
                </div>
            </div>

            <div className={`md:hidden ${isExpanded ? "block" : "hidden"}`}>
                <div className="flex flex-col mt-4">
                    <div className="text-text font-semibold mb-2 text-right">
                    </div>
                    <div className="flex justify-end">
                        <ToggleButton
                            text={
                                <>
                                    <i class="fa-solid fa-circle-half-stroke fa-flip-horizontal fa-xl"></i>
                                    <span className="ml-2">Toggle Theme</span>
                                </>
                            }
                        />
                    </div>
                    <div className="flex justify-end">
                        {profile ? (
                            <div>
                                <img src={profile.picture} alt="user image" />
                                <h3>User Logged in</h3>
                                <p>Name: {profile.name}</p>
                                <p>Email Address: {profile.email}</p>
                                <br />
                                <br />
                                <button onClick={logOut}>Log out</button>
                            </div>
                        ) : (
                            <button onClick={() => login()}>
                                Sign in with Google 🚀{" "}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
