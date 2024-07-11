import React from "react";
import Nav from "./Nav";
import Button from "./Button";

const LandingPg = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        <div className="absolute inset-0">
          <img
            src="https://cdn.wallpapersafari.com/85/2/eXQtqx.jpg"
            alt=""
            className="w-full h-full object-cover brightness-75 saturate-150 blur-[2px]"
          />
        </div>
        <div className="relative z-10 p-4 flex justify-center items-center my-auto">
          <Nav />
          <div className="text-center">
            <h1 className="text-7xl font-bold text-yellow-50 drop-shadow-2xl font-serif">
              <span className="text-red-600">Nep</span>al
            </h1>
            <h1 className="text-2xl font-bold text-white">
              Back on top of the World
            </h1>
            <Button to="/SignIn">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPg;
