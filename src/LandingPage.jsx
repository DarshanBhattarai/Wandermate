import React from "react";
import Nav from "./Nav";
import Button from "./Button";

const LandingPg = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col bg-black overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2">
          <img
            src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww"
            alt="Nepal landscape 1"
            className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in"
          />
          <img
            src="https://static.javatpoint.com/tourist-places/images/tourist-places-in-nepal1.png"
            alt="Nepal landscape 2"
            className="w-full h-[250px] object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-100"
          />
          <img
            src="https://www.oyorooms.com/blog/wp-content/uploads/2018/06/Bhoudanath-Stupa.jpg"
            alt="Nepal landscape 3"
            className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200"
          />
          <img
            src="https://v.greattibettour.com/photos/2020/10/kathmandu-durbar-square-24-59127.jpg"
            alt="Nepal landscape 4"
            className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Rara_lake%2C_Mugu.jpg/1200px-Rara_lake%2C_Mugu.jpg"
            alt="Nepal landscape 5"
            className="w-full h-[250px] object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-400 mt-32"
          />
          <img
            src="https://images.articlesfactory.com/750x0/6b4acd8a-2a08-41c1-85e7-94c1b8475eae.webp"
            alt="Nepal landscape 6"
            className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-500 "
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-8">
          <div className="text-center bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm ">
            <h1 className="text-9xl font-bold text-white drop-shadow-[6px_4px_var(--tw-shadow-color)] shadow-red-600 font-bodoni animate-fade-in">
              Nepal
            </h1>
            <h1 className="text-[20px] font-bold text-white mt-4 font-raleway mb-6">
              <span className="text-red-600">" </span>Where Heaven Meets Earth!{" "}
              <span className="text-red-600">"</span>
            </h1>
            <Button to="/SignIn">Get Started....</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPg;
