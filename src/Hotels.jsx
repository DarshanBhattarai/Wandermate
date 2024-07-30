import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/hotels");
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className=" bg-black flex justify-center">
        <Nav />
        <div className=" ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSTrAju0NvEwOcWOyfxZSoWv73kdgheSd_Q&s" alt=""  className="w-full h-auto"/>
        </div>
      </div>
      {/* <div>
      <h1 className="text-lg font-playwrite font-semibold">Hotels</h1>

        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <h2 className="">{hotel.name}</h2>
              <p>Price: ${hotel.price}</p>
              <Link to={"/hotel/${hotel.id"}>{hotel.name}</Link>
              <p>Rating: {hotel.rating}</p>
              <img
                src={hotel.img}
                alt={hotel.name}
                style={{ width: "200px" }}
              />
              <p>{hotel.desc}</p>
            </li>
          ))}
        </ul>
      </div> */}
      
    </>
  );
};
export default HotelList;
