import React from "react";
import pdf from "../assets/CV AIT MOULAY.pdf";
import cv from "../assets/cv.png";
import loupe from "../assets/eye.png";
import download from "../assets/télécharger.png";

const Cv = () => {
  return (
    <div className="cv">
      <img src={cv} alt="cv" />
      <div className="outils">
        <p>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <img src={loupe} alt="voir" title="visualiser"/>
          </a>
        </p>
        <p>CV</p>
        <p>
          <a href={pdf} download>
            <img src={download} alt="telecharger" title="télécharger"/>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cv;
