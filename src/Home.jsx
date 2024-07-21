import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [destinations, setData] = useState([]);
  const [thingsToDo, setThingsToDo] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/topDestinations");
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/thingsToDo");
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setThingsToDo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestinations();
  }, []);

  const images = [
    {
      src: "https://i.pinimg.com/564x/b2/fb/15/b2fb15bd7e0764d8d684a10e7d4cca72.jpg",
      name: "Holi",
    },
    {
      src: "https://i.pinimg.com/564x/2a/6f/fe/2a6ffe448a803aaf0b9d1c1e98c8dd43.jpg",
      name: "Tihar",
    },
    {
      src: "https://i.pinimg.com/564x/fc/79/6e/fc796e10ded3f1ee033524e6c3756bf5.jpg",
      name: "Dashain",
    },
    {
      src: "https://i.pinimg.com/564x/e2/48/4a/e2484a6ffff165497573d186887f3fba.jpg",
      name: "Indra Jatra",
    },
    {
      src: "https://i.pinimg.com/564x/0c/ef/e6/0cefe6232b96abf64fdb88ad69889d2c.jpg",
      name: "Buddha Jayanti",
    },
    {
      src: "https://i.pinimg.com/564x/91/de/6c/91de6c5ae1e16104568237e88908e16d.jpg",
      name: "Lhosar",
    },
  ];
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3000/testimonials");
        if (!response.ok) throw new Error("Did not receive expected data");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        {" "}
        <Nav />
      </div>

      <div className="relative bg-black">
        <img
          src="https://free4kwallpapers.com/uploads/originals/2019/05/18/awesome-himalayas-wallpaper.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-left">
          <div className="absolute "></div>
          <div className="text-left gap-5 ml-24 mb-52">
            <h1 className="text-7xl font-bold font-raleway text-yellow-300">
              Top of the World
            </h1>

            <p className="text-3xl font-poppins text-white ">
              Mt Everest | 8848.9m
            </p>
          </div>
          <button className="bg-white  px-8 py-3 rounded-md ml-[550px] mt-[400px] ">
            Explore more
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-row w-full h-[700px] text-white bg-black px-64">
        <div className="p-2">
          <h1 className="text-4xl font-raleway text-yellow-300">
            Introduction
          </h1>
          <p className="text-xl py-4 pr-6 text-justify font-poppins">
            Nepal, nestled in the heart of the Himalayas, is a land of
            extraordinary natural beauty, rich cultural heritage, and warm
            hospitality. Renowned for its stunning landscapes, including the
            world's highest peaks such as Mount Everest, Nepal offers a unique
            blend of breathtaking scenery, ancient temples, and vibrant
            traditions. This small yet diverse country is a haven for
            adventurers, spiritual seekers, and culture enthusiasts alike,
            promising an unforgettable experience for every visitor.
          </p>
        </div>
        <img
          src="https://media.sciencephoto.com/image/c0134020/800wm"
          alt=""
          className="w-auto h-72"
        />
      </div>
      <div className="flex justify-center items-center flex-col w-full h-[700px] text-white bg-black">
        <h1 className="text-4xl font-raleway text-yellow-300 ">
          Top Destinations
        </h1>
        <div className="flex flex-wrap justify-center px-12">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative group w-auto h-64 m-4 overflow-hidden rounded-md"
            >
              <div className="absolute  bg-black  opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out p-2 text-md text-white rounded-sm ">
                {destination.name}
              </div>
              <div className="w-full h-full overflow-hidden rounded-md">
                <img
                  src={destination.img}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg cursor-pointer hover:underline font-quicksand">
                  {destination.name}
                </span>
                <div className="mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                  {destination.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-auto text-white bg-black">
        <h1 className="text-4xl font-raleway text-yellow-300">Things to Do</h1>
        <div className="flex flex-wrap justify-center px-12">
          {thingsToDo.map((activity) => (
            <div
              key={activity.id}
              className="relative group w-auto h-64 m-4 overflow-hidden rounded-md"
            >
              <div className="absolute bg-black opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out p-2 text-md text-white rounded-sm">
                {activity.name}
              </div>
              <div className="w-full h-full overflow-hidden rounded-md">
                <img
                  src={activity.img}
                  alt={activity.name}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg cursor-pointer hover:underline font-quicksand">
                  {activity.name}
                </span>
                <div className="mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                  Price: ${activity.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-auto text-white bg-black py-20 ">
        <h1 className="text-4xl font-raleway text-yellow-300 pb-6">
          Cultural Insights
        </h1>
        <div className="grid grid-cols-6 gap-5 px-52">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg font-semibold">{image.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col w-full h-auto text-white bg-gray-900 py-16">
        <h1 className="text-4xl font-raleway text-yellow-300 pb-6">
          What Our Visitors Say
        </h1>
        <div className="flex flex-wrap justify-center px-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-black text-white p-6 m-4 rounded-md shadow-lg w-80 h-auto flex flex-col items-center"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mr-16"
                />
                <div className="flex flex-col items-start">
                  <p className="text-sm font-semibold pb-2">{testimonial.name}</p>
                  <p className="flex items-center text-sm">
                    <span className={`fi ${testimonial.flag} text-2xl mr-2`} />{" "}
                    {testimonial.country}
                  </p>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-center font-raleway">
                {testimonial.text}
              </h3>
            </div>
          ))}
        </div>
      </div> 
    </>
  );
};

export default HomePage;
