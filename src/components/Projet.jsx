import React from "react";
import Tags from "./Tags";

const Projet = (props) => {
  const lien = props.data.lien;

  return (
    <aside>
      <div className="projet">
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
      </div>
      <div className="projet_liens">
        {lien ? (
          <a href={lien} className="projet_liens_lien">
            visualiser le site
          </a>
        ) : null}
        <a href={props.data.code} className="projet_liens_lien">
          voir le code
        </a>
      </div>
    </aside>
  );
};

export default Projet;
