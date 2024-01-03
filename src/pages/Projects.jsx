import Projet from "../components/Projet";
import { infos } from "../datas/infos";

const Projects = () => {
  return (
    <section id="Projects" className="proj_cards cursorDefault">
      <h2 className="proj_cards_titre">Mes Projects</h2>
      <article className="proj_cards_bloc">
        {infos.map((i, x) => (
          <Projet data={i} key={i.id} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
