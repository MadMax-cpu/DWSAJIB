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
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/About"} element={<About />} />
        <Route
          path={process.env.PUBLIC_URL + "/Contact"}
          element={<Contact />}
        />
        <Route
          path={process.env.PUBLIC_URL + "Services"}
          element={<Services />}
        />
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
