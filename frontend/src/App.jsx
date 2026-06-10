// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import "./App.css";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ComingSoon from "./pages/comingsoon.jsx";

import SignupPage from "./pages/auth/SignupPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import Landing from "./pages/landing/Landing.jsx";
import About from "./pages/about/About.jsx";

import Listings from "./pages/listings/Listings.jsx";
import DisplayFullListing from "./pages/listings/DisplayFullListing.jsx";

import { darkTheme, lightTheme } from "./themes.js";
import { ThemeProvider, useThemeMode } from "flowbite-react";

function AppShell() {
    const location = useLocation();

    const { computedMode } = useThemeMode();
    const activeTheme = computedMode === "dark" ? darkTheme : lightTheme;
    const shellClassName = computedMode === "dark"
        ? "min-h-screen black-bg text-slate-100"
        : "min-h-screen bg-slate-50 text-slate-900";

    if (location.pathname === "/signup") {
        return (
            <ThemeProvider theme={activeTheme}>
                <div className={shellClassName}>
                    <SignupPage />
                </div>
            </ThemeProvider>
        );
    } else if (location.pathname === "/login") {
        return (
            <ThemeProvider theme={activeTheme}>
                <div className={shellClassName}>
                    <LoginPage />
                </div>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={activeTheme}>
            <div className={shellClassName}>
                <Header />
                <div className="padding-buffer pt-22 md:pt-18">
                    <Routes>
                        <Route path="/" exact element={<Landing />} />
                        <Route path="/listings" element={<Listings />} />
                        <Route path="/listings/:listingId" element={<DisplayFullListing />} />

                        <Route path="/messenger" element={<ComingSoon />} />
                        <Route path="/about" element={<About />} />
                        
                        {/* <Route path="/auth" element={<Authentication />} /> */}

                        <Route path="/legal/terms-of-service" element={<ComingSoon />} />
                        <Route path="/legal/privacy-policy" element={<ComingSoon />} />
                        <Route path="/legal/relation-to-school" element={<ComingSoon />} />

                        <Route path="*" element={<ComingSoon />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default function App() {
    return (
        <Router>
            <AppShell />
        </Router>
    );
}