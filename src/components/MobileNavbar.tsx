'use client';

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaBars, FaTimes, FaCar } from "react-icons/fa";
import Link from "next/link";

// MobileNavbar Component
export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // State for submenu

  return (
    <div className="w-full bg-white shadow-md z-50">
      {/* Mobile Navbar */}
      <nav className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="flex items-center space-x-2 text-gray-800 text-xl">
              <FaCar className="w-8 h-8 text-green-600" />
              <span>
                Desert <span className="text-red-500 font-bold">Safari Ride</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
          {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </nav>

      {/* Collapsible Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-8 py-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/AboutUs" className="text-gray-800 hover:text-blue-600">About Us</Link>

            {/* Collapsible Submenu for Services */}
            <div className="relative">
              <div 
                className="text-gray-800 cursor-pointer hover:text-blue-600"
                onClick={() => setServicesOpen(!servicesOpen)} // Toggle submenu
              >
                Services
              </div>
              {servicesOpen && (
                <div className="flex flex-col pl-4 space-y-2 pt-2">
                  <Link href="/Servicess/webdevelopment" className="text-gray-600 hover:text-blue-500">Web Development</Link>
                  <Link href="/Servicess/interface-design" className="text-gray-600 hover:text-blue-500">Interface Design</Link>
                  <Link href="/Servicess/seo" className="text-gray-600 hover:text-blue-500">SEO</Link>
                  <Link href="/Servicess/branding" className="text-gray-600 hover:text-blue-500">Branding</Link>
                </div>
              )}
            </div>

            <Link href="/Contact" className="text-gray-800 hover:text-blue-600">Contact</Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
