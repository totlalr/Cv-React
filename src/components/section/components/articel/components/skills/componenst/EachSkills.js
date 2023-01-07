import React from "react";

const EachSkills = (props) => {
  return (
    <ul>
      {props.skills.map((item) => {
        return (
          <li key={item.id}>
            <div className="icons">
              <i className="fas fa-star"></i>
            </div>
            <div className="words">
              <p>{item.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default EachSkills;
