import React from "react";
import linke from "../assets/linkedin.png";

const Linkedin = () => {
  return (
    <div className="linkedin">
      <a href="https://www.linkedin.com/in/mehdi657/" className="linkedin_lien">
        <img src={linke} alt="logo linkedin" className="linkedin_img" />
        <p className="linkedin_txt">
        Linkedin
        </p>
      </a>
    </div>
  );
};

export default Linkedin;
