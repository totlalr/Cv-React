import React from "react";

//Componenst
import EachSkills from "./componenst/EachSkills";

const Skills = (props) => {
  return (
    <React.Fragment>
      <div id="line01" className="lines">
        <EachSkills  skills = {props.skills[0]}/>
      </div>

      <div id="line01" className="lines">
        <EachSkills skills = {props.skills[1]} />
      </div>
    </React.Fragment>
  );
};

export default Skills;
