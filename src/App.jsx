import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./page/Hero";
import Category from "./page/Category";
import Products from "./page/Products";
import About from "./page/About";
import Contact from "./page/Contact";
import AboutDetail from "./page/AboutDetail";
import NavbarAbout from "./components/NavbarAbout";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Hero />
                            <Category />
                            <Products />
                            <About />
                            <Contact />
                        </>
                    }
                />

                <Route path="/AboutDetail"
                    element={
                        <>
                            <NavbarAbout />
                            <AboutDetail />
                        </>
                    } />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
