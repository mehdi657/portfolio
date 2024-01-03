import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hexagon = (props) => {
  return (
    <div className="hexagon">
      <a href={props.lien}>
        <div className="hexagon_wrapper">
          <div className="hexagon_wrapper2">
            {props.icon ? (
              <FontAwesomeIcon icon={props.icon} className="hexagon_icon" />
            ) : (
              <p className="hexagon_txt1">{props.text1}</p>
            )}
          </div>
        </div>
      </a>
      <a href={props.lien}>
        <p className="hexagon_txt2">{props.text2}</p>
      </a>
    </div>
  );
};

export default Hexagon;
