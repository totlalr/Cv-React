import React from "react";

//components
import MianAside from "./components/aside";
import Articel from "./components/articel";

const MainSection = (props) => {
  return (
    <React.Fragment>
      <section>
        <div className="margin">
          <MianAside />
          <Articel experience={props.experience} skills={props.skills} />
        </div>
      </section>

      <div className="loop"></div>
    </React.Fragment>
  );
};

export default MainSection;
