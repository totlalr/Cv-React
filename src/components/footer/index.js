import React from "react";

const MainFooter = () => {
  return (
    <footer>
      <div className="foot-back"></div>
      <div className="foot-front"></div>
      <div className="foot-words">
        <h3>contact me</h3>
        <ul>
          <li id="contact01">
            <div className="icons">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="words">
              <p title="">Your Location</p>
            </div>
          </li>
          <li id="contact02">
            <div className="icons">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="words">
              <p maxLength="10">mike@yahoo.com</p>
            </div>
          </li>
          <li id="contact03">
            <div className="icons">
              <i className="fas fa-phone"></i>
            </div>
            <div className="words">
              <p>000000000</p>
            </div>
          </li>
          <li id="contact04">
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="words">
              <p>/mike</p>
            </div>
          </li>
          <li id="contact05">
            <div className="icons">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="words">
              <p>@mike</p>
            </div>
          </li>
          <li id="contact06">
            <div className="icons">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="words">
              <p>mike@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default MainFooter;
