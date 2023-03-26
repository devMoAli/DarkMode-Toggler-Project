import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainContent from "./Components/Main/Main";

// passing Props and using useState Hook 
export default function App() {
    const[darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <div className="container">
            <Navbar
            darkMode={darkMode}
            toggleDarkMode={() => {toggleDarkMode()}}
            />
            <MainContent
            darkMode={darkMode}
            />
        </div>
    )
}