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
            Andhrapradesh, India. <br /> I am currently pursuing my B.Tech CSE
            from Lovely Professional University, Jalandhar.
          </p>
          <p>
            Apart from coding, some other activities that I love to do!
            <br />
            <ul>
              <li>🕹️ Playing Games</li>
              <li>📚 Reading Comics</li>
              <li>🪴 Exploring new Things</li>
            </ul>
          </p>
          <p>
            "Learning never exhausts the mind." <br />– Leonardo da Vinci
          </p>
        </div>
        <div className="part1_right">
          <img src="/skill2.png" alt="" />
        </div>
      </div>
      <div className="part2">skills</div>
      <div className="part3"> tools</div>
    </div>
  );
}

export default About;
