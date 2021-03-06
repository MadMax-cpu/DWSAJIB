import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const goto = () => {
    alert("WELCOME TO MY DEVELEOPED PROJECT LIST");
    window.location.href = "https://github.com/MadMax-cpu";
  };
  return (
    <>
      <div className="Container">
        <img src="images/Sajib.jpg" className="img1" />
        <h1>DEVELOPING WITH SAJIB</h1>

        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>HOME</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/Services"}>SERVICES</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/Contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/About"}>ABOUT </Link>
          </li>
        </ul>

        <div className="card">
          <img src="images/w1.jpg"></img>
          <button onClick={goto} target="_blank">
            WEB DEVELOPING
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
