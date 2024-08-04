import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Fotter.css";

function Fotter() {
  return (
    <div className="footer">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="49%" x2="100%" y2="51%">
            <stop offset="5%" stopColor="#0693e3"></stop>
            <stop offset="95%" stopColor="#9900ef"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,150 C 208.8,132.26666666666665 417.6,114.53333333333333 567,98 C 716.4,81.46666666666667 806.4000000000001,66.13333333333334 942,75 C 1077.6,83.86666666666666 1258.8,116.93333333333334 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>

      <div className="footer_content">
        <footer>
          &copy;2024 India, All Rights Reserved by &nbsp;
          <FontAwesomeIcon icon={faGithub} style={{ color: "#32e10e" }} />
          &nbsp;
          <a
            target="blank"
            href="https://github.com/SwaroopKarneddi"
            className="namelink"
          >
            SwaroopKarneddi
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Fotter;
