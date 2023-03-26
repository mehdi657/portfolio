import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Tags = ({ tage }) => {
  return (
    <li className="projet_lang_img">
      <AnimationOnScroll
        animateIn="animate__rubberBand"
        initiallyVisible={true}
        décalage="0"
      >
        <img src={`./${tage}.png`} alt={tage} title={tage} />
      </AnimationOnScroll>
    </li>
  );
};

export default Tags;
