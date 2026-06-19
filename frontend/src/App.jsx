import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import "./App.css";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ComingSoon from "./pages/comingsoon.jsx";
import NotFound from "./pages/NotFound.jsx";

import SignupPage from "./pages/auth/SignupPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import Landing from "./pages/landing/Landing.jsx";
import About from "./pages/about/About.jsx";

import Listings from "./pages/listings/Listings.jsx";
import DisplayFullListing from "./pages/listings/DisplayFullListing.jsx";

import Moderation from "./pages/listings/mods/Moderation.jsx";

import TermsOfService from "./pages/legal/TermsOfService.jsx";
import PrivacyPolicy from "./pages/legal/Privacy.jsx";
import RelationToSchool from "./pages/legal/RelationToSchool.jsx";

import Profile from "./pages/account/Profile.jsx";
import Profiles from "./pages/account/Profiles.jsx";
import Settings from "./pages/account/Settings.jsx";

import { darkTheme, lightTheme } from "./themes.js";
import { ThemeProvider, useThemeMode } from "flowbite-react";

import ScrollToTop from "./components/ScrollToTop";

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
                <div className="padding-buffer pt-16">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/listings" element={<Listings />} />
                        <Route path="/listings/:listingId" element={<DisplayFullListing />} />

                        <Route path="/moderation" element={<Moderation />} />
                        <Route path="/moderation/:listingId" element={<DisplayFullListing />} />

                        <Route path="/messenger" element={<ComingSoon />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/profile/:userId" element={<Profile />} />
                        <Route path="/profile" element={<Profiles />} />
                        <Route path="/dashboard" element={<ComingSoon />} />
                        <Route path="/settings" element={<Settings />} />

                        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
                        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/legal/relation-to-school" element={<RelationToSchool />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default function App() {
    return (
        <div className="">
            <Router>
                <ScrollToTop />
                <AppShell />
            </Router>   
        </div>
    );
}