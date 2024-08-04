import React from "react";
import Typer from "./subcomp/Typer";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="main_body">
      <div className="main_body1">
        <div className="main_body1_left">
          <div>
            Hi There!<span className="wave">👋 </span> <br />
            I'M{" "}
            <span className="my_name">KARNEDDI LAKSHMI NARAYANA SWAROOP</span>
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
        <div className="main_body2_top">ksdv</div>
        <div className="main_body2_bottom">f,v,fv</div>
      </div>
    </div>
  );
}

export default MainBody;
