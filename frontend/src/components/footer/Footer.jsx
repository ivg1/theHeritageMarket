import { Blockquote } from "flowbite-react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer border-t border-slate-200 bg-white text-slate-900 p-10 min-h-fit h-100 max-w-screen dark:border-(--darkborder) dark:bg-(--darkbg) dark:text-white smooth-trans">
            <div className="footer-content flex flex-col lg:flex-row justify-between items-center mb-10">
                <div className="footer-logo flex items-center mb-4 md:mb-0">
                    <img draggable="false" src="/favicon.png" alt="Heritage Market Logo" className="h-20 mr-2" />
                    <span className="text-2xl font-bold">The Heritage Market</span>
                </div>
                <div className="quotation lg:m-0 mt-4">
                    <Blockquote className="text-lg font-normal text-slate-600 flex flex-col dark:text-gray-400">
                        <div className="text-lg font-normal text-slate-600 flex flex-col dark:text-gray-400">
                        "A friend is someone who knows all about you and still loves you." <br /><span className="text-right">- Elbert Hubbard</span>
                        </div>
                    </Blockquote>
                </div>
            </div>
            <div className="footer-links md:grid lg:grid-cols-7 md:grid-cols-5 sm:flex sm:flex-col sm:align-center gap-4">
                <div className="link-group flex flex-col m-2 mb-6">
                    <h1 className="text-xl font-bold mb-2">Common Links</h1>
                    <Link to="/" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Home</Link>
                    <Link to="/listings" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Listings</Link>
                    <Link to="/account" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Account</Link>
                    <Link to="/messenger" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Messenger</Link>
                    <Link to="/about" className="text-slate-600 hover:text-red-600 dark:text-gray-400">About Us</Link>
                    <Link to="/support" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Support</Link>
                </div>
                <div className="link-group flex flex-col m-2 mb-6">
                    <h1 className="text-xl font-bold mb-2">Legal</h1>
                    <Link to="/legal/terms-of-service" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Terms of Service</Link>
                    <Link to="/legal/privacy-policy" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Privacy Policy</Link>
                    <Link to="/legal/relation-to-school" className="text-slate-600 hover:text-red-600 dark:text-gray-400">Relation to school</Link>
                </div>
                <div className="link-group flex flex-col m-2 mb-6">
                    <h1 className="text-xl font-bold mb-2">Contact us</h1>
                    <p className="text-slate-600 dark:text-gray-400">Email:<br /> <Link to="mailto:info@gmail.com" className="text-red-600 hover:text-red-500">info@gmail.com</Link></p>
                    <p className="text-slate-600 dark:text-gray-400">Phone:<br /> <Link to="tel:+00000000000" className="text-red-600 hover:text-red-500">+00000000000</Link></p>
                </div>
            </div>
        </div>
    )
}