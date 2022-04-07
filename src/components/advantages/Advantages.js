import React from "react";
import "./Advantages.css";
import innovation from "../../assets/innovation.png";
import quality from "../../assets/quality.png";
import experience from "../../assets/experience.png";
import happyclients from "../../assets/happyclients.png";
import support from "../../assets/support.png";

const Advantages = (props) => {
  return (
    <div className="advantages container mt-5">
      <div className="row">
        <p className="mx-auto our-advantages text-uppercase text-white my-5">
          <span className="text-dark">our</span> advantages
        </p>
      </div>
      <div className="row pb-5">
        <div className="col text-center">
          <img src={innovation} alt="img" />
          <p className="text-uppercase fw-bold">innovation</p>
        </div>
        <div className="col text-center">
          <img src={quality} alt="img" />
          <p className="text-uppercase fw-bold">quility</p>
        </div>
        <div className="col text-center">
          <img src={experience} alt="img" />
          <p className="text-uppercase  fw-bold">experience</p>
        </div>

        <div className="col text-center">
          <img src={happyclients} alt="img" />
          <p className="text-uppercase fw-bold">happy clients</p>
        </div>
        <div className="col text-center">
          <img src={support} alt="img" />
          <p className="text-uppercase fw-bold">support</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
