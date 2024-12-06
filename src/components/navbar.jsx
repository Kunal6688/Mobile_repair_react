import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_repair.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-zinc-100 shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
                {/* Logo Section */}
                <div className="logo font-bold text-2xl flex items-center">
                    {/* <img src={logo} alt="SS Repairs Logo" className="h-10 mr-2" /> */}
                    <Link to="/"><span className="text-green-700">SS</span> Repairs</Link>
                </div>

                {/* Hamburger Menu Button (Visible on Mobile) */}
                <button
                    className="text-green-700 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                {/* Navigation Links (Hidden on Mobile, Visible on Larger Screens) */}
                <ul className="navMenu hidden md:flex gap-10 items-center text-lg">
                    <li className="hover:text-green-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-green-500"><Link to="/About">About</Link></li>
                    <li className="hover:text-green-500"><Link to="/ContactPage">Contact</Link></li>
                    <li className="hover:text-green-500"><Link to="/FAQ">FAQs</Link></li>
                </ul>

                {/* Call-to-Action Button */}
                <div className="navButton hidden md:block">
                    <Link to="/RepairPage">
                        <button className="bg-button text-white p-3 rounded-lg">
                            Book A Repair
                        </button>
                    </Link>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <ul className="flex flex-col gap-4 items-center text-lg bg-zinc-100 md:hidden">
                    <li className="hover:text-green-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-green-500"><Link to="/About">About</Link></li>
                    <li className="hover:text-green-500"><Link to="/ContactPage">Contact</Link></li>
                    <li className="hover:text-green-500"><a href="#">FAQs</a></li>
                    <li>
                        <Link to="RepairPage">
                            <button className="bg-button text-white px-4 py-2 rounded-lg">
                                Book A Repair
                            </button>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
