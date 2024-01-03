import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = ({ props }) => {
  return (
    <div className="row">
      <div className="text">
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          animateOut="animate__zoomOut"
        >
          <h3>{props.titre}</h3>
          <p className="timelineText">{props.description}</p>
        </AnimationOnScroll>
      </div>
      <div className="icon">
        <div className="hexa">
          <i className="bi bi-hexagon">
            <i className="bi bi-check"></i>
          </i>
        </div>
      </div>
      <div className="time">
        <time>{props.date}</time>
      </div>
    </div>
  );
};

export default Experience;
