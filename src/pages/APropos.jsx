import React from "react";
import TimeLine from "../components/TimeLine";
import Competence from "../components/Competence";
import InfoContact from "../components/InfoContact";

const APropos = () => {
  return (
    <section id="APropos" className="reseaux cursorDefault">
      <h2 className="reseaux_titre">A Propos de moi !!!</h2>
      <TimeLine />
      <Competence />
      <h2 className="reseaux_titre">Pour plus d'infos</h2>
      <InfoContact />
    </section>
  );
};

export default APropos;
