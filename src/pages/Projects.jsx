import Projet from "../components/Projet";
import { infos } from "../datas/infos";

const Projects = () => {
  return (
    <section className="proj_cards">
      {infos.map((i, x) => (
        <Projet data={i} key={i.id} />
      ))}
    </section>
  );
};

export default Projects;
