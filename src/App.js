import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";

import About from "./components/About";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
};
const Home = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
