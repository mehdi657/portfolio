import React from "react";
import Experience from "../components/Experience";
import { experiences } from "../datas/infos";

const TimeLine = () => {
  return (
    <aside className="timeline">
      <div className="column">
        {experiences.map((event) => (
          <Experience props={event} key={event.id} />
        ))}
      </div>
    </aside>
  );
};

export default TimeLine;
