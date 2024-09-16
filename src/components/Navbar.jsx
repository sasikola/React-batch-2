import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="nav">
        <div>logo</div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>profile</div>
      </div>
    </>
  );
}

export default Navbar;
