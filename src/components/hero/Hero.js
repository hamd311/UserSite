import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.png";
import learn from "../../assets/learn.png";

const Hero = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row pt-4">
          <div className="col-lg-6 col-sm-12 hero-text-container">
            <p className="text-capitalize hero-text">
              we deliver superb <br /> creative output to make
              <br /> great things happen
            </p>
            <p className="hero-des-text">
              Our goal is top at the heart of creativity services industry as a
              digital creator.In has a after comment
            </p>
            <button className="get-Quotes btn text-capitalize">
              get started
            </button>
            <button className="btn text-capitalize mx-2">
              <img src={learn} alt="learnmore" width={"47px"} height={"60px"} />
              &nbsp; &nbsp;learn more
            </button>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img src={hero} alt="heroimage" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
