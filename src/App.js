import { useContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;