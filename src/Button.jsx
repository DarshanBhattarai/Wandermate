import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, className }) => {
  return (
    <Link to={to} className={`hover:bg-red-600 text-white py-2 px-14  rounded-sm border-2  bg-transparent   border-red-600 transition duration-400 transform hover:scale-105 ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
