import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/hotels');
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
      <h1>Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <br />
            <Link to={`/hotel/${hotel.id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HotelList;
