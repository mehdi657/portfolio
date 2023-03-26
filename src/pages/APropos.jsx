import React from "react";
import Cv from "../components/Cv";
import Github from "../components/Github";
import Header from "../components/Header";
import Linkedin from "../components/Linkedin";
import mail from "../assets/kisspng-email.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const APropos = () => {
  return (
    <>
      <Header />
      <section className="about fadeInRight">
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOut="animate__bounceOutLeft"
          initiallyVisible="true"
        >
          <p className="about_txt">
            En tant qu'ancien dirigeant d'entreprise , j'ai décidé de m'orienter
            vers le numérique. Mon parcours dans différents secteurs d'activité
            m’a permis d’acquérir plusieurs compétences comme le travail
            d’équipe, l’autonomie, la capacité d’adaptation et de décision et la
            polyvalence. De nature très calme, autodidacte, ambitieux et aimant
            trouver la solution à un problème, je suis Développeur Web et je
            cherche une entreprise pour pouvoir me développer et répondre à ses
            besoins.
          </p>
        </AnimationOnScroll>
      </section>
      <section className="reseaux">
        <AnimationOnScroll
          className="reseaux_anim"
          animateIn="animate__fadeInRightBig"
          animateOut="animate__bounceOutLeft"
          décalage="0"
        >
          <h2 className="reseaux_titre">Pour plus d'infos</h2>
          <aside className="reseaux_lien">
            <AnimationOnScroll
              animateIn="animate__wobble"
              initiallyVisible={true}
            >
              <Linkedin />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__wobble"
              initiallyVisible={true}
            >
              <Github />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__wobble"
              initiallyVisible={true}
            >
              <Cv />
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__wobble"
              initiallyVisible={true}
            >
              <div className="git">
                <a href="mailto:mehdi657@gmail.com">
                  <img src={mail} alt="logo email" className="git_img" />
                  <p className="git_txt">email</p>
                </a>
              </div>
            </AnimationOnScroll>
          </aside>
        </AnimationOnScroll>
      </section>
    </>
  );
};

export default APropos;
