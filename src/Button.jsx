import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-block px-6 py-3 mt-4 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      {children}
    </Link>
  );
};

export default Button;
