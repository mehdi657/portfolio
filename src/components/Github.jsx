import React from "react";
import git from "../assets/github.png";

const Github = () => {
  return (
    <div className="git">
      <a href="https://github.com/mehdi657" className="git_lien">
        <img src={git} alt="logo github" className="git_img" />
        <p className="git_txt">Github</p>
      </a>
    </div>
  );
};

export default Github;
