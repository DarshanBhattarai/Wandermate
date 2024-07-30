import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Home";
import Comp3 from "./Component3";
import Comp4 from "./Component4";
import Nav from "./Nav";
import LandingPg from "./LandingPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Counter from "./demo";
import HotelList from "./Hotels";
import Admin from "./DashBoard/admin";
import DestinationRoute from "./Destinations/DestinationRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPg />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Component3" element={<Comp3 />} />
          <Route path="/Component4" element={<Comp4 />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/demo" element={<Counter />} />
          <Route path="/Hotels" element={<HotelList />} />
          <Route path="/Dashboard/*" element={<Admin />} />
          <Route path="/Destinations/*" element={<DestinationRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
