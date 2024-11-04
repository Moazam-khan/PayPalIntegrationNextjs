'use client';

import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaCar } from "react-icons/fa";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";



export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect screen width on resize and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };

    // Set initial state
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
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

  
      {/* Menu Items in the center */}
          <div className="flex space-x-8">
           <div><MenuItem item="/" /> {/* Home Page */}</div>
           <div>  <MenuItem item="/AboutUs" /> {/* About Us Page */}</div>
           <div className="flex align-center" >
            <MenuItem item="/Servicess"> 
        
              <SubMenu >
              <div className="flex flex-col items-left border-l-2 p-4">
                <SubMenuItem href="/Servicess/webdevelopment">Web Development</SubMenuItem>
                <SubMenuItem href="/interface-design">Interface Design</SubMenuItem>
                <SubMenuItem href="/seo">SEO</SubMenuItem>
                <SubMenuItem href="/branding">Branding</SubMenuItem>
                </div>
              </SubMenu>
            </MenuItem>
            </div>
            <div>
                      <MenuItem item="/Contact" /> {/* Contact Page */}
                      </div>
    
          </div>

        
      

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 h-6 w-6 hover:opacity-75" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 h-6 w-6 hover:opacity-75" />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

// MenuItem Component
type MenuItemProps = {
  item: string;
  children?: React.ReactNode;
};

function MenuItem({ item, children }: MenuItemProps) {
  return (
    <div className="relative group">
      <Link href={item}  className="cursor-pointer text-gray-800 hover:text-red-600 transition duration-30">
        {item === '/' ? 'Home' : item.replace('/', '')} {/* Display "Home" instead of "/" */}
      </Link>
      {children && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-40 bg-white shadow-lg rounded-lg transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-2 z-10">
          {children}
        </div>
      )}
    </div>
  );
}

// SubMenu Component
type SubMenuProps = {
  children: React.ReactNode;
};

function SubMenu({ children }: SubMenuProps) {
  return <div>{children}</div>;
}

// SubMenuItem Component
type SubMenuItemProps = {
  href: string;
  children: React.ReactNode;
};

function SubMenuItem({ href, children }: SubMenuItemProps) {
  return (
    <Link href={href} className="text-gray-700 hover:text-red-600 transition duration-30 p-2 block w-full ">
      {children}
    </Link>
  );
}
