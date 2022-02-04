import React from "react";
import "./Style2.css";
import { Link } from "react-router-dom";
const Contact = () => {
  const gotomyfb = () => {
    alert("u r exiting the page");
    window.location.href = "https://www.facebook.com/vipersajib";
  };
  return (
    <>
      <div className="contact">
        <h2>CONTACT FOR DETAILS</h2>

        <button onClick={gotomyfb}>FACEBOOK</button>
      </div>
    </>
  );
};

export default Contact;
