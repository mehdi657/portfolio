import Metier from "../components/Metier";
import "animate.css";

const Accueil = () => {

  return (
    <section id="accueil" className="accueil cursorDefault">
        <div className="accueil_txt">
          <span className="accueil_txt_hello">Bonjour !!!</span>
          <h1 className="accueil_txt_name">
            <span>Je m'appelle </span>
            <span className="accueil_txt_nom">AIT MOULAY</span>
            <span className="accueil_txt_prenom">EL MEHDI</span>
          </h1>
          <span className="accueil_txt_end">&</span>
          <Metier />
        </div>
      <p className="accueil_para">
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
