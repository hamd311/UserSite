import React from "react";
import "./aboutus.css";
import img from "../../assets/aboutus.png";
import requestcall from "../../assets/requestcall.png";
import consultaion from "../../assets/consultaion.png";
import planing from "../../assets/planing.png";
import workprocess from "../../assets/workprocess.png";
import correcting from "../../assets/correcting.png";
import deliver from "../../assets/deliver.png";
const aboutus = () => {
  return (
    <div className="container-fluid about-us mt-5">
      {/* <img src={img} alt="" className="background-img" /> */}
      <div className="container">
        <div className="row">
          <div className="col-7"></div>
          <div className="aboutus-text col-xl-4 mt-5 col-sm-12">
            <p className="about-text text-uppercase mt-5">About us</p>
            <p className="text-agency">Great Digital Agency</p>
            <p className="text-agency-top-text">
              Our products are fully custom-made, built with the latest
              technologies and cloud-architectures
            </p>
            <p className="text-agency-bottom-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. In convallis porta mauris non aliquam.
            </p>
            <button type="button" class="btn get-started">
              Get Started
            </button>
          </div>
        </div>
        <div className="container text-center  our-process" id="our-Process">
          <p>
            <span className="our-text">our </span>{" "}
            <span className="our-process-text"> process</span>
          </p>
          <p>uasdhfaiushdk akudhvasu uasndfuuas uiashdfa</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={requestcall} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">request call</p>
          </div>
          <div className="col text-center">
            <img src={consultaion} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">consultaion</p>
          </div>
          <div className="col text-center">
            <img src={planing} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">planning</p>
          </div>
          <div className="col text-center">
            <img src={workprocess} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">work process</p>
          </div>
          <div className="col text-center">
            <img src={correcting} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">correcting</p>
          </div>
          <div className="col text-center">
            <img src={deliver} alt="" width={"140px"} height={"150px"} />
            <p className="text-uppercase mt-3">deliver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
