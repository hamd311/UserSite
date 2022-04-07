import React from "react";
import "./Whatwedo.css";
import logo from "../../assets/logo.png";
import game from "../../assets/game.png";
import uiux from "../../assets/uiux.png";
import web from "../../assets/web.png";
import webapplication from "../../assets/webapplication.png";
import mobileapplication from "../../assets/mobileapplication.png";
import videoediting from "../../assets/videoediting.png";
import ghraphicdesign from "../../assets/ghraphicdesign.png";

const Whatwedo = () => {
  return (
    <div className="container mt-5" id="our-Services">
      <div className="row">
        <div className="col text-center">
          <p className="fw-bold what-wedo-text mt-4">
            Our <span className="we-do">Services</span>
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <img src={logo} alt="" />
          <p className="whatWeDo-item">Logo branding</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
        <div className="col text-center">
          <img src={game} alt="" />
          <p className="whatWeDo-item">game design</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.
          </p>
        </div>
        <div className="col text-center mt-n3">
          <img src={uiux} alt="" />
          <p className="whatWeDo-item">UI/UX Designing</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
        <div className="col text-center">
          <img src={web} alt="" />
          <p className="whatWeDo-item">Web Design</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <img src={webapplication} alt="" />
          <p className="whatWeDo-item">web application</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
        <div className="col text-center">
          <img src={mobileapplication} alt="" />
          <p className="whatWeDo-item">mobile application</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
        <div className="col text-center">
          <img src={videoediting} alt="" />
          <p className="whatWeDo-item">video editing</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
        <div className="col text-center">
          <img src={ghraphicdesign} alt="" />
          <p className="whatWeDo-item">graphics design</p>
          <p className="whatWeDo-subtext">
            Need Brand Identity? Don't Worry We Will Make For You.s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
