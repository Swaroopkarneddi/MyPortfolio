import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="part1">
        <div className="part1_left">
          <h1>Know Who I'M</h1>
          <p>
            Hi Everyone, I am Lakshmi Narayana Swaroop Karneddi from
            Andhrapradesh, India. I am currently .
          </p>
          <p>
            Apart from coding, some other activities that I love to do!
            <br />
            <ul>
              <li>Playing Games</li>
              <li>Writing Tech Blogs</li>
              <li>Travelling</li>
            </ul>
          </p>
          <p>"Strive to build things that make a difference!" </p>
        </div>
        <div className="part1_right">
          <img src="/home_img1.png" alt="" />
        </div>
      </div>
      <div className="part2">skills</div>
      <div className="part3"> tools</div>
    </div>
  );
}

export default About;
