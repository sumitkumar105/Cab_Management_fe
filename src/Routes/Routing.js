import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Header from "../Components/Header";
import Cab from "../Components/Cab";
import Driver from "../Components/Driver";
const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/cab" element={<Cab />} />
        </Routes>
      </Router>
    </>
  );
};
export default Routing;
