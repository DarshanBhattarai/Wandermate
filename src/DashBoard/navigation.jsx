import React from "react";
const Navigat = () => {
  return (
    <>
      <nav className="">
        <ul>
          <li>
            <Link to="adminHome">Home</Link>
          </li>
          <li>
            <Link to="hotel">Hotel</Link>
          </li>
          <li>
            <Link to="booking">Booking</Link>
          </li>
          <li>
            <Link to="travel">Travel</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigat;
