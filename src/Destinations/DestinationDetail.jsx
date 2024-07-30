import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Nav";
import Footer from "../Footer";

const DestinationDetail = () => {
  const [destination, setDestination] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [showMorePlace, setShowMorePlace] = useState(null); // State to track which place's details to show
  const { name } = useParams();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/destination");
        if (!response.ok) throw new Error("Did not receive expected data");
        const data = await response.json();
        setDestinations(data);
        setDestination(data.find((dest) => dest.name === name));
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestinations();
  }, [name]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className="flex">
      <Nav />
      <div className="w-1/6 bg-black h-auto p-4">
        <h1 className="text-xl text-yellow-500 font-medium mb-4 mt-16 font-quicksand text-center">
          Popular Destinations
        </h1>
        <div className="text-left pl-3 text-white font-poppins">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              to={`/Destinations/${dest.name}`}
              className="py-2 hover:text-amber-200 flex justify-between mb-5"
            >
              {dest.name}
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full p-6 pt-16 bg-slate-950">
        <div className="relative flex flex-col items-center justify-center bg-black text-white font-bodoni">
          <h1 className="absolute text-5xl font-bold">{destination.name}</h1>
          <img
            src={destination.bgimg}
            alt={destination.name}
            className="w-full h-48 object-cover opacity-50 blur-[1px]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-row text-justify text-white font-raleway">
          <p className="text-xl text-white p-5">{destination.desc}</p>
          <img
            src={destination.map}
            alt={`${destination.name} map`}
            className="w-auto h-96 object-cover p-6"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="text-3xl text-yellow-500 font-medium mb-4 ml-3 mt-16 font-quicksand">
            Key Attractions
          </h1>
          <div className="flex flex-col justify-between text-white">
            {destination.places.map((place, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-row p-5 rounded mb-6">
                  <img
                    src={place.img}
                    alt={place.name}
                    className={`w-full object-cover transition-all duration-500 ${
                      showMorePlace === place.name ? "h-96" : "h-64"
                    }`}
                    loading="lazy"
                  />
                  <div className="flex flex-col p-4">
                    <h2 className="text-2xl text-yellow-500 mt-2 font-poppins">
                      {place.name}
                    </h2>
                    <h2 className="text-lg text-white font-quicksand">
                      {place.about}
                    </h2>
                    <button
                      onClick={() =>
                        setShowMorePlace(
                          showMorePlace === place.name ? null : place.name
                        )
                      }
                      className="mt-4 px-6 py-2 bg-white bg-opacity-64 text-black font-semibold rounded hover:bg-yellow-400"
                    >
                      {showMorePlace === place.name ? "Show Less" : "Learn More"}
                    </button>
                    {showMorePlace === place.name && (
                      <div className="mt-4 p-4 bg-gray-800 text-white rounded">
                        <p>{place.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
            <Footer/>
      </div>
    
    </div>
  );
};

export default DestinationDetail;
