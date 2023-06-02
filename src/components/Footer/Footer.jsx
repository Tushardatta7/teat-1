import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Tushardatta7"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Tushardatta16"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tushar-datta-452a96182/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tushar_79969/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer