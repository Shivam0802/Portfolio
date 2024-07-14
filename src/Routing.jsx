import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import EducationPage from "./Pages/EducationPage";
import ProjectPage from "./Pages/ProjectPage";
import AboutPage from "./Pages/AboutPage";

const Routing = ({theme}) => {
    return (
        <>
        <div className="w-[100%] rounded">
            <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/contact" element={<ContactPage theme={theme} />} />
                <Route path="/education" element={<EducationPage theme={theme} />} />
                <Route path="/project" element={<ProjectPage theme={theme} />} />
                <Route path="/about" element={<AboutPage theme={theme} />} />
            </Routes>
        </div>
        </>
    );
};

export default Routing;