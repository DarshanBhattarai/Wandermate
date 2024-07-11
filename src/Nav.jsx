import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/pngwing.com (1).png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md text-white">
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-75 blur-[2px]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex justify-between items-center py-3 px-10 text-base font-extralight">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 text-red-600">
          <img className="w-8 h-8" src={logo} alt="Logo" />
          <h1 className="text-lg font-bold">Nepal</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10">
          <li>
            <Link to="/Component1">About</Link>
          </li>
          <li>
            <Link to="/Component2">Tours</Link>
          </li>
          <li>
            <Link to="/Component3">Sale</Link>
          </li>
          <li>
            <Link to="/Component4">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
