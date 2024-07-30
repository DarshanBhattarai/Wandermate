import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="relative bg-black text-white">
      <img 
        src="https://i.pinimg.com/564x/9e/e7/fa/9ee7fa0d2fcb2be5a25a40e9cdb0745c.jpg" 
        alt="Nepal"  
        className="w-full h-full object-cover absolute inset-0 opacity-50 blur-sm"
      />
      <div className="w-full h-auto bg-black bg-opacity-50 py-16 px-10 md:px-20 flex flex-wrap justify-between relative z-10">
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl font-bold drop-shadow-[2px_4px_var(--tw-shadow-color)] shadow-red-600 font-bodoni animate-fade-in">
            Nepal
          </h1>
          <p className="mt-4 text-lg font-raleway">
            "Where Heaven Meets Earth!"
          </p>
          <p className="mt-4 text-lg font-raleway">nepal@gmail.np</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold text-red-700">Quick links</h2>
          <ul>
            <li className="hover:text-red-600"><Link to="/Home">Home</Link></li>
            <li className="hover:text-red-600"><Link to="/Component2">Destination</Link></li>
            <li className="hover:text-red-600"><Link to="/Hotels">Hotels</Link></li>
            <li className="hover:text-red-600"><Link to="/AdventureActivities">Adventure Activities</Link></li>
            <li className="hover:text-red-600"><Link to="/CulturalAndHeritage">Cultural And Heritage</Link></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold text-red-700">Helps and Information</h2>
          <ul>
            <li className="hover:text-red-600">About Us</li>
            <li className="hover:text-red-600">Privacy Policy</li>
            <li className="hover:text-red-600">Terms and Conditions</li>
            <li className="hover:text-red-600">FAQ</li>
            <li className="hover:text-red-600">Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-red-700">Follow Us</h2>
          <div className="flex gap-3 mt-2 text-2xl">
            <FontAwesomeIcon icon={faFacebook} className="hover:text-red-600" />
            <FontAwesomeIcon icon={faTwitter} className="hover:text-red-600" />
            <FontAwesomeIcon icon={faInstagram} className="hover:text-red-600" />
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-red-600" />
            <FontAwesomeIcon icon={faYoutube} className="hover:text-red-600" />
          </div>
          <p className="mt-4 text-lg font-raleway">Copyright © 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
