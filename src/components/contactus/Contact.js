import "./contact.css";
import callus from "../../assets/callus.png";
import email_icon from "../../assets/email_icon.png";
import address_icon from "../../assets/address_icon.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact_us_1 from "../../assets/contact_us-1.png";
import contact_us_2 from "../../assets/contact_us-2.png";
import contact_us_3 from "../../assets/contact_us-3.png";
import contact_us_4 from "../../assets/contact_us-4.png";
import contact_us_5 from "../../assets/contact_us-5.png";
import contact_us_6 from "../../assets/contact_us-6.png";
import contact_us_7 from "../../assets/contact_us-7.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Gmail",
        "service_yezrz1c",
        form.current,
        "user_Y2seZ5m8GgMTkJnerKz71"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <p className="contacus-text">contact us</p>
            <p>
              Let's make something new, different and more meaningful or make
              thing more visual or conceptual?
            </p>
            <div className=" d-flex ml-n2">
              <img
                src={callus}
                alt="visitors"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="d-flex flex-column">
                <div className="mx-3  callus-text">call us</div>
                <div className="mx-3  contact-no">+92 302 9092649</div>
              </div>
            </div>
            <div className=" d-flex mt-3 ml-n2">
              <img
                src={email_icon}
                alt="visitors"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="d-flex flex-column">
                <div className="mx-3  callus-text">Email</div>
                <div className="mx-3  contact-no">zakirdesign01@gmail.com</div>
              </div>
            </div>
            <div className="d-flex mt-3 ml-n2">
              <img
                src={address_icon}
                alt="visitors"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="d-flex flex-column">
                <div className="mx-3  callus-text">Address</div>
                <div className="mx-3  contact-no">
                  Overseas Sector 5, Phase 8, Bahria <br />
                  Town Rawalpindi.
                </div>
              </div>
            </div>

            <div className="find-us">
              <a
                href="
      https://www.instagram.com/zakirdesigns/"
              >
                <img src={contact_us_3} alt="imag" className="mx-2" />
              </a>
              <a href="">
                <img src={contact_us_4} alt="imag" className="mx-2" />
              </a>

              <a href="https://dribbble.com/zakirdesigns">
                <img src={contact_us_2} alt="imag" className="mx-2" />
              </a>
              <a href="https://www.linkedin.com/company/zakir-designs">
                <img src={contact_us_5} alt="imag" className="mx-2" />
              </a>
              <a href="https://twitter.com/ZAKIRULLAH01">
                <img src={contact_us_6} alt="imag" className="mx-2" />
              </a>
              <a href="https://www.youtube.com/channel/UCzJvFwmHuUNXbbH-uHE86vQ">
                <img src={contact_us_7} alt="imag" className="mx-2" />
              </a>
              <a href="https://www.behance.net/zakirdesigns">
                <img src={contact_us_1} alt="imag" className="mx-2" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <p className="dropLine-text">Drop a Line</p>
            <form onSubmit={sendEmail} ref={form}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-input"
                  id="exampleInputPassword1"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  cols={"75"}
                  rows={"5"}
                  placeholder={"Message"}
                  className="message-textarea"
                  name="message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-form-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
