import React from "react";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import instaimg from "../../assets/instaimg.png";
import facebookicon from "../../assets/facebookicon.png";
import dribble from "../../assets/dribble.png";
import linkdin from "../../assets/linkdin.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

import behance from "../../assets/behance.png";

import zakirdesignlogo from "../../assets/zakirdesignlogo.png";
import whatsapplogo from "../../assets/whatsapplogo.png";
// import messengerimg from "../../assets/messengerimg.png";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <a
          href="
      https://www.instagram.com/zakirdesigns/"
        >
          <img
            src={instaimg}
            alt="instaicon"
            className="
        mx-2"
          />
        </a>

        <img
          src={facebookicon}
          alt="facebookicon"
          className="
        mx-2"
        />
        <a href="https://dribbble.com/zakirdesigns">
          <img
            src={dribble}
            alt="facebookicon"
            className="
        mx-2"
          />
        </a>
        <a href="https://www.linkedin.com/company/zakir-designs">
          <img
            src={linkdin}
            alt="facebookicon"
            className="
        mx-2"
          />
        </a>
        <a href="https://twitter.com/ZAKIRULLAH01">
          <img
            src={twitter}
            alt="facebookicon"
            className="
        mx-2"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCzJvFwmHuUNXbbH-uHE86vQ">
          <img
            src={youtube}
            alt="facebookicon"
            className="
        mx-2"
          />
        </a>
        <a href="https://www.behance.net/zakirdesigns">
          {" "}
          <img
            src={behance}
            alt="facebookicon"
            className="
        mx-2"
          />
        </a>

        <Container fluid className=" right-navbar-container">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item mx-2">
              <img src={whatsapplogo} alt="facebookicon" />
            </li>
            <li className="nav-item text-white mt-1 mx-2">+92 302 9092649</li>
            <li className="nav-item text-white mx-2">
              <button className="get-Quotes btn text-capitalize">
                &rarr;get quote
              </button>
            </li>
          </ul>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={zakirdesignlogo}
              alt="logo"
              className="zakir-designs-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link" className="ml-5 mt-3 fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#our-Services" className="ml-3 mt-3 fw-bold">
                Our Services
              </Nav.Link>
              <Nav.Link href="#our-Process" className="ml-3 mt-3 fw-bold">
                Process
              </Nav.Link>
              <Nav.Link href="#our-protfolio" className="ml-3 mt-3 fw-bold">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#link" className="ml-3 mt-3 fw-bold">
                Testimonials
              </Nav.Link>
              <Nav.Link href="#link" className="ml-5 mt-2">
                <button className="get-Quotes btn text-capitalize fw-bold">
                  contact us
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
