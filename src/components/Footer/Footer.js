import React from "react";
import "./Footer.css";
// import zakirdesignlogo from "../../assets/zakirdesignlogo.png";
import footer_logo from "../../assets/footer_logo.png";
import footercall from "../../assets/footercall.png";
import whatsapp_footer from "../../assets/whatsapp_footer.png";
import footer_email from "../../assets/footer_email.png";
import contact_us_1 from "../../assets/contact_us-1.png";
import contact_us_2 from "../../assets/contact_us-2.png";
import contact_us_3 from "../../assets/contact_us-3.png";
import contact_us_4 from "../../assets/contact_us-4.png";
import contact_us_5 from "../../assets/contact_us-5.png";
import contact_us_6 from "../../assets/contact_us-6.png";
import contact_us_7 from "../../assets/contact_us-7.png";
const Footer = () => {
  return (
    <div className="footer-container py-5 mt-4">
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <img src={footer_logo} alt={"logo"} className="footer-logo" />
                  <p className="mt-4 our-address">
                    Overseas Sector 5, Phase 8, Bahria Town Rawalpindi Pakistan.
                  </p>
                  <p className="our-address mt-5 ">
                    Copyright ©{Date}. All Rights Reserved.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3"></div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Services<span></span>
                  </h5>
                  <p>logo branding</p>
                  <p>web design</p>
                  <p>app design</p>
                  <p>video editing</p>
                  <p>web application</p>
                  <p>graphic design</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contact<span></span>
                  </h5>

                  <p>
                    <img src={footercall} alt={"call"} />
                    <label>&nbsp;&nbsp;+92 302 9092649</label>
                  </p>
                  <p>
                    <img src={whatsapp_footer} alt={"call"} />
                    <label>&nbsp;&nbsp;+92 302 9092649</label>
                  </p>
                  <p>
                    <img src={footer_email} alt={"call"} />
                    <label>&nbsp;&nbsp;zakirdesign01@gmail.com</label>
                  </p>
                  <h5 class="widget-title footer-followus-text mt-5">
                    Follow us
                  </h5>

                  <a
                    href="
      https://www.instagram.com/zakirdesigns/"
                  >
                    <img src={contact_us_3} alt="imag" className="" />
                  </a>
                  <a href="">
                    <img src={contact_us_4} alt="imag" className="" />
                  </a>

                  <a href="https://dribbble.com/zakirdesigns">
                    <img src={contact_us_2} alt="imag" className="" />
                  </a>
                  <a href="https://www.linkedin.com/company/zakir-designs">
                    <img src={contact_us_5} alt="imag" className="" />
                  </a>
                  <a href="https://twitter.com/ZAKIRULLAH01">
                    <img src={contact_us_6} alt="imag" className="" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCzJvFwmHuUNXbbH-uHE86vQ">
                    <img src={contact_us_7} alt="imag" className="" />
                  </a>
                  {/* <a href="https://www.behance.net/zakirdesigns">
                    <img src={contact_us_1} alt="imag" className="" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
