import Header from "../components/Header";
import Projet from "../components/Projet";
import { infos } from "../datas/infos";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () => {
  return (
    <>
      <Header />
      <section className="proj_cards">
        {infos.map((i, x) => (
          <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            animateOut="animate__bounceOutRight"
            initiallyVisible={x === 0 ? true : false}
            décalage="0"
            key={i.id}
          >
            <Projet data={i} />
          </AnimationOnScroll>
        ))}
      </section>
    </>
  );
};

export default Projects;
