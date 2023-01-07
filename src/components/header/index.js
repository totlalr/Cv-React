import React from "react";

const MainHeader = (props) => {
  return (
    <header>
      <div className="head-top"></div>
      <div className="head-right"></div>
      <div className="head-bottom">
        <div className="margin">
          <div className="image-left"></div>
          <div className="words-right">
            <h3 title="">{props.info.name}</h3>
            <p>{props.info.job}</p>
          </div>
        </div>
        <div className="aesthetic01"></div>
        <div className="aesthetic02"></div>
        <div className="aesthetic03"></div>
      </div>
    </header>
  );
};

export default MainHeader;
