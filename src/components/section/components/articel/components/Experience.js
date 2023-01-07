import React from "react";

const Experience = (props) => {
  return (
    <div id="article02" className="article-parts">
      <h3>work experience</h3>
      <ul id="scrolls">
        {props.experience.map((item) => {
          return (
            <li id="experience01" key={item.id}>
              <h3>{item.year}</h3>
              <p>{item.startDate}</p>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
