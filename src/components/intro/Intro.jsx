import React from "react";
import "./intro.css";
import Me from "../../img/coder.png";
import Mouse from "../common/Mouse";

function Intro() {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Anjan Talatam</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front-End Developer</div>
                <div className="i-title-item">Content Creator</div>
                <div className="i-title-item">Technical Writer</div>
                <div className="i-title-item">Graphic Designer</div>
              </div>
            </div>
            <p className="i-desc">
              Self-taught Front-end developer with over 1 year of hands-on
              experience in Front-End. Proficient in React/ Javascript
              fundamentals. Looking for a challenging problem and an amazing
              team.
            </p>
          </div>
          <Mouse className="i-scroll" />
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
