// src/dashboard/admin.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AdminHome from "./adminHome";
import Hotel from "./hotel";
import Booking from "./booking";
import Travel from "./travel";
// Import other components as needed

const Admin = () => {
  return (
    <div className="flex flex-row">
    
      <nav className="bg-gray-800 h-auto text-white p-16 text-xl ">
        <ul className="flex flex-col gap-4">
          <li><Link to="adminHome">Admin Home</Link></li>
          <li><Link to="hotel">Hotel</Link></li>
          <li><Link to="booking">Booking</Link></li>
          <li><Link to="travel">Travel</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="hotel" element={<Hotel />} />
        <Route path="booking" element={<Booking />} />
        <Route path="travel" element={<Travel />} />
        {/* Add more nested routes here as needed */}
      </Routes>
    </div>
  );
};

export default Admin;
