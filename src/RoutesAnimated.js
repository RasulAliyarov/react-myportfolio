import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from 'framer-motion'

function RoutesAnimated() {
    const location = useLocation()
    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesAnimated