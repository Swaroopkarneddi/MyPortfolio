import React from "react";
import Typer from "./subcomp/Typer";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="main_body">
      <div className="main_body1">
        <div className="main_body1_left">
          <div>
            Hi There!<span className="wave">👋 </span> <br />
            I'M{" "}
            <span className="my_name"> LAKSHMI NARAYANA SWAROOP KARNEDDI</span>
            <br />
            <Typer
              dataText={[
                "MERN Stack Developer.",
                "Software Developer.",
                "Freelancer.",
              ]}
            />
          </div>
        </div>
        <div className="main_body1_right">
          <img src="/home_img1.png" alt="" />
        </div>
      </div>
      <div className="main_body2">
        <div className="main_body2_top">
          <div className="main_body2_top_left">
            <img src="/test.jpg" alt="" />
          </div>
          <div className="main_body2_top_right">
            <h1>
              LET ME <span>INTRODUCE</span> MYSELF
            </h1>
            <div>
              <p>
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              </p>
            </div>
            <div>
              <p>
                I am fluent in classics like{" "}
                <span>C++, Javascript and React.</span>
              </p>
            </div>
            <div>
              <p>
                My field of Interest's are building new{" "}
                <span>Web Technologies and Products</span> and also in{" "}
                <span>Coding</span>.
              </p>
            </div>
            <div>
              <p>
                Whenever possible, I also apply my passion for developing
                products with <span>Node.js</span> and{" "}
                <span>Modern Javascript Library and Frameworks</span> like
                <span> React.js</span>
              </p>
            </div>
          </div>
        </div>
        <div className="main_body2_bottom">
          <div className="main_body2_bottom_txt">FIND ME ON</div>
          <div className="main_body2_bottom_asd">
            Feel free to connect with me
          </div>
          <div className="soc_icn">
            <Button
              className="soc_icn_icn"
              target="blank"
              href="https://www.instagram.com/swaroop_karneddi/"
            >
              <InstagramIcon className="soc_icn_icn_icn" />
            </Button>
            <Button
              className="soc_icn_icn"
              target="blank"
              href="https://www.linkedin.com/in/klnswaroop/"
            >
              <LinkedInIcon className="soc_icn_icn_icn" />
            </Button>
            <Button
              className="soc_icn_icn"
              target="blank"
              href="https://wa.me/7981438826"
            >
              <WhatsAppIcon className="soc_icn_icn_icn" />
            </Button>
            <Button
              className="soc_icn_icn"
              target="blank"
              href="https://github.com/Swaroopkarneddi"
            >
              <GitHubIcon className="soc_icn_icn_icn" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
