// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ComingSoon from './pages/comingsoon.jsx';

import Landing from "./pages/Landing.jsx";
import Listings from "./pages/Listings.jsx";

import { darkTheme, lightTheme } from "./themes.js";
import { ThemeModeScript, ThemeProvider, useThemeMode } from 'flowbite-react';

function AppShell() {
    const { computedMode } = useThemeMode();
    const activeTheme = computedMode === 'dark' ? darkTheme : lightTheme;
    const shellClassName = computedMode === 'dark'
        ? 'min-h-screen bg-slate-950 text-slate-100'
        : 'min-h-screen bg-slate-50 text-slate-900';

    return (
        <ThemeProvider theme={activeTheme}>
            <Router>
                <div className={shellClassName}>
                    <Header />
                    <div className="padding-buffer pt-22 md:pt-18">
                        <Routes>
                                <Route path="/" exact element={<Landing />} />
                                <Route path="/listings" element={<Listings />} />

                                <Route path="/legal/terms-of-service" element={<ComingSoon />} />
                                <Route path="/legal/privacy-policy" element={<ComingSoon />} />
                                <Route path="/legal/relation-to-school" element={<ComingSoon />} />

                                <Route path="*" element={<ComingSoon />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default function App() {
    return (
        <>
            <ThemeModeScript />
            <AppShell />
        </>
    );
}