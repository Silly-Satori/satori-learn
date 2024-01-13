import { createBrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import Home from "../screens/home/Home";
import NotFound from "../screens/404";

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
    }
]);

