import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const images = [
  "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3142916/pexels-photo-3142916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3714145/pexels-photo-3714145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Destination = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/destination");
        if (!response.ok) throw new Error("Did not receive expected data");
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="flex-grow">
        <div className="relative">
          <div className="w-full h-[50vh] relative flex justify-center items-center overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white p-8">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-red-500 font-bodoni">
                  Explore Nepal
                </h1>
                <p className="text-3xl font-quicksand">
                  "Discover Nepal: Nature's Paradise, Culture's Haven"
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">
              Popular Destinations To Visit
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  to={`/Destinations/${destination.name}`}
                  className="relative group text-left"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-64 object-cover mb-2 w-full transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                  />
                  <div className="absolute bottom-2 left-2 text-white text-shadow p-4">
                    <span className="text-lg md:text-[25px] cursor-pointer hover:underline font-quicksand">
                      {destination.name}
                    </span>
                    <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                      {destination.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;