import { createBrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import Home from "../screens/home/Home";
import NotFound from "../screens/404";
import AuthPage from "../screens/Auth";
import Course from "../screens/course/Course";
import Pay from "../screens/courses/Pay";
import ViewCourse from "../screens/viewCourse/viewCourse";
import UserPage from "../screens/user/userPage";

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
    },
    {
        path: "/pay",
        element: [
            <Navbar />,
            <Routes>
                <Route path="/" element={<Pay />} />
            </Routes>
        ]
    },
    {
        path: "/viewCourse/:id",
        element: [
            <Navbar />,
            <Routes>
                <Route path="/" element={<ViewCourse />} />
            </Routes>
        ]
    },
    {
        path: "/user",
        element: [
            <Navbar />,
            <Routes>
                <Route path="/" element={<UserPage />} />
            </Routes>
        ]
    }
]);

