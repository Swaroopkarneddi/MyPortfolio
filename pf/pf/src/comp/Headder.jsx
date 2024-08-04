import React from "react";
import "./Headder.css";
import { Link } from "react-router-dom";
function Headder() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            Swaroop.<span>Karneddi</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>Skills</Link>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <a
              target="blank"
              href="https://github.com/Swaroopkarneddi?tab=repositories"
            >
              git
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headder;
