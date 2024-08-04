import React from "react";
import Typer from "./subcomp/Typer";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="main_body">
      <div className="main_body1">
        <div>
          Hi There!<span className="wave">👋 </span> <br />
          I'M KARNEDDI LAKSHMI NARAYANA SWAROOP
          <br />
          <Typer
            dataText={[
              "MERN Stack Developer.",
              "Software Developer.",
              "Freelancer",
            ]}
          />
        </div>
        <div>img</div>
      </div>
      <div className="main_body2">hdbvjdvj</div>
    </div>
  );
}

export default MainBody;
