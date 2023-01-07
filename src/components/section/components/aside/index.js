import React from "react";

//Components
import Education from "./components";
import AboutMe from "./components/AboutMe";

const MianAside = () => {
  return (
    <aside>
      <div id="aside01" className="aside-parts">
        <AboutMe />
      </div>
      <div id="aside02" className="aside-parts">
        <h3>education</h3>
        <ul id="scrolls">
          <Education />
          <Education />
        </ul>
      </div>
    </aside>
  );
};

export default MianAside;
