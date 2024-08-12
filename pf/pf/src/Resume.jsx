import React from "react";
import "./Resume.css";
import Button from "@mui/material/Button";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <br />
      {/* <div className="pdf"> */}
      <Document file="/resume.pdf" className="pdf">
        <Page pageNumber={1} />
      </Document>
      {/* </div> */}
      <br />
      <Button variant="contained" color="success">
        <a className="reset-a" href="/resume.pdf" download="SwaroopResume.pdf">
          <FileDownloadIcon className="reset-a_a" /> download
        </a>
      </Button>
    </div>
  );
}

export default Resume;
