import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Hexagon from "../components/Hexagon";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import pdf from "../assets/CV AIT MOULAY.pdf";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const InfoContact = () => {
  return (
    <aside className="reseaux_lien">
      <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
        <Hexagon
          icon={faLinkedinIn}
          lien={"https://www.linkedin.com/in/mehdi657/"}
          text2={"Linkedin"}
        />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
        <Hexagon
          icon={faGithubAlt}
          lien={"https://github.com/mehdi657"}
          text2={"Github"}
        />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
        <Hexagon icon={faAddressCard} lien={pdf} text2={"Mon CV"} />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
        <Hexagon
          icon={faAt}
          lien={"mailto:mehdi657@gmail.com"}
          text2={"Contact"}
        />
      </AnimationOnScroll>
    </aside>
  );
};

export default InfoContact;
