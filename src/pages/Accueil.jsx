import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import photo from "../assets/photo.png";


const Accueil = () => {

  return (
    <>
      <Header />
      <section className="accueil">
        <div className="accueil_tim">
          <h1 className="accueil_titre">
            <div className="transY">
              <span className="nom">AIT MOULAY</span>
              <span className="prenom">EL MEHDI</span>
            </div>
            <span className="metier rubber">Développeur Web</span>
          </h1>
          <div className="accueil_img transX1">
          <img
            src={photo}
            alt="Ait moulay el mehdi"
            className="accueil_img"
          /></div>
        </div>
        <ul className="accueil_nav">
          <Link to="/Projects">
            <li className="accueil_li trans-x">Réalisations</li>
          </Link>
          <Link to="/APropos">
            <li className="accueil_li transX2">A propos</li>
          </Link>
        </ul>
      </section>
          <div id="app"></div>
    </>
  );
};

export default Accueil;
