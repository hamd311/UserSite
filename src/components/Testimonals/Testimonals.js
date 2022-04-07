import React from "react";
import "./Testimonals.css";
import leftarrow from "../../assets/leftarrow.png";
import rightarrow from "../../assets/rightarrow.png";
import quots from "../../assets/quots.png";
import user1 from "../../assets/user1.png";

const Testimonals = () => {
  return (
    <div className="testimonals-container">
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <p>Testimonals</p>
            <p className="whatCutomer-says">
              what customers <br></br> say about us
            </p>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col mt-5">
            <img src={leftarrow} alt="arrow" />
            <img src={rightarrow} alt="arrow" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-5">
            <div
              className="card customer-testimonals"
              style={{ width: "25rem" }}
            >
              <div className="card-body">
                <img src={quots} alt={"quots"} />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex          ">
                  <img src={user1} alt={"quots"} />
                  <p className="user-name mx-4 my-2">John peter</p>
                  <div className="d-flex flex-column">
                    <br />
                    <div className="user-name-title">Ceo,card center</div>
                  </div>
                  <div className="mx-2 mt-4">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card customer-testimonals"
              style={{ width: "25rem" }}
            >
              <div className="card-body">
                <img src={quots} alt={"quots"} />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex          ">
                  <img src={user1} alt={"quots"} />
                  <p className="user-name mx-4 my-2">John peter</p>
                  <div className="d-flex flex-column">
                    <br />
                    <div className="user-name-title">Ceo,card center</div>
                  </div>
                  <div className="mx-2 mt-4">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
