import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../containers/styles/footer.css";
import LogoComponent from "./LogoComponent";
import { FaInstagram } from "react-icons/fa";
import {
    RiInstagramFill,
    RiTwitterFill,
    RiLinkedinFill,
    RiYoutubeFill,
    RiFacebookFill,
} from "react-icons/ri";
import {
    CiLocationArrow1,
    CiMail,
    CiPhone,
    CiLocationOn,
} from "react-icons/ci";

function Footer() {
    return (
        <footer className="bg-bg-contrast h-auto flex-col">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex-col flex sm:p-4 pt-5 items-center">
                    <LogoComponent />
                    <span className=" tag p-3 whitespace-nowrap ">Learn, Sleep (Optional), Repeat</span>
                    <div className="logo text-secondary pt-2 pb-5 flex flex-row items-center">
                        <RiInstagramFill className="text-xl mr-4" />
                        <RiTwitterFill className="text-xl mr-4" />
                        <RiLinkedinFill className="text-xl mr-4" />
                        <RiYoutubeFill className="insta mr-4" />
                        <RiFacebookFill className="text-xl" />
                    </div>
                </div>
                {/*automatic gap to align the elements to right, -10 px gap*/}
                <div className="flex-grow -mr-10 sm:mr-0"></div>
                <div className="flex flex-col lg:flex-row items-center sm:items-start mx-6">
                    <span className="contact text-secondary text-bold">
                        Contact us
                    </span>
                    <div className="flex flex-row items-center align-middle px-2">
                        <CiMail className="symbol text-secondary relative mr-2" />
                        <p>satori.learn@satori.org</p>
                    </div>
                    <div className="flex flex-row items-center align-middle px-2">
                    <CiPhone className="text-secondary relative mr-2" />
                        <p>(+91)1234567890</p>
                    </div>
                    <div className="flex flex-row items-center align-middle">
                    <CiLocationOn className="text-secondary relative mr-2" />
                        <p>123, Satori Lane, Satori City, Satori Country</p>
                    </div>
                </div>
            </div>
            <hr className="border border-secondary mx-6 sm:mx-24 lg:mx-36 items-center my-4"/>
            <div className="bottom flex justify-evenly items-center mt-2.5 mb-2.5">
                <span>© 2024 </span>
                <span>All Rights Reserved</span>
                <a href="" className=" underline hover:text-blue-800">
                    Terms & Conditions
                </a>
                <a href="" className="underline hover:text-blue-800">
                    Privacy Policy
                </a>

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
