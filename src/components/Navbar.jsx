import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <>
      <div className="nav">
        <div>logo</div>
        <div className="nav-items">
          <ul>
            <li>
              <p to="/home">Home</p>
            </li>
            <li>
              <p to="/about">About</p>
            </li>
            <li>
              <p to="/services">Services</p>
            </li>
            <li>
              <p to="/contact">Contact Us</p>
            </li>
          </ul>
        </div>
        <div>profile</div>
      </div>
    </>
  );
}

export default Navbar;
