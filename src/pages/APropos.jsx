import React from "react";
import Cv from "../components/Cv";
import Github from "../components/Github";
import Linkedin from "../components/Linkedin";
import mail from "../assets/mail.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TimeLine from "../components/TimeLine";

const APropos = () => {
  return (
    <section className="reseaux scal">
      <TimeLine />
      <h2 className="reseaux_titre">Pour plus d'infos</h2>
      <aside className="reseaux_lien">
        <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
          <Linkedin />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
          <Github />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
          <Cv />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__wobble" initiallyVisible={true}>
          <div className="git">
            <a href="mailto:mehdi657@gmail.com">
              <img src={mail} alt="logo email" className="git_img" />
              <p className="git_txt">email</p>
            </a>
          </div>
        </AnimationOnScroll>
      </aside>
    </section>
  );
};

export default APropos;
