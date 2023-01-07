import React from "react";
import { useState } from "react";

//Components
import MainHeader from "./header";
import MainSection from "./section";
import MainFooter from "./footer";

const MainComponent = () => {
  //States
  const [experience, setExperience] = useState([
    {
      id: 12558548,
      year: 2022,
      startDate: "starting",
      text: "  This text is a text that is of no use and is used in the filling ofblanks Do not tire yourself in the readers in this text is useless,did you understand or not? , You seem to insist on reading, so dowhat you want",
    },

    {
      id: 1224588,
      year: 2020,
      startDate: "starting",
      text: "  This text is a text that is of no use and is used in the filling ofblanks Do not tire yourself in the readers in this text is useless,did you understand or not? , You seem to insist on reading, so dowhat you want",
    },
    {
      id: 24545454,
      year: 2019,
      startDate: "starting",
      text: "  This text is a text that is of no use and is used in the filling ofblanks Do not tire yourself in the readers in this text is useless,did you understand or not? , You seem to insist on reading, so dowhat you want",
    },
  ]);

  const [skills, setskills] = useState([
    [
      { name: "HTML5", id: 20 },
      { name: "CSS", id: 356 },
      { name: "JAVASCRIPT", id: 228 },
    ],
    [
      { name: "VUE", id: 23 },
      { name: "SASS", id: 24 },
      { name: "JQUERY", id: 25 },
    ],
  ]);

  const [info, setInfo] = useState({
    name: "mike maraandy",
    job: "web designer",
  });

  return (
    <div className="cv-base">
      <div className="back"></div>
      <div className="front">
        <MainHeader info={info} />
        <MainSection experience={experience} skills={skills} />
        <MainFooter />
      </div>
    </div>
  );
};

export default MainComponent;
