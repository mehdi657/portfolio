import { v4 as uuidv4 } from "uuid";

export const infos = [
  {
    id: uuidv4(),
    titre: "Booki",
    cover: "booki.webp",
    code: "https://github.com/mehdi657/site-Booki",
    lien: "https://mehdi657.github.io/site-Booki/",
    description: "Intégrer l'interface du site avec du code HTML et CSS à partir d'une maquette pour un site Internet qui permette aux usagers de trouver des hébergements et des activités",
    tag: ["html", "css"],
  },
  {
    id: uuidv4(),
    titre: "ohmyfood",
    cover: "ohmyfood.webp",
    code: "https://github.com/mehdi657/ohmyfood",
    lien: "https://mehdi657.github.io/ohmyfood/",
    description: "développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques",
    tag: ["html", "sass", "github"],
  },
  {
    id: uuidv4(),
    titre: "La Panthere",
    cover: "lapanthère.webp",
    code: "https://github.com/mehdi657/Agence-La-Panthere",
    lien: "https://mehdi657.github.io/Agence-La-Panthere/",
    description: "Analyse de l’état actuel et amélioration du SEO du site",
    tag: ["html", "css", "lighthouse"],
  },
  {
    id: uuidv4(),
    titre: "Kanap",
    cover: "kanap.webp",
    code: "https://github.com/mehdi657/Kanap",
    description: "Intégrer dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript, création d'un panier via le local storage, et envoi de la commande au serveur",
    tag: ["js", "api", "localstorage"],
  },
  {
    id: uuidv4(),
    titre: "piiquante",
    cover: "piiquante.webp",
    code: "https://github.com/mehdi657/piiquante",
    description: "créer une API sécurisée pour une application web de critique des sauces piquantes",
    tag: ["nodejs", "mongodb", "express"],
  },
  {
    id: uuidv4(),
    titre: "Kasa",
    cover: "kasa.webp",
    code: "https://github.com/mehdi657/Kasa",
    lien: "https://mehdi657.github.io/Kasa/",
    description: "Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !)",
    tag: ["react","figma", "sass"],
  },
  {
    id: uuidv4(),
    titre: "portfolio",
    cover: "portfolio.webp",
    code: "https://github.com/mehdi657/portfolio",
    description: `Créations de mon site "portfolio" avec React.js et sass`,
    tag: ["react", "sass"],
  },
];

export const experiences = [
  {
    id: uuidv4(),
    titre: `Formation`,
    date: "2022-2023",
    description: "Diplôme de Développeur web et web mobiles, Openclassrooms, niveau 5, Bac+2 RNCP",
  },
  {
    id: uuidv4(),
    titre: `Chef d’entreprise " E.M.A.M CONNECT " Saint-Mandé`,
    date: "2017-2021",
    description: "Créer et gérer une entreprise, installer et expliquer les équipements aux clients et intervenir pour le SAV  ",
  },
  {
    id: uuidv4(),
    titre: `Technicien fibre optique "N&K" ( Sous traitant ORANGE )`,
    date: "2015 - 2016",
    description: "Prise des mesures du signal, vérification du bon fonctionnement, installation et explication des équipements aux clients ",
  },
  {
    id: uuidv4(),
    titre: "D’autres expériences dans d’autres domaines",
    date: "2004 - 2014",
    description: "Accueil, conseil clients, vente, télévente,  pâtisserie ",
  },
]
