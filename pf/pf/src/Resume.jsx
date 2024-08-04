import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume">
      Resume
      <br />
      <embed src="/resume.pdf" className="pdf" />
    </div>
  );
}

export default Resume;
