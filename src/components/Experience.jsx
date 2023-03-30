import React from "react";

const Experience = ({ props }) => {
  return (
    <div className="row">
      <div className="text scal">
        <h3>{props.titre}</h3>
        <p>{props.description}</p>
      </div>
      <div className="icon">
        <div>
          <i className="bi bi-patch-check-fill"></i>
        </div>
      </div>
      <div className="time">
        <time>{props.date}</time>
      </div>
    </div>
  );
};

export default Experience;
