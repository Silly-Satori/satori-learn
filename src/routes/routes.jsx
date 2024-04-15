import { createBrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import Home from "../screens/home/Home";
import NotFound from "../screens/404";
import AuthPage from "../screens/Auth";
import Course from "../screens/course/Course";

export const router = createBrowserRouter([
    {
        path: "/",
        element: [
            <Navbar />,
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        ],
    },
    {
        path: "*",
        element: [
            <Navbar />,
            <NotFound />
        ]
    },
    {
        path: "/auth/:var",
        element: [
            <AuthPage />
        ]
    }, 
    {
        path: "/courses",
        element: [
            <Navbar />,
            <Routes>
                <Route path="/" element={<Course />} />
            </Routes>
        ]
    }
]);

