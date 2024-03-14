import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../containers/styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { RiInstagramFill , RiTwitterFill, RiLinkedinFill,RiYoutubeFill, RiFacebookFill } from "react-icons/ri";
import { CiLocationArrow1, CiMail,  CiPhone,CiLocationOn } from "react-icons/ci"

function Footer() {
    return (
        <footer className="bg-nav h-auto flex-col sm:">
            <div className="flex ">
            <div className="left flex-col p-4 pb-8">
                <img src="/assets/home/satori-logo.png"/>
                <span className=" tag p-6 ">Subscribe to our channel</span>
                <div className="logo text-secondary pt-2 ">
                    <RiInstagramFill className="text-xl mr-4"/>
                    <RiTwitterFill className="text-xl mr-4"/>
                    <RiLinkedinFill className="text-xl mr-4"/>
                    <RiYoutubeFill className="insta mr-4"/>
                    <RiFacebookFill className="text-xl mr-4"/>
                </div>
            </div>
            <div className="right flex-col lg:flex-row  ">
                <span className="contact text-secondary px-7">Contact us</span>
                <CiMail className="symbol text-secondary relative top-[6px] mx-2.5"/>satori.learn@satori.org
                <CiPhone className="text-secondary relative top-[5px] mx-2.5"/>+91 1234567890
                <CiLocationOn className="text-secondary relative top-[5px] mx-2.5"/>Mumbai, India
            </div>
            </div>
            <hr className="border border-secondary w-3/4 mx-36" />
            <div className="bottom flex justify-evenly items-center mt-2.5 mb-2.5">
            <span>© 2024 </span>
            <span>All Rights Reserved</span>
                    <a href="" className=" underline hover:text-blue-800">Terms & Conditions</a>
                    <a href="" className="underline hover:text-blue-800">Privacy Policy</a>

            {/* </span> */}
            </div>
        </footer>
        );
    }
    
    // <footer className="flex shadow bg-secondary bottom-0 w-full">
    //     <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-2">
    //         <div className="sm:flex sm:items-center sm:justify-center text-center ">
    //             <a
    //                 href="%PUBLIC_URL%/about"
    //                 className="flex items-center mb-2 sm:mb-0 hover:scale-[103%] md:hover:scale-105 transform transition-all duration-300 ease-in-out"
    //             >
    //                 <span className="self-center font-semibold break-words text-text text-lg lg:text-xl">
    //                     <Link to="/about">
    //                         Made by Manas, Chinmay, Shruti and Parth.
    //                     </Link>
                        
    //                 </span>
    //             </a>
    //         </div>
    //         <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
    //         <span className="block text-xs text-center">
    //             © 2024 . No rights reserved. For now.
    //         </span>
    //     </div>
    // </footer>
    export default Footer;
