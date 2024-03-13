import React from "react";
import "./styles/Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-nav py-4 px-8 m-0 z-1 w-full h-20">
      <img src="/assets/satori-logo.png" className="flex items-center justify-center max-w-70 w-[228px]" />

      <input className="input md:flex hidden" placeholder="Learn what you like" />
       <div className=" nav-compo sm:justify-evenly "> {/*nav Compo */}
        <a >Courses</a>
        <a>About</a>
      </div>

      {/* <div className="hidden md:flex">
        <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
            <Button className="login">Drop</Button>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/courses">Courses</Dropdown.Item>
            <Dropdown.Item href="#/about">About</Dropdown.Item>
            <Dropdown.Item href="#/login">Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}

      <button className="login hidden md:flex">Login</button>

    </div>
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

export {Navbar};