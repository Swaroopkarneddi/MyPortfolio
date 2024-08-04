import React from "react";
import "./Headder.css";
function Headder() {
  return (
    <header class="header">
      <nav>
        <div class="logo">
          <a href="index.html">
            Swaroop.<span>Karneddi</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="menu-icon">
          &#9776;
        </label>
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headder;
