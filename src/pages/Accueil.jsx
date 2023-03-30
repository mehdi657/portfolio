import React from "react";
import photo from "../assets/photo.png";
import Metier from "../components/Metier";

const Accueil = () => {
  return (
    <section className="accueil">
      <span className="hello transY">Bonjour !!!</span>
      <h1 className="accueil_name rubber">
        <span>Je m'appelle </span>
        <span className="accueil_nom">AIT MOULAY</span>
        <span className="accueil_prenom">EL MEHDI</span>
      </h1>
      <div className="accueil_img transX1">
        <img src={photo} alt="Ait moulay el mehdi" className="accueil_img" />
      </div>
      <Metier />
      <p className="about_txt">
        En tant qu'ancien dirigeant d'entreprise , j'ai décidé de m'orienter
        vers le numérique. Mon parcours dans différents secteurs d'activité m’a
        permis d’acquérir plusieurs compétences comme le travail d’équipe,
        l’autonomie, la capacité d’adaptation et de décision et la polyvalence.
        De nature très calme, autodidacte, ambitieux et aimant trouver la
        solution à un problème, je suis Développeur Web et je cherche une
        entreprise pour pouvoir me développer et répondre à ses besoins.
      </p>
    </section>
  );
};

export default Accueil;
