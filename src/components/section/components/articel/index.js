import React from "react";
import { useState } from "react";

//Components
import Skills from "./components/skills";
import Experience from "./components/Experience";

const Articel = (props) => {
  //State

  return (
    <article>
      <div id="article01" className="article-parts">
        <h3>skills</h3>
        <div id="scrolls" className="groups">
          <Skills skills={props.skills} />
        </div>
      </div>
      <Experience experience={props.experience} />
    </article>
  );
};

export default Articel;
