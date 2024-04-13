import { useContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider } from "./context/ThemeContext";
import ToggleTheme from "./components/containers/ToggleTheme";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="hidden">
        <ToggleTheme/>
      </div>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;