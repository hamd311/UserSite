import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import "./protfilio.css";

const Protfolio = () => {
  return (
    <>
      <div
        id="our-protfolio"
        className="container text-center protfilio-container mt-5"
      >
        <p className="mt-5">
          <span className="our-text">our </span>
          <span className="our-process-text"> Protfolio</span>
        </p>
        <div>
          <ul className="list-inline mt-4">
            <li className="list-inline-item mx-5">
              <a href="/" className="logo-branding">
                Logo Branding
              </a>
            </li>
            <li className="list-inline-item mx-5">
              <a href="/">Logo Game Design</a>
            </li>
            <li className="list-inline-item mx-5">
              <a href="/">UI/UX Designing</a>
            </li>
            <li className="list-inline-item mx-5">
              <a href="/">Web Design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
          <div className="col">
            <img src={logo1} alt={"SDLMN"} width={"180px"} height={"180px"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Protfolio;
