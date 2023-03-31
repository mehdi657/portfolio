import React from "react";
import Tags from "./Tags";

const Projet = (props) => {
  const lien = props.data.lien;

  return (
    <>
      <aside className="projet scal">
        <img
          src={require(`../images/${props.data.cover}`)}
          alt="aperçu du project"
          className="projet_img"
        />
        <h3 className="projet_tit">{props.data.titre}</h3>
        <p className="projet_txt">{props.data.description}</p>
        <ul className="projet_lang">
          {props.data.tag.map((tag, index) => (
            <Tags key={index} tage={tag} />
          ))}
        </ul>
      </aside>
      <aside className="projet_lien">
        {lien ? (
          <div className="scal">
            <a href={lien}>visualiser le site</a>
          </div>
        ) : null}
        <div className="scal">
          <a href={props.data.code}>voir le code</a>
        </div>
      </aside>
      </>
  );
};

export default Projet;
