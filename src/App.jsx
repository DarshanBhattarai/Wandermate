import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comp1 from "./Component1";
import Comp2 from "./Component2";
import Comp3 from "./Component3";
import Comp4 from "./Component4";
import Nav from "./Nav";
import LandingPg from "./LandingPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Counter from "./demo";
import HotelList from "./Hotels";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      
        <Routes>
          <Route path="/" element={<LandingPg/>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Component1" element={<Comp1 />} />
          <Route path="/Component2" element={<Comp2 />} />
          <Route path="/Component3" element={<Comp3 />} />
          <Route path="/Component4" element={<Comp4 />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/demo" element={<Counter />} />
          <Route path="/Hotels" element={<HotelList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
