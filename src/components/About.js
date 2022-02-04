import React from "react";
import "./Style2.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="aboutc">
        <p>WELCOME TO MY PROFILE</p>
        <img src="images/profile.jpg" />
        <ul>
          <li color="red">
            <Link to="/">HOME</Link>
          </li>
        </ul>
        <span>Name:MD MEHEDI AL MASUD SAJIB</span>
      </div>
    </>
  );
};

export default About;
