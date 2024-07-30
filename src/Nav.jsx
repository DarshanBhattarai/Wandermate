import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/pngwing.com (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] = useState(false);
  const [isCultureDropdownOpen, setIsCultureDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleActivitiesDropdown = () => {
    setIsActivitiesDropdownOpen(!isActivitiesDropdownOpen);
    setIsCultureDropdownOpen(false);
  };

  const toggleCultureDropdown = () => {
    setIsCultureDropdownOpen(!isCultureDropdownOpen);
    setIsActivitiesDropdownOpen(false);
  };
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white font-normal bg-gradient-to-b from-gray-900 opacity-75 ">
      <div className="relative flex justify-between items-center py-3 px-5">
        {/* Logo and Title */}
        <div className="flex items-center mr-5 gap-2 text-red-600">
          <img className="w-10 h-12" src={logo} alt="Logo" />
          <h1 className="text-3xl font-bold text-white font-bodoni">Nepal</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10 items-center justify-center text-lg font-quicksand">
          <li>
            <Link to="/Home" className="hover:text-yellow-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Destinations" className="hover:text-yellow-200">
              Destination
            </Link>
          </li>
          <li>
            <Link to="/Hotels" className="hover:text-yellow-200">
              Hotels
            </Link>
          </li>
          <li className="relative">
            <button
              className="text-white flex items-center hover:text-yellow-200 focus:outline-none"
              onClick={toggleActivitiesDropdown}
            >
              Activities <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </button>
            {isActivitiesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-52 bg-black bg-opacity-40 text-white drop-shadow-xl   rounded shadow-lg">
                <li>
                  <Link
                    to="/activities/adventure"
                    className="block px-4 py-2 text-white hover:text-white hover:bg-black"
                  >
                   Things to do
                  </Link>
                </li>
                <li>
                  <Link
                    to="/activities/local"
                    className="block px-4 py-2 text-white hover:bg-black"
                  >
                   Adventure Activities
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              className="text-white flex items-center hover:text-yellow-200 focus:outline-none"
              onClick={toggleCultureDropdown}
            >
              Culture <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </button>
            {isCultureDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-52 bg-black bg-opacity-40 text-white drop-shadow-xl   rounded shadow-lg">
                <li>
                  <Link
                    to="/culture/museums"
                    className="block px-4 py-2 text-white hover:bg-black"
                  >
                   Culture and Heritage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/culture/festivals"
                    className="block px-4 py-2 text-white hover:bg-black"
                  >
                    Events and Festivals
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/Component6" className="hover:text-gray-300">
              About us
            </Link>
          </li>
          <li className="flex justify-center items-center">
          {isSearchOpen &&(
            <input type="text" className="bg-white p-2 rounded-md h-8 w-52 text-sm"placeholder="Search"/>
          )} 
            <button onClick={toggleSearch}><FontAwesomeIcon icon={faSearch} className="w-5 h-5 pl-2" /></button>
          </li>
          <li>
            <Link
              to="/profile"
              className="block  py-2 text-white "
            >
              <FontAwesomeIcon icon={faUser} className="border-2 rounded-full p-2 hover:border-red-600" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
