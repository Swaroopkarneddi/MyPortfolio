import React from "react";
import "./Resume.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  return (
    <div className="resume">
      Resume
      <br />
      <Document file="/resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
